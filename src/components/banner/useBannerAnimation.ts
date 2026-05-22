import { useEffect } from "react";
import gsap from "gsap";

interface Props {
  containerRef: React.RefObject<HTMLDivElement | null>;
  iconsRef: React.RefObject<HTMLDivElement | null>;
}

export function useBannerAnimation({ containerRef, iconsRef }: Props) {
  useEffect(() => {
    const ctx = gsap.context(() => {
      // ─── ANIMASI ENTRANCE HEADLINE ───
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.from(".hero-badge", { opacity: 0, x: -20, duration: 0.5 })
        .from(".hero-headline", {
          opacity: 0, y: 30, duration: 0.8
        }, "-=0.2")
        .from(".hero-sub", { opacity: 0, y: 15, duration: 0.4 }, "-=0.3");
    }, containerRef);

    return () => ctx.revert();
  }, []);
}
