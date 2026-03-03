"use client"
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface props {
  name: string[],
  count: string,
  color: string
}

const colorVariants: Record<string, string> = {
  orange: "bg-orange lg:hover:bg-orange",
  grey: "bg-grey text-background lg:text-foreground lg:hover:bg-grey hover:text-background",
  lightgreen: "bg-lightgreen text-background lg:text-foreground lg:hover:bg-lightgreen hover:text-background",
  yellow: "bg-yellow text-background lg:text-foreground lg:hover:bg-yellow hover:text-background",
};

export default function AwardsCard({ achivements }: { achivements: props[] }) {
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    cardsRef.current.forEach((card, index) => {
      if (!card) return;

      const fromRotation = index % 2 === 0 ? -90 : 90;
      const fromX = index % 2 === 0 ? "-100vw" : "100vw";

      gsap.fromTo(
        card,
        { opacity: 0, rotation: fromRotation, x: fromX },
        {
          opacity: 1,
          rotation: 0,
          x: 0,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 90%",
            end: "bottom 100%",
            scrub: 0.2,
          }
        }
      );
    });
  }, [achivements]);

  return (
    <section className="px-[6vw] lg:px-[9vw] py-20 grid grid-cols-1 lg:grid-cols-2 gap-y-6 overflow-hidden">
      {
        achivements.map(({ name, color, count }, index) => (
          <div
            key={color}
            ref={(el) => {
              cardsRef.current[index] = el;
            }}
            className={`
              w-full lg:w-[38vw]
              rounded-[3vw]
              p-[5.4vw] px-[7vw]
              flex flex-col gap-8 justify-between
              ${colorVariants[color]}
              lg:bg-background-secondary/40
              transition-colors ease-in-out duration-300
              ${index % 2 == 0 ? "" : "lg:translate-y-20"}
            `}
          >
            <h1 className="text-[8rem] lg:text-[9.8vw] tracking-tighter leading-none font-dmmono">
              {count}<sup>+</sup>
            </h1>

            <div className="self-end text-right">
              <p className="text-[2rem] lg:text-[3vw] font-dirtyline leading-[1.8rem] lg:leading-[2.4vw] tracking-wide">
                {name.map((line, i) => (
                  <span key={i} className="block">
                    {line}
                  </span>
                ))}
              </p>
            </div>
          </div>
        ))
      }
    </section>
  );
}