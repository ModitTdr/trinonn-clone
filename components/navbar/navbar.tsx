import Image from "next/image"
import { Button } from "../ui/button"
import { AudioLines, Menu, Sun } from "lucide-react"

const Navbar = () => {
  return (
    <header className="w-full px-[6vw] lg:px-[9vw] sticky top-0 left-0 mx-auto z-99 mix-blend-exclusion">
      <nav className="flex w-full justify-between items-center h-[9.6vw] lg:h-[7.2vw]">
        <div className="w-[80px] h-[12px] sm:w-[100px] sm:h-[19px]">
          <img
            src="/logo.svg"
            alt="Logo"
            className="w-full h-auto object-contain"
          />
        </div>
        <ul className="flex gap-1 items-center">
          <Button variant="icon" size={"icon-sm"}>
            <Sun />
          </Button>
          <Button variant="icon" size={"icon-sm"}>
            <AudioLines />
          </Button>
        </ul>
        <div className="flex items-center gap-3 lg:gap-4">
          <p className="tracking-[-0.5px] font-dirtyline mt-1 text-[0.9rem] ">menu</p>
          <Button variant="icon" size={"icon-xl"}>
            <Menu />
          </Button>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
