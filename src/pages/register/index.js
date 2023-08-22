import React, { useState } from "react";
import HeaderRegisterFrom from "./components/HeaderRegisterFrom";
import RegisterFrom from "./components/RegisterFrom";
import CheckRegisterValues from "./components/CheckRegisterValues";
import EndRegister from "./components/EndRegister";

function Register() {
  const [fromValue, setFromValue] = useState({
    firstName: { value: null, mess: null },
    lastName: { value: null, mess: null },
    sei: { value: "", mess: null },
    mei: { value: "", mess: null },
    year: { value: null, mess: null },
    email: { value: null, mess: null },
    phoneNumber: { value: null, mess: null },
    city: { value: null, mess: null },
  });
  const [scr, setScr] = useState(0);
  const isDisabled = !Object.values(fromValue)?.every(
    (i) => i?.value !== null && i?.mess === null
  );
  const nextScreen = (key) => {
    console.log(key);
    setScr(key);
  };
  return (
    <div className="flex flex-col items-center">
      <HeaderRegisterFrom />
      {scr === 0 ? (
        <RegisterFrom
          nextScreen={nextScreen}
          fromValue={fromValue}
          setFromValue={setFromValue}
        />
      ) : scr === 1 ? (
        <CheckRegisterValues nextScreen={nextScreen} fromValue={fromValue} />
      ) : scr === 2 ? (
        <EndRegister />
      ) : null}
    </div>
  );
}

export default Register;
