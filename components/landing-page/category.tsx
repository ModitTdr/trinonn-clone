import Link from "next/link"
import { Button } from "../ui/button"
import Image from "next/image"

interface categoriesProps {
  name: string;
  image: string;
  description: string;
  link: string;
}

const Category = ({ categories }: { categories: categoriesProps[] }) => {
  return (
    <div className="px-[6vw] lg:px-[9vw] pt-20 space-y-8">
      {categories.map((category, index) => (
        <div
          key={category.name}
          className={`flex ${((index + 2) % 2 === 0 ? 'flex-row-reverse' : 'flex-row')} justify-center lg:justify-between items-center flex-wrap-reverse gap-y-8`}
        >
          {/* left */}
          <div className="space-y-13 text-center lg:text-start">
            <div >
              <h2 className="font-dirtyline text-[2.8rem] lg:text-[6vw] tracking-tight">
                {category.name}
              </h2>
              <p className="text-[1.4rem] lg:text-[1.58vw] font-syne -mt-4">
                {category.description}
              </p>
            </div>

            <Link href={category.link} className="hidden lg:block">
              <Button variant="outline">View project</Button>
            </Link>
          </div>

          {/* image */}
          <Link href={category.link} className="w-full lg:w-[46vw]">
            <Image src={category.image} alt={category.name} width={1000} height={1000} className="w-full h-full object-cover rounded-[3rem]" />
          </Link>

        </div >
      ))}
    </div>
  )
}

export default Category