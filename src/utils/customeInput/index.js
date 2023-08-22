import React, { useState } from "react";

function CustomeInput({
  name,
  lableText = "",
  updateValue,
  rules = {
    required: false,
    testKeyword: [{ regex: /^[a-zA-Z ]+$/, mess: "name" }],
  },
}) {
  const [value, setValue] = useState("");
  const [message, setMessage] = useState("");
  const changedValue = (value) => {
    if (rules?.required) {
      const res = rules.testKeyword.find((r) => !r.regex.test(value)) ?? null;
      setMessage(res?.mess);
      updateValue(name, value, res);
    } else {
      updateValue(name, value);
    }
  };
  return (
    <div className="flex items-center">
      {lableText ? (
        <lable className="mx-1 w-1/4 text-end">{lableText}</lable>
      ) : (
        <></>
      )}
      <div className="w-full relative">
        <input
          onChange={(e) => changedValue(e.target.value)}
          className="w-full p-1 border-solid rounded border-2 border-gray-300 focus:outline-none  focus:border-blue-400"
          type="text"
        />
        {message ? (
          <span
            className="absolute left-0 text-red-500"
            style={{ bottom: "-20px" }}
          >
            {message}
          </span>
        ) : null}
      </div>
    </div>
  );
}

export default CustomeInput;
