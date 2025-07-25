import { useContext, useState } from "react"
import { assets } from "../assets/assets.js"
import { Link, NavLink } from "react-router-dom"
import { ShopContext } from "../context/ShopContext.jsx"

const Navbar = () => {
  const [visible, setVisible] = useState(false)
  const { setShowSearch, getCartCount, user, logout, isAuthenticated } = useContext(ShopContext)

  const handleLogout = () => {
    logout()
  }

  return (
    <div className="flex items-center justify-between py-5 font-medium">
      <Link to={"/"}>
        <img src={assets.logo || "/placeholder.svg"} className="w-32" alt="logo" />
      </Link>

      <ul className="hidden sm:flex gap-5 text-sm text-gray-700">
        <NavLink to={"/"} className="flex flex-col items-center gap-1">
          <p>HOME</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
        <NavLink to={"/collection"} className="flex flex-col items-center gap-1">
          <p>COLLECTION</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
        <NavLink to={"/about"} className="flex flex-col items-center gap-1">
          <p>ABOUT</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
        <NavLink to={"/contact"} className="flex flex-col items-center gap-1">
          <p>CONTACT</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
      </ul>

      <div className="flex items-center gap-6">
        <img
          onClick={() => setShowSearch(true)}
          src={assets.search_icon || "/placeholder.svg"}
          className="w-5 cursor-pointer"
          alt="search"
        />

        <div className="group relative">
          {isAuthenticated() ? (
            <>
              <img src={assets.profile_icon || "/placeholder.svg"} className="w-5 cursor-pointer" alt="profile" />
              <div className="group-hover:block hidden absolute dropdown-menu right-0 pt-4">
                <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded">
                  <p className="cursor-pointer hover:text-black">Hi, {user?.name || "User"}</p>
                  <Link to="/orders" className="cursor-pointer hover:text-black">
                    Orders
                  </Link>
                  <p onClick={handleLogout} className="cursor-pointer hover:text-black">
                    Logout
                  </p>
                </div>
              </div>
            </>
          ) : (
            <Link to={"/login"}>
              <img src={assets.profile_icon || "/placeholder.svg"} className="w-5 cursor-pointer" alt="profile" />
            </Link>
          )}
        </div>

        <Link to={"/cart"} className="relative">
          <img src={assets.cart_icon || "/placeholder.svg"} className="w-5 min-w-5 cursor-pointer" alt="" />
          <p className="absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white rounded-full text-[8px] ">
            {getCartCount()}
          </p>
        </Link>

        <img
          onClick={() => setVisible(true)}
          src={assets.menu_icon || "/placeholder.svg"}
          className="w-5 cursor-pointer sm:hidden"
          alt=""
        />
      </div>

      {/* sidebar menu for smaller screen */}
      <div
        className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${
          visible ? "w-full" : "w-0 "
        } duration-300`}
      >
        <div className="flex flex-col text-gray-600">
          <div onClick={() => setVisible(false)} className="flex items-center  gap-4 p-3 cursor-pointer">
            <img className="h-4 rotate-180" src={assets.dropdown_icon || "/placeholder.svg"} alt="" />
            <p>Back</p>
          </div>
          <NavLink onClick={() => setVisible(false)} className={"py-2 pl-6 border"} to={"/"}>
            HOME
          </NavLink>
          <NavLink onClick={() => setVisible(false)} className={"py-2 pl-6 border"} to={"/collection"}>
            COLLECTION
          </NavLink>
          <NavLink onClick={() => setVisible(false)} className={"py-2 pl-6 border"} to={"/about"}>
            ABOUT
          </NavLink>
          <NavLink onClick={() => setVisible(false)} className={"py-2 pl-6 border"} to={"/contact"}>
            CONTACT
          </NavLink>
        </div>
      </div>
    </div>
  )
}

export default Navbar
