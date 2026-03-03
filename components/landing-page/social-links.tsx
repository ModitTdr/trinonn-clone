import Image from 'next/image'
import Link from 'next/link'


const SocialLinks = ({ socialLinks }: { socialLinks: { name: string, url: string }[] }) => {
  return (
    <div className='w-full flex flex-col items-center justify-center group/links'>
      {
        socialLinks.map(({ name, url }) => (
          <Link
            key={name}
            href={url}
            className='
              w-full max-w-180 lg:max-w-240
              h-24
              border-b
              flex items-center justify-between gap-2
              transition-all duration-400 ease-in-out
              hover:max-w-240
              group/item
              opacity-100
              group-hover/links:opacity-50
              hover:opacity-100
            '
          >
            <p className="text-[1.4rem] lg:text-[2vw]">
              {name}
            </p>
            <div className='rounded-full transition-all duration-1400 ease-out group-hover/item:rotate-360'>
              <Image src={`/images/logos/${name}.svg`} alt={name} width={34} height={34} />
            </div>
          </Link>
        ))
      }



    </div>
  )
}

export default SocialLinks