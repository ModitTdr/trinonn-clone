import AchievementCards from "@/components/landing-page/achievement-cards";
import Category from "@/components/landing-page/category";
import HeroSection from "@/components/landing-page/hero-section";
import Marquee from "@/components/landing-page/marquee";
import SocialLinks from "@/components/landing-page/social-links";
import Testimonials from "@/components/landing-page/testimonials";
import VideoSection from "@/components/landing-page/video-section";
import Works from "@/components/landing-page/works";
import { Button } from "@/components/ui/button";
import { achivements } from "@/data/achievments";
import { categories } from "@/data/category";
import { socialLinks } from "@/data/sociallinks";
import { testimonials } from "@/data/testimonials";
import Link from "next/link";

export default function Home() {

  return (
    <div>
      <HeroSection />
      <VideoSection />
      <Works />
      <Category categories={categories} />
      <AchievementCards achivements={achivements} />
      <section className="px-[6vw] lg:px-[9vw] pt-20">
        <div className="flex justify-between items-end flex-wrap gap-y-4 w-full">
          <h2 className="font-dirtyline text-[4.6rem] lg:text-[14vw] leading-14 lg:leading-[11vw] tracking-tight">
            partner<br />love
          </h2>
          <p className="text-[1.4rem] lg:text-[2vw] leading-[1.6rem] lg:leading-[2.6vw] max-w-xs lg:max-w-[19vw] font-syne mb-8 sm:block hidden">
            Take heed, as the
            lion&apos;s roar in our client
            reviews resounds.
          </p>
          <p className="text-[1.4rem] leading-[1.6rem] max-w-xs font-syne mb-8 sm:hidden">
            Take heed, as the <br />
            lion&apos;s roar in our client <br />
            reviews resounds.
          </p>
        </div>
      </section>
      <Testimonials testimonials={testimonials} />
      <div className="flex flex-col -space-y-5 lg:-space-y-8">
        <Marquee text="wild ideas! — wild ideas! —" />
        <Marquee text="let's dive in! — let's dive in! —" speed={12} />
      </div>
      <section className="px-[6vw] lg:px-[9vw] pt-20">
        <h2 className="font-dirtyline text-[4.6rem] lg:text-[11vw] leading-14 lg:leading-[8vw] tracking-tight text-center">
          join our <br />
          jungle <br /> trek
        </h2>
        <div className="flex items-center justify-center py-20">
          <SocialLinks socialLinks={socialLinks} />
        </div>
      </section>

      <section className="px-[6vw] lg:px-[9vw] py-20">
        <div className="flex justify-between items-end flex-wrap gap-y-8 w-full">
          <h2 className="font-dirtyline text-[4.6rem] lg:text-[14vw] leading-14 lg:leading-[11vw] tracking-tight">
            time to<br />roar
          </h2>

          <Link href="/work">
            <Button>Let&apos;s talk!</Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
