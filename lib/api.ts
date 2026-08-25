type ApiErrorResponse = {
  message?: string;
  errors?: string[];
};

type ApiRequestConfig = Omit<RequestInit, "body" | "method">;

const apiUrl = process.env.NEXT_PUBLIC_API_URL;
const fallbackErrorMessage = "Unable to send your message. Please try again.";

function getApiUrl() {
  if (!apiUrl) {
    throw new Error("NEXT_PUBLIC_API_URL is required.");
  }

  return apiUrl;
}

async function getErrorMessage(response: Response) {
  const error = (await response.json().catch(() => null)) as ApiErrorResponse | null;

  return error?.errors?.[0] ?? error?.message ?? fallbackErrorMessage;
}

async function request<T>(endpoint: string, config: RequestInit) {
  const response = await fetch(`${getApiUrl()}${endpoint}`, {
    ...config,
    headers: {
      "Content-Type": "application/json",
      ...config.headers,
    },
  });

  if (!response.ok) {
    throw new Error(await getErrorMessage(response));
  }

  return (await response.json().catch(() => undefined)) as T;
}

export const api = {
  post<T>(endpoint: string, data?: unknown, config?: ApiRequestConfig) {
    return request<T>(endpoint, {
      ...config,
      method: "POST",
      body: JSON.stringify(data),
    });
  },
};
