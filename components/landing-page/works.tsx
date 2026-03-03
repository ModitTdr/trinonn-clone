import Link from "next/link"
import { Button } from "../ui/button"

const Works = () => {
  return (
    <section className="px-[6vw] lg:px-[9vw] py-20">
      <div className="space-y-4 w-full">
        <h2 className="font-dirtyline text-[4.6rem] lg:text-[15vw] leading-14 lg:leading-[11.8vw] tracking-tight">
          recent<br />work
        </h2>
        <div className="flex justify-between items-center">
          <p className="text-[1.4rem] lg:text-[2.4vw] leading-[1.6rem] lg:leading-[2.6vw] max-w-xs lg:max-w-[28vw] font-syne">
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