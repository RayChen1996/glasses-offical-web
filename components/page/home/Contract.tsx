import React from "react";
import Form from "@/components/forms/Contract";
import SectionTitle from "@/components/SectionTitle";

export default function Contract() {
  return (
    <div className=" bg-lightestPink text-black  ">
      <SectionTitle className="w-1/2 text-center m-auto" title="聯絡我們" />
      <p className="w-1/3  m-auto mb-6">
        我們相當重視您的意見，若您有任何疑問，可先參考「常見問題」，若仍有任何問題，請填妥以下資料，我們會在近期與您聯繫。
      </p>
      <div className=" w-1/3 m-auto">
        <Form />
      </div>
    </div>
  );
}
