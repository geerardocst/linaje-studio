"use client";

import { ReactLenis } from "@studio-freight/react-lenis";

export const Providers = ({ children }: { children: any }) => {
  return (
    <ReactLenis root options={{ lerp: 0.05, duration: 1.5, smoothWheel: true }}>
      {children}
    </ReactLenis>
  );
};