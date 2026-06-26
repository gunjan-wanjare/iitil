"use client";

import { memo, useState, useCallback } from "react";
import Image from "next/image";

interface TeamMemberImageProps {
  src: string;
  alt: string;
  name: string;
  className?: string;
  priority?: boolean;
  sizes?: string;
}

function getInitials(name: string): string {
  return name
    .split(" ")
    .map((part) => part[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

const TeamMemberImage = memo(function TeamMemberImage({
  src,
  alt,
  name,
  className = "",
  priority = false,
  sizes = "(max-width: 768px) 100vw, 33vw",
}: TeamMemberImageProps) {
  const [hasError, setHasError] = useState(false);

  const handleError = useCallback(() => setHasError(true), []);

  if (hasError) {
    return (
      <div
        className={`flex items-center justify-center bg-gradient-to-br from-[#2563eb]/30 to-[#1d4ed8]/20 ${className}`}
        role="img"
        aria-label={alt}
      >
        <span className="text-3xl md:text-4xl font-bold text-white/80 tracking-tight">
          {getInitials(name)}
        </span>
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      fill
      sizes={sizes}
      priority={priority}
      onError={handleError}
      className={`object-cover object-top ${className}`}
    />
  );
});

export default TeamMemberImage;
