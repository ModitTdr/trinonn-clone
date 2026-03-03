"use client"
import { useRef, useEffect } from "react"
import gsap from "gsap"

type MarqueeProps = {
  text: string
  speed?: number
  className?: string
}

const Marquee = ({ text, speed = 15, className = "" }: MarqueeProps) => {
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!scrollRef.current) return

    const el = scrollRef.current
    const totalWidth = el.scrollWidth / 2

    const tween = gsap.to(el, {
      x: -totalWidth,
      duration: speed,
      ease: "linear",
      repeat: -1,
    })

    return () => {
      tween.kill()
    }
  }, [speed])

  return (
    <section className="overflow-hidden">
      <div ref={scrollRef} className="flex whitespace-nowrap">
        {[...Array(2)].map((_, i) => (
          <h3
            key={i}
            className={`mr-8 font-dirtyline text-[4.6rem] lg:text-[10vw] leading-14 lg:leading-[11vw] tracking-tight ${className}`}
          >
            {text}
          </h3>
        ))}
      </div>
    </section>
  )
}

export default Marquee