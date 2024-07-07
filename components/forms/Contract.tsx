import React from "react";

/** - 表單 */
export default function ContractForm() {
  return (
    <div className=" text-black">
      <div className=" m-auto ">
        <label htmlFor="fullname">姓名</label>
      </div>

      <input
        id="fullname"
        type="text"
        className=" input input-md bg-lightestPink input-primary rounded-none input-bordered border-black  w-full"
        placeholder="陳小明"
      />

      <div>
        <label htmlFor="phone">聯絡電話</label>
      </div>

      <input
        id="phone"
        type="text"
        className=" input input-md bg-lightestPink input-primary rounded-none input-bordered border-black w-full"
        placeholder="0912-345-678"
      />

      <div>
        <label htmlFor="mail">電子郵件</label>
      </div>

      <input
        id="mail"
        type="text"
        className=" input input-md bg-lightestPink input-primary rounded-none input-bordered border-black w-full"
        placeholder="example@email.com"
      />

      <div>
        <label htmlFor="message">意見反應</label>
      </div>

      <textarea
        id="message"
        className="textarea textarea-bordered h-36 textarea-primary bg-lightestPink rounded-none border-black w-full"
        placeholder="請輸入您的意見"
      />

      <div className=" flex justify-center items-center ">
        <div className="flex gap-1 text-center">
          <input
            type="checkbox"
            name=""
            id="cbx"
            className=" checkbox checkbox-md border rounded-none "
          />
          <label htmlFor="cbx">
            我同意隱私權政策，並同意依隱私權政策中所述的方式處理自己的資料。
          </label>
        </div>
      </div>

      <button
        className="btn btn-primary bg-darkerRed text-white mb-20 mt-12"
        type="submit"
      >
        確認送出
      </button>
    </div>
  );
}
