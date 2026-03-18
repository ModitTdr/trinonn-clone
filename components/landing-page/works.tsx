'use client'
import Link from "next/link"
import { Button } from "../ui/button"
import { useRef } from "react"
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(SplitText);

const Works = () => {
  const ref = useRef(null);
  const paragraphRef = useRef(null);

  useGSAP(() => {
    const split = new SplitText(ref.current, { type: "lines,chars" });
    const paragraph = new SplitText(paragraphRef.current, { type: "lines", linesClass: "line" })

    gsap.from(split.lines[0], {
      x: -200,
      ease: "power1.in",
      scrollTrigger: {
        trigger: split.lines[0],
        start: "top 80%",
        end: "top 20%",
        scrub: 0.5,
      }
    });
    gsap.fromTo(split.chars,
      { color: "#222" },
      {
        color: "#fff",
        stagger: 0.6,
        scrollTrigger: {
          trigger: ref.current,
          start: "top 85%",
          end: "50% 50%",
          scrub: true,
        }
      }
    );

    return () => split.revert();
  }, { scope: ref })
  return (
    <section className="px-[6vw] lg:px-[9vw] py-20">
      <div className="space-y-4 w-full">
        <h2 ref={ref} className="font-dirtyline text-[4.6rem] lg:text-[15vw] leading-14 lg:leading-[11.8vw] tracking-tight">
          recent<br />work
        </h2>
        <div className="flex justify-between items-center">
          <p ref={paragraphRef} className="text-[1.4rem] lg:text-[2.4vw] leading-[1.6rem] lg:leading-[2.6vw] max-w-xs lg:max-w-[28vw] font-syne">
            In the creative wilderness,
            clients find our work truly
            beloved.
          </p>
          <Link href="/work" className="hidden lg:block">
            <Button variant="outline">Explore work</Button>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Works