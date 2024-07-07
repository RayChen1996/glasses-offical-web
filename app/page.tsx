import React from "react";
import Image from "next/image";

import Banner from "@/components/page/home/banner";
import Contract from "@/components/page/home/Contract";
import Feature from "@/components/page/home/feature";

export default function Home() {
  return (
    <main className=" h-full bg-white">
      <Banner />
      <Feature />
      <Contract />
    </main>
  );
}
