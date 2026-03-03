"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const CustomCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;
    gsap.set([cursor], { xPercent: -50, yPercent: -60, x: -100, y: -100 });

    let hasShown = false;

    const onMouseMove = (e: MouseEvent) => {
      if (!hasShown) {
        hasShown = true;
        gsap.to([cursor], { opacity: 1, duration: 0.3 });
      }

      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.15,
        ease: "power2.out",
      });
    };

    const onMouseEnter = () => {
      hasShown = true;
      gsap.to([cursor], { opacity: 1, duration: 0.3 });
    };

    const onMouseLeave = () => {
      gsap.to([cursor], { opacity: 0, duration: 0.3 });
    };

    const onPointerOver = (e: PointerEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest("a, button, [role='button'], input, textarea, select, video, img")) {
        gsap.to(cursor, {
          scale: 5,
          duration: 0.3,
          boxShadow: "0 0 8px 2px #b3e5e5",
          ease: "power2.out"
        });
      }
      if (target.closest(".footer-image")) {
        gsap.to(cursor, {
          scale: 2,
          duration: 0.3,
          ease: "sine.inOut",
          backgroundColor: "rgba(255,255,255,0.6)",
          boxShadow: "0 0 60px 20px rgba(255,255,255,0.6)",
          mixBlendMode: "color-dodge",
          width: 0.01,
          height: 0.01,

        });

      }
    };

    const onPointerOut = (e: PointerEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest("a, button, [role='button'], input, textarea, select, video, img")) {
        gsap.to(cursor, { scale: 1, duration: 0.3, boxShadow: "0 0 0px 0px transparent", ease: "power2.out" });
      }
      if (target.closest(".footer-image")) {
        gsap.to(cursor, {
          scale: 1,
          duration: 0.3,
          boxShadow: "0 0 0px 0px transparent",
          backgroundColor: "var(--primary)",
          mixBlendMode: "difference",
          width: 12,
          height: 12,
          ease: "power2.out",
        });
      }
    };

    window.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseenter", onMouseEnter);
    document.addEventListener("mouseleave", onMouseLeave);
    document.addEventListener("pointerover", onPointerOver);
    document.addEventListener("pointerout", onPointerOut);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseenter", onMouseEnter);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("pointerover", onPointerOver);
      document.removeEventListener("pointerout", onPointerOut);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="fixed top-0 left-0 w-3 h-3 rounded-full bg-primary pointer-events-none z-99 mix-blend-difference opacity-0 hidden lg:block"
    />
  );
};

export default CustomCursor;

