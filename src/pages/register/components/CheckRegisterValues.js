import React from "react";
import { citys, years } from "./RegisterFrom";

function CheckRegisterValues({ fromValue, nextScreen }) {
  return (
    <div className="flex flex-col items-center mt-24 w-screen lg:w-1/2 px-2">
      <h1 className="text-3xl mb-6">エントリーフォーム確認</h1>
      <div className="flex flex-wrap items-center w-full mb-6">
        <div className="flex  md:justify-between items-center w-screen md:w-1/4 mr-2">
          <span className="order-last md:order-none "> 氏名</span>
          <div className="bg-sky-600 border-solid rounded border-2 text-white py-1 px-2 mr-2 mb-2 md:ml-0">
            必須
          </div>
        </div>
        <div className="flex justify-between w-full md:w-8/12">
          <span>
            {fromValue?.firstName?.value + fromValue?.lastName?.value}
          </span>
        </div>
      </div>
      <div className="flex flex-wrap items-center w-full mb-6">
        <div className="flex  md:justify-between items-center w-screen md:w-1/4 mr-2">
          <span className="order-last md:order-none "> ふりがな</span>
          <div className="bg-white text-sky-600 border-solid rounded border-2 border-sky-600 py-1 px-2 mb-2 mr-2 md:ml-0">
            任意
          </div>
        </div>
        <div className="flex justify-between w-full md:w-8/12">
          <div className="w-full ">
            {fromValue?.sei?.value + fromValue?.mei?.value}
          </div>
        </div>
      </div>
      <div className="flex flex-wrap items-center w-full mb-6">
        <div className="flex  md:justify-between items-center w-screen md:w-1/4 mr-2">
          <span className="order-last md:order-none ">生まれた年</span>
          <div className="bg-sky-600 border-solid rounded border-2 text-white py-1 px-2 mr-2 mb-2 md:ml-0">
            必須
          </div>
        </div>
        <div className="flex justify-between w-full md:w-8/12">
          <div className="w-full ">
            <span>
              {years?.find((i) => i.value === fromValue?.year?.value)?.lable ??
                ""}
            </span>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap items-center w-full mb-6">
        <div className="flex  md:justify-between items-center w-screen md:w-1/4 mr-2">
          <span className="order-last md:order-none ">
            メール
            <br />
            アドレス
          </span>
          <div className="bg-sky-600 border-solid rounded border-2 text-white py-1 px-2 mr-2 mb-2 md:ml-0">
            必須
          </div>
        </div>
        <div className="flex justify-between w-full md:w-8/12">
          <div className="w-full ">{fromValue?.email?.value ?? ""}</div>
        </div>
      </div>
      <div className="flex flex-wrap items-center w-full mb-6">
        <div className="flex  md:justify-between items-center w-screen md:w-1/4 mr-2">
          <span className="order-last md:order-none ">電話番号</span>
          <div className="bg-sky-600 border-solid rounded border-2 text-white py-1 px-2 mr-2 mb-2 md:ml-0">
            必須
          </div>
        </div>
        <div className="flex justify-between w-full md:w-8/12">
          <div className="w-full "> {fromValue?.phoneNumber?.value ?? ""}</div>
        </div>
      </div>
      <div className="flex flex-wrap items-center w-full mb-6">
        <div className="flex  md:justify-between items-center w-screen md:w-1/4 mr-2">
          <span className="order-last md:order-none ">
            お住まいの
            <br />
            都道府県
          </span>
          <div className="bg-sky-600 border-solid rounded border-2 text-white py-1 px-2 mr-2 mb-2 md:ml-0">
            必須
          </div>
        </div>
        <div className="flex justify-between w-full md:w-8/12">
          <div className="w-full ">
            <span>
              {citys?.find((i) => i.value === fromValue?.city?.value)?.lable ??
                ""}
            </span>
          </div>
        </div>
      </div>
      <div className=" text-white w-full flex justify-center items-center">
        <button
          onClick={() => nextScreen(0)}
          className="text-gray-500 border-gray-500 border-2 rounded-full p-3 w-1/4 m-2 "
        >
          <b>戻る</b>
        </button>
        <button
          onClick={() => nextScreen(2)}
          className="bg-sky-500 rounded-full p-3 w-1/4 m-2"
        >
          <b>送信する</b>
        </button>
      </div>
    </div>
  );
}

export default CheckRegisterValues;
