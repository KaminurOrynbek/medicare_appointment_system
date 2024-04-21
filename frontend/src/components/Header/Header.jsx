import { useEffect, useRef } from "react";
import { NavLink, Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import userImg from "../../assets/images/avatar-icon.png";
import { BiMenu } from "react-icons/bi";

const navLinks = [
    { path: "/home", display: "Home" },
    { path: "/doctors", display: "Find a Doctor" },
    { path: "/services", display: "Services" },
    { path: "/contact", display: "Contact" },
  ];

const Header = () => {

    const headerRef = useRef(null)
    const menuRef = useRef(null)

    const handleStickyHeader = () =>{
        window.addEventListener('scroll', ()=>{
            if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80){
                headerRef.current.classList.add('sticky__header')
            }else{
                headerRef.current.classList.remove('sticky__header')
            }
        })
    }

    useEffect(()=>{
        handleStickyHeader()
        return () => window.removeEventListener('scroll', handleStickyHeader)
    })

    const toggleMenu = ()=>menuRef.current.classList.toggle('show__menu')

  return (
    <header className="header flex items-center" ref={menuRef}>
      <div className="container">
        <div className="flex items-center justify-between">
          {/* ========= Logo ==========*/}
          <div>
            <img src={logo} alt="Logo" />
          </div>

          {/*========== Navigation ===========*/}
          <div className="navigation" ref={menuRef} onClick={toggleMenu}>
            <ul className="menu flex items-center gap-[2.7rem]">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <NavLink
                    to={link.path}
                    className={(navClass) =>
                      navClass.isActive
                        ? "text-blue-500 text-16 leading-7 font-600"
                        : "text-gray-600 text-16 leading-7 font-500 hover:text-blue-500"
                    }
                  >
                    {link.display}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>


          {/*============ nav right ===========*/}
          <div className="flex items-center gap-4">
            <div className="hidden">
              <Link to="/">
                <figure className="w-10 h-10 rounded-full cursor-pointer">
                  <img src={userImg} className="w-full rounded-full" alt="User" />
                </figure>
              </Link>
            </div>

            <Link to="/login">
              <button className="bg-blue-500 py-2 px-6 text-white font-semibold rounded-full">
                Login
              </button>
            </Link>

            <span className="md:hidden" onClick={toggleMenu}>
                <BiMenu className="w-6 h-6 cursor-pointer" />
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
