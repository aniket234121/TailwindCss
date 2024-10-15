import React from "react";
import headerLogo from "../assets/images/header-logo.svg";
// import hamburger from "../assets/icons/hamburger.svg"
import { navLinks } from "../data.js";
import { hamburger } from "../assets/icons/index.js";
const Nav = () => {
  return (
    <header className="padding-x py-8 w-full absolute z-10">
      <nav className="flex justify-between items-center max-container">
        <a href="/">
          <img src={headerLogo} alt="" width={130} height={29} />
        </a>
        <ul className="flex flex-1 justify-center items-center gap-16 max-lg:hidden">
          {navLinks.map((item, index) => {
            return (
              <li key={index}>
                <a className="font-monteserrat leading-normal text-lg text-slate-700"
                 href={item.href}>{item.label}</a>
              </li>
            );
          })}
        </ul>
        <div className="hidden max-lg:block"
         ><img src={hamburger} alt="hamburger" height={25} width={25}/></div>
      </nav>
    </header>
  );
};

export default Nav;
