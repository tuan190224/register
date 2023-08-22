import React, { useState } from "react";
import CustomeInput from "../../../utils/customeInput";
import CustomeSelect from "../../../utils/customeSelect";
export const years = [
  {
    value: "1",
    lable: "1993",
  },
  {
    value: "2",
    lable: "1994",
  },
];
export const citys = [
  {
    value: "1",
    lable: "東京都",
  },
  {
    value: "2",
    lable: "新潟",
  },
];
const rules = [
  {
    required: true,
    message: "Please confirm your name!",
    rx: "",
  },
];
function RegisterFrom({ fromValue, setFromValue, nextScreen }) {
  const updateValue = (name, value, mess = null) => {
    console.log(name, value, mess);
    setFromValue({ ...fromValue, [name]: { value: value, mess: mess } });
  };
  const isDisabled = !Object.values(fromValue)?.every(
    (i) => i?.value !== null && i?.mess === null
  );
  {
    console.log(isDisabled, fromValue);
  }
  return (
    <div className="flex flex-col items-center mt-24 w-screen lg:w-1/2 px-2">
      <h1 className="text-3xl mb-6">エントリーフォーム</h1>
      <div className="flex flex-wrap items-center w-full mb-6">
        <div className="flex  md:justify-between items-center w-screen md:w-1/4 mr-2">
          <span className="order-last md:order-none "> 氏名</span>
          <div className="bg-sky-600 border-solid rounded border-2 text-white py-1 px-2 mr-2 mb-2 md:ml-0">
            必須
          </div>
        </div>
        <div className="flex justify-between w-full md:w-8/12">
          <div className="w-1/2 ">
            <CustomeInput
              updateValue={updateValue}
              rules={{
                required: true,
                testKeyword: [
                  {
                    regex:
                      /^[\p{Script=Hiragana}\p{Script=Katakana}\p{Script=Han}a-zA-Z\s]+$/u,
                    mess: "firstName",
                  },
                ],
              }}
              name="firstName"
              lableText="姓"
            />
          </div>

          <div className="w-1/2">
            <CustomeInput
              updateValue={updateValue}
              rules={{
                required: true,
                testKeyword: [
                  {
                    regex:
                      /^[\p{Script=Hiragana}\p{Script=Katakana}\p{Script=Han}a-zA-Z\s]+$/u,
                    mess: "lastName",
                  },
                ],
              }}
              name="lastName"
              lableText="名"
            />
          </div>
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
          <div className="w-1/2 ">
            <CustomeInput
              updateValue={updateValue}
              name="sei"
              lableText="せい"
            />
          </div>

          <div className="w-1/2">
            <CustomeInput
              updateValue={updateValue}
              name="mei"
              lableText="めい"
            />
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
            <CustomeSelect
              rules={{
                required: true,
                testKeyword: [{ regex: /^[0-9 ]+$/, mess: "year" }],
              }}
              updateValue={updateValue}
              name="year"
              values={years}
            />
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
          <div className="w-full ">
            <CustomeInput
              rules={{
                required: true,
                testKeyword: [
                  {
                    regex:
                      /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/,
                    mess: "email",
                  },
                ],
              }}
              name="email"
              updateValue={updateValue}
            />
          </div>
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
          <div className="w-full ">
            <CustomeInput
              rules={{
                required: true,
                testKeyword: [
                  {
                    regex:
                      /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im,
                    mess: "phoneNumber",
                  },
                ],
              }}
              name="phoneNumber"
              updateValue={updateValue}
            />
          </div>
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
            <CustomeSelect
              updateValue={updateValue}
              rules={{
                required: true,
                testKeyword: [{ regex: /^[0-9 ]+$/, mess: "name" }],
              }}
              name="city"
              values={citys}
            />
          </div>
        </div>
      </div>
      <div className=" text-white w-full flex flex-col items-center">
        <button
          onClick={() => nextScreen(1)}
          disabled={isDisabled}
          className={` ${
            isDisabled ? "bg-gray-400" : " bg-sky-500"
          }  rounded-full p-3 w-full md:w-1/2 `}
        >
          <b>確確認画面へ進む</b>
        </button>
      </div>
    </div>
  );
}

export default RegisterFrom;
