import React from "react";
const worlImg = require("../../../assets/24758680_tourist_va_03-ai.png");
function HeaderRegisterFrom() {
  return (
    <div className="grid justify-items-center w-screen bg-orange-400">
      <div className=" text-center  h-40  flex items-center text-white">
        <div className="m-2">
          <img src={worlImg} className="w-32" />
        </div>
        <div className="">
          <div className="leading-8">
            <b>
              <p>リモートワークのお仕事多数！ </p>
              <p> 無料会員登録をしてお仕事をもっと見よう。</p>
            </b>
          </div>
          <div className="mt-5 relative">
            <button class="bg-sky-500  rounded-full p-3 w-48 ">
              <b>無料会員登録</b>
            </button>
            <button
              class="bg-white text-xs rounded-full p-2 absolute"
              style={{ top: "-10px", right: "-5px" }}
            >
              <b className=" text-sky-600">
                <span className="text-base">60</span>秒で
              </b>
              <br />
              <b className=" text-black">完了</b>
            </button>
          </div>
        </div>{" "}
        <div className="m-2">
          <img src={worlImg} className="w-32" />
        </div>
      </div>
    </div>
  );
}

export default HeaderRegisterFrom;
