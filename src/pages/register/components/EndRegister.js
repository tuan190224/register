import React from "react";

function EndRegister() {
  return (
    <div className="flex font-medium flex-col items-center mt-24 w-screen lg:w-1/2 px-2 ">
      <h1 className="text-3xl text-center">
        登録が完了しました。
        <br />
        <br />
        以下より無料カウンセリングのご予約をお取りください。
        <br />
        <br />
      </h1>
      <button className="bg-sky-500 text-white rounded-full p-3 px-5 m-2">
        無料カウンセリングへ申し込む
      </button>
    </div>
  );
}

export default EndRegister;
