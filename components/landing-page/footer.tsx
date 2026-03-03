import { CircleArrowUp } from 'lucide-react'
import LabeledLink from '../labeled-link'

const Footer = () => {
  const info = {
    email: "moditwork@gmail.com",
    phone: "+977 9766857405",

  }
  return (
    <section className="px-[6vw] lg:px-[9vw] py-20">
      <div
        className='
          w-full py-8
          border-y
          flex items-center justify-between gap-2
        '
      >
        <div className='flex justify-between items-center w-full flex-wrap gap-y-5'>
          {/* left */}
          <div className='flex flex-wrap gap-x-10 gap-y-5'>
            <LabeledLink label="Email" value={info.email} href={`mailto:${info.email}`} />
            <LabeledLink label="Call" valueClass='font-sans' value={info.phone} href={`tel:${info.phone}`} />
          </div>
          {/* right */}
          <LabeledLink label="Teams" value="Talk to Trionn" />
        </div>
      </div>

      <div className='flex items-center justify-between py-20'>

        <p className="text-[1.2rem] lg:text-[1.6vw] font-sans">
          &copy;2026 TRIONN<sup className='text-[0.6rem] lg:text-[0.8vw]'>®</sup>
        </p>

        <button>
          <CircleArrowUp size={40} strokeWidth={1} />
        </button>
      </div>
    </section>
  )
}

export default Footer