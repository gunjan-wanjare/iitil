/**
 * Temporary script — captures scroll debug logs + DOM measurements.
 */
import { chromium } from "playwright";

const BASE = process.env.BASE_URL ?? "http://localhost:3000";
const VIEWPORT = { width: 1440, height: 900 };

const logs = [];

function attachConsole(page, label) {
  page.on("pageerror", (err) => console.error(`[${label} pageerror]`, err.message));
  page.on("console", (msg) => {
    if (msg.type() === "error") {
      console.error(`[${label} console.error]`, msg.text());
    }
    const text = msg.text();
    if (text.includes("[ScrollStack DEBUG]") || text.includes("[HScroll DEBUG]")) {
      logs.push({ page: label, text });
    }
  });
}

async function scrollToY(page, y) {
  await page.evaluate((top) => window.scrollTo({ top, behavior: "instant" }), y);
  await page.waitForTimeout(350);
}

async function readHorizontalSections(page) {
  return page.evaluate(() => {
    const ids = ["data-intelligence", "technology-services", "industry-verticals"];
    return ids.map((id) => {
      const root = document.getElementById(id);
      const sections = root?.querySelectorAll("section") ?? [];
      const desktop = sections[1] ?? sections[0];
      const track = desktop?.querySelector(".flex.gap-6");
      const vw = window.innerWidth;
      const vh = window.innerHeight;
      const trackWidth = track?.scrollWidth ?? null;
      const distance =
        trackWidth != null ? Math.max(0, trackWidth - vw) : null;
      const containerHeight = desktop?.getBoundingClientRect().height ?? null;
      return {
        id,
        containerRef: desktop != null,
        trackRef: track != null,
        innerWidth: vw,
        innerHeight: vh,
        trackScrollWidth: trackWidth,
        distance,
        containerHeight,
        sectionDisplay: desktop ? getComputedStyle(desktop).display : null,
        sectionClass: desktop?.className ?? null,
      };
    });
  });
}

async function readScrollStackContainer(page) {
  return page.evaluate(() => {
    const services = document.getElementById("services");
    const containers = services?.querySelectorAll(":scope > div > div");
    let stackContainer = null;
    services?.querySelectorAll("div").forEach((el) => {
      const h = el.getBoundingClientRect().height;
      if (h > window.innerHeight * 2) stackContainer = el;
    });
    return {
      servicesFound: services != null,
      stackContainerFound: stackContainer != null,
      stackHeight: stackContainer?.getBoundingClientRect().height ?? null,
      innerHeight: window.innerHeight,
      scrollY: window.scrollY,
    };
  });
}

async function captureScrollStack(page) {
  await page.goto(`${BASE}/`, { waitUntil: "networkidle" });
  await scrollToY(page, 0);
  await page.waitForTimeout(1500);

  const stackInfo = await page.evaluate(() => {
    const services = document.getElementById("services");
    let container = null;
    services?.querySelectorAll("div").forEach((el) => {
      const style = el.getAttribute("style") || "";
      if (style.includes("vh") && el.getBoundingClientRect().height > window.innerHeight * 2) {
        container = el;
      }
    });
    if (!container) return null;
    const top = window.scrollY + container.getBoundingClientRect().top;
    const height = container.getBoundingClientRect().height;
    return { top, height, innerHeight: window.innerHeight };
  });

  if (!stackInfo) {
    await page.locator("#services").scrollIntoViewIfNeeded();
    await page.waitForTimeout(500);
    await page.mouse.wheel(0, 8000);
    return;
  }

  const range = Math.max(stackInfo.height - stackInfo.innerHeight, 1);
  for (const pct of [0, 0.25, 0.5, 0.75, 1]) {
    await scrollToY(page, stackInfo.top + range * pct);
  }
}

async function captureHorizontal(page) {
  await page.goto(`${BASE}/solutions`, { waitUntil: "networkidle" });
  await scrollToY(page, 0);
  await page.waitForTimeout(2000);
  await page.evaluate(() => window.dispatchEvent(new Event("resize")));
  await page.waitForTimeout(1000);

  const domBefore = await readHorizontalSections(page);

  for (const id of ["data-intelligence", "technology-services", "industry-verticals"]) {
    const meta = await page.evaluate((sectionId) => {
      const root = document.getElementById(sectionId);
      const section = root?.querySelector("section");
      if (!section) return null;
      const top = window.scrollY + section.getBoundingClientRect().top;
      const height = section.getBoundingClientRect().height;
      return { top, height, innerHeight: window.innerHeight };
    }, id);

    if (!meta) continue;

    const range = Math.max(meta.height - meta.innerHeight, 1);
    for (const pct of [0, 0.25, 0.5, 0.75, 1]) {
      await scrollToY(page, meta.top + range * pct);
    }
  }

  const domAfter = await readHorizontalSections(page);
  return { domBefore, domAfter };
}

async function main() {
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({ viewport: VIEWPORT });
  const home = await context.newPage();
  const solutions = await context.newPage();

  attachConsole(home, "home");
  attachConsole(solutions, "solutions");

  await captureScrollStack(home);
  const horizontalDom = await captureHorizontal(solutions);

  const stackDom = await readScrollStackContainer(home);

  await browser.close();

  console.log("\n========== RUNTIME REPORT ==========\n");
  console.log(`Viewport: ${VIEWPORT.width}×${VIEWPORT.height}\n`);

  console.log("--- ScrollStack console milestones (/) ---");
  logs
    .filter((l) => l.page === "home")
    .forEach((l) => console.log(l.text));

  console.log("\n--- ScrollStack DOM (/) ---");
  console.log(JSON.stringify(stackDom, null, 2));

  console.log("\n--- HorizontalScrollCards console (/solutions) ---");
  const hLogs = logs.filter((l) => l.page === "solutions");
  if (hLogs.length === 0) {
    console.log("(no [HScroll DEBUG] console logs captured)");
  } else {
    hLogs.forEach((l) => console.log(l.text));
  }

  console.log("\n--- HorizontalScrollCards DOM before scroll (/solutions) ---");
  console.log(JSON.stringify(horizontalDom?.domBefore, null, 2));

  console.log("\n--- HorizontalScrollCards DOM after scroll (/solutions) ---");
  console.log(JSON.stringify(horizontalDom?.domAfter, null, 2));

  console.log(`\n--- Total debug log lines: ${logs.length} ---`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
