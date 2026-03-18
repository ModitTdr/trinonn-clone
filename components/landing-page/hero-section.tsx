'use client'
import Link from 'next/link';
import { Button } from '../ui/button';
import { CircleArrowDown } from 'lucide-react';
import { SplitText } from 'gsap/SplitText';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useRef } from 'react';

gsap.registerPlugin(SplitText);

const HeroSection = () => {
  const container = useRef(null);
  const videoContainer = useRef(null);

  useGSAP(() => {
    const split = SplitText.create('.hero-title', { type: 'lines' });
    gsap.from(split.lines, {
      opacity: 0,
      y: 130,
      skewX: -80,
      duration: 1.55``,
      stagger: 0.035,
      filter: "blur(12px)",
      ease: "power2.out"
    });
    gsap.from(videoContainer.current, {
      y: "-62%",
      scale: 0.15,
      duration: 2,
      borderRadius: "99rem",
      ease: "power2.in",
      scrollTrigger: {
        trigger: videoContainer.current,
        start: "top 90%",
        end: "bottom 20%",
        scrub: 0.8,
      }
    });
    return () => split.revert();
  }, { scope: container })


  return (
    <section className='flex flex-col px-[6vw] lg:px-[9vw] justify-between'>
      <div ref={container} className='min-h-[calc(100vh-9.6w)] lg:min-h-[calc(100vh-7.2vw)] flex flex-col items-center justify-center overflow-hidden flex-1'>
        <div className='flex flex-col items-center gap-5 py-6'>
          <h1 className="hero-title text-[5vw] lg:text-[9.1vw] font-dirtyline leading-[0.75] text-center hidden sm:block tracking-tight overflow-hidden p-4">
            roar in the<br />
            digital wilderness.
          </h1>
          <h1 className="text-[13vw] font-dirtyline leading-[0.8] text-center sm:hidden tracking-tight">
            roar <br /> in the
            digital wilderness.
          </h1>
          <p className='text-center text-[0.85em] 2xl:text-[0.7vw] uppercase leading-tight w-full max-w-sm 2xl:max-w-[20vw] hidden sm:block'>
            We roar with success, delivering the TRIONN®
            through versatile design, branding and the latest
            tech development to companies.
          </p>
          <p className='text-center text-[0.85rem] uppercase w-full leading-tight sm:hidden'>
            We roar with success, delivering the <br />TRIONN®
            through versatile design, branding and the latest
            tech development to companies.
          </p>
          <CircleArrowDown className='text-primary/40 cursor-pointer' />
        </div>
        <div className='flex justify-between items-center w-full'>
          <Link href="/work">
            <Button variant="outline">Explore work</Button>
          </Link>
          <Link href="/contact">
            <Button variant="outline">Get in touch</Button>
          </Link>
        </div>
      </div>
      <section ref={videoContainer} className=" flex items-center justify-center w-full min-h-[calc(100vh-9.6w)] lg:min-h-[calc(100vh-7.2vw)] py-8 overflow-hidden">
        <div className="w-full h-auto">
          <video autoPlay muted loop playsInline src="/video/intro-video.mp4" className='rounded-[3rem] w-full h-auto' />
        </div>
      </section>
    </section>
  )
}

export default HeroSection;
