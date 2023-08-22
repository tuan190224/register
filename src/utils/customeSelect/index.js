import React, { useState } from "react";

function CustomeSelect({
  name,
  lableText = "",
  updateValue,
  rules = {
    required: false,
    testKeyword: [{ regex: /^[a-zA-Z ]+$/, mess: "name" }],
  },
  values = [],
}) {
  const [value, setValue] = useState("");
  const [message, setMessage] = useState("");
  const changedValue = (value) => {
    if (rules?.required) {
      const res = rules.testKeyword.find((r) => !r.regex.test(value)) ?? null;
      setMessage(res?.mess);
      updateValue(name, value, res);
    }
  };
  return (
    <div className="flex items-center">
      <lable className="mr-1">{lableText}</lable>
      <div className="w-full">
        <select
          className="w-full p-1 border-solid rounded border-2 border-gray-300 focus:outline-none  focus:border-blue-400"
          type="text"
          onChange={(e) => changedValue(e.target.value)}
        >
          <option selected="false" disabled></option>
          {values?.map((e) => (
            <option value={e.value} key={e.key}>
              {e.lable}
            </option>
          ))}
        </select>
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

export default CustomeSelect;
