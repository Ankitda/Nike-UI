import { headerLogo } from "../assets/images"
import { hamburger } from "../assets/icons"
import { navLinks } from "../constants"
import { useState } from "react"

const Nav = () => {
  const [open,setOpen] = useState(false);
  return (
    <header className="padding-x py-8 absolute z-10 w-full max-container">
      <div className="md:flex items-center justify-between bg-white md:bg-transparent py-4">
        <div className="cursor-pointer">
          <a href="/">
            <img src={headerLogo} alt="Nike" width={130} height={29} />
          </a>
        </div>
        <ul className={`md:flex md:items-center md:pb-0 pb-12 bg-white md:bg-transparent absolute md:static md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in md:mt-0 mt-6 ${open ? 'top-25' : 'top-[-300px]'}`}>
          {navLinks.map((items) => (
            <li key={items.label} className="md:ml-8 md:my-0 my-7">
              <a href={items.href} className="font-montserrat leading-normal text-lg text-slate-gray">
                {items.label}
              </a>
            </li>
          ))}
        </ul>
        <div onClick={()=>setOpen(!open)} className="text-3xl absolute right-8 top-12 cursor-pointer md:hidden rounded-full">
          <img src={hamburger} alt="Hamburger" width={25} height={25}/>
        </div>
      </div>
    </header>
  )
}

export default Nav