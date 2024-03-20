
import phoneIcon from "../assets/phoneIcon.png"
import React from 'react'
import { Menu, X } from 'lucide-react'

const menuItems = [
  {
    name: 'Request Event',
    href: '#',
  },
  {
    name: 'Contact Us',
    href: '#',
  }

]

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <div className="relative w-full bg-black" >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-2 py-2 sm:px-2 lg:px-2">
        <div className="flex flex-col ">

          <div className="font-bold text-3xl text-white" style={{ fontFamily: "Metal Mania , system-ui " }}>LAST CHANCE TICKET</div>
          <div className="text-[#22B3C1] ">Y O U R T R U S T E D T I C K E T S E L L E R</div>

        </div>
        <div className="md:inline-flex hidden">
          <p className="lg:text-xl md:text-2xl text-lg text-white">100+Social Media Followers</p>
        </div>
        <div className="hidden lg:block">
          <ul className="inline-flex space-x-8">
            {menuItems.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  className="text-sm font-semibold text-gray-100 hover:text-gray-300"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="hidden lg:block ">
          <div className="flex space-x-2 justify-center  items-center ">
            <img src={phoneIcon} className="w-[10%]" alt="logo" />

            <button
              type="button"
              className="rounded-md bg-[#22B3C1] px-3 py-2 text-md  text-white hover:text-[#22B3C1] shadow-sm hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
              Sell Tickets
            </button>
            <button
              type="button"
              className="rounded-md bg-[#22B3C1] px-3 py-2 text-md text-white hover:text-[#22B3C1] shadow-sm hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
              Login
            </button>
          </div>
        </div>
        <div className="lg:hidden">
          <Menu onClick={toggleMenu} className="h-6 w-6 cursor-pointer text-white" />
        </div>
        {isMenuOpen && (
          <div className="absolute inset-x-0 top-0 z-50 origin-top-right transform p-2 transition lg:hidden">
            <div className="divide-y-2 divide-gray-50 rounded-lg bg-black shadow-lg ring-1 ring-white ring-opacity-5">
              <div className="px-5 pb-6 pt-5">
                <div className="flex items-center justify-between">
                  <div className="inline-flex items-center space-x-2">

                    <span className="font-bold text-white text-3xl" style={{ fontFamily: "Metal Mania , system-ui " }}>LAST CHANCE TICKET</span>
                  </div>
                  <div className="-mr-2">
                    <button
                      type="button"
                      onClick={toggleMenu}
                      className="inline-flex items-center justify-center rounded-md p-2 text-gray-100 hover:bg-gray-100 hover:text-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                    >
                      <span className="sr-only">Close menu</span>
                      <X className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>
                </div>
                <div className="sm:inline-flex  md:hidden">
                  <p className="md:text-2xl text-lg text-white mt-7">100+Social Media Followers</p>
                </div>
                <div className="mt-6">
                  <nav className="grid gap-y-4">
                    {menuItems.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="-m-3 flex items-center rounded-md p-3 text-sm font-semibold hover:bg-gray-500"
                      >
                        <span className="ml-3 text-base font-medium text-gray-100">
                          {item.name}
                        </span>
                      </a>
                    ))}
                  </nav>
                </div>
                <div className="lg:hidden block my-7" >
                  <div className="flex space-x-8 justify-center  items-center ">
                    <img src={phoneIcon} className="md:w-[2%] cursor-pointer" alt="logo" />

                    <button
                      type="button"
                      className="rounded-md bg-[#22B3C1] px-3 py-2 text-sm font-semibold text-white hover:text-[#22B3C1] shadow-sm hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                    >
                      Sell Tickets
                    </button>
                    <button
                      type="button"
                      className="rounded-md bg-[#22B3C1] px-3 py-2 text-sm font-semibold text-white hover:text-[#22B3C1] shadow-sm hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                    >
                      Login
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div >
  )
}
