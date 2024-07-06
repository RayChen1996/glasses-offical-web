import React from "react";
import logo from "@/public/images/logo-white.png";
import Image from "next/image";
import { navOptions } from "@/options";
import Link from "next/link";
/** - Nav */
export default function AppHeader() {
  return (
    <div className="  bg-darkRed ">
      <div className="navbar w-10/12  text-center m-auto">
        <div className="navbar-start">
          <Link href={"/"}>
            <Image src={logo} alt="logo" width={80} />
          </Link>
        </div>
        {/* <div className="navbar-center"></div> */}
        <div className="navbar-end">
          {navOptions.map((item, idx) => {
            return (
              <Link
                href={item.href}
                key={idx}
                className=" h-full min-w-20 btn-circle"
              >
                <button>{item.label}</button>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
