import Link from 'next/link';
import { Button } from '../ui/button';
import { CircleArrowDown } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className='h-[calc(100vh-9.6w)] lg:h-[calc(100vh-7.2vw)] flex flex-col items-center justify-center overflow-hidden px-[6vw] lg:px-[9vw]'>
      <div className='flex flex-col items-center gap-5 py-6'>
        <h1 className="hero-title text-[5vw] lg:text-[9.1vw] font-dirtyline leading-[0.75] text-center hidden sm:block tracking-tight">
          roar in the<br />
          digital wilderness.
        </h1>
        <h1 className="hero-title text-[13vw] font-dirtyline leading-[0.8] text-center sm:hidden tracking-tight">
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
    </section>
  )
}

export default HeroSection;
