"use client";

import Link from "next/link";
import type { PointerEvent, ReactNode } from "react";

type MagneticLinkProps = {
  href: string;
  className?: string;
  children: ReactNode;
};

export default function MagneticLink({ href, className = "", children }: MagneticLinkProps) {
  function handlePointerMove(event: PointerEvent<HTMLAnchorElement>) {
    if (event.pointerType === "touch" || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const bounds = event.currentTarget.getBoundingClientRect();
    const offsetX = ((event.clientX - bounds.left) / bounds.width - 0.5) * 8;
    const offsetY = ((event.clientY - bounds.top) / bounds.height - 0.5) * 6;
    event.currentTarget.style.setProperty("--magnetic-x", `${offsetX}px`);
    event.currentTarget.style.setProperty("--magnetic-y", `${offsetY}px`);
  }

  function resetPointer(element: HTMLAnchorElement) {
    element.style.removeProperty("--magnetic-x");
    element.style.removeProperty("--magnetic-y");
  }

  return (
    <Link
      className={`magnetic-link transition-transform duration-300 motion-reduce:transition-none ${className}`.trim()}
      href={href}
      onPointerMove={handlePointerMove}
      onPointerLeave={(event) => resetPointer(event.currentTarget)}
      onBlur={(event) => resetPointer(event.currentTarget)}
    >
      {children}
    </Link>
  );
}