import React from "react";
import fbIcon from "@/public/images/ic-social-fb.png";
import igIcon from "@/public/images/ic_social_ig.png";
import lineIcon from "@/public/images/ic_social_line.png";
import Image from "next/image";
/** - 頁尾 */
export default function AppFooter() {
  return (
    <div className="bg-darkRed text-white p-10">
      <footer className="footer flex justify-between">
        <aside>
          <ul className="flex gap-3">
            <li>首頁</li>
            <li>系列鏡框</li>
            <li>門市據點</li>
            <li>部落格</li>
            <li>常見問題</li>
          </ul>
        </aside>
        <nav>
          <div className="grid grid-flow-col gap-4">
            <a>
              <Image alt="" src={fbIcon} className="w-10" />
            </a>
            <a>
              <Image alt="" src={igIcon} className="w-10" />
            </a>
            <a>
              <Image alt="" src={lineIcon} className="w-10" />
            </a>
          </div>
        </nav>
      </footer>
      <footer className=" text-4xl flex flex-col justify-center mb-8">
        <a className=" flex items-center">
          <span className="material-icons w-9 h-9 justify-center flex items-center">
            call
          </span>
          <label htmlFor="">0800-000-000</label>
        </a>
        <a className=" flex items-center">
          <span className="material-icons w-9 h-9 justify-center flex items-center">
            mail
          </span>
          <label htmlFor="">glasses@business.com</label>
        </a>
      </footer>
      <hr className=" w-full h-[0.5px] bg-white" />
      <footer className="flex justify-between  my-8">
        <span>Copyright © 2020 Glasses.All rights reserved.</span>
        <ul className="flex gap-3">
          <li>隱私權政策</li>
          <li>服務條款</li>
        </ul>
      </footer>
    </div>
  );
}
