import React from "react";
interface PageTitleProps {
  title: string;
}
/** - 頁面標題 */
export default function PageTitle({ title }: PageTitleProps) {
  return (
    <section className="h-full text-center">
      <h1 className=" text-5xl font-bold h-full">
        <span className="h-full w-2 bg-darkRed"></span> {title}
      </h1>
    </section>
  );
}
