import React from "react";
import Image from "next/image";
import bann from "@/public/images/home-header.png";
export default function Banner() {
  return (
    <div>
      <Image src={bann} alt="" />
    </div>
  );
}
