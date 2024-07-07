import React from "react";

interface SectionTitleProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLElement>,
    HTMLElement
  > {
  title: string;
}

export default function SectionTitle({ title, ...props }: SectionTitleProps) {
  return (
    <section {...props}>
      <h2 className="font-bold text-darkerRed text-5xl pt-20 mb-12">{title}</h2>
    </section>
  );
}
