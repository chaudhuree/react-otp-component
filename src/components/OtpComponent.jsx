import React, { useEffect, useRef, useState } from "react";
import "./OtpComponent.css";

const OtpComponent = () => {
  const [inputValues, setInputValues] = useState(["", "", "", ""]);
  const [otp, setOtp] = useState(null);
  const inputRefs = useRef([]);

  useEffect(() => {
    if (inputRefs.current[0]) {
      inputRefs.current[0].focus();
    }
  }, []);

  //  after submitting the form the otp is set
  // then the useEffect will run and console log the otp
  // so you can use the otp variable to send it to the backend from here
  useEffect(() => {
    if (otp) {
      console.log(otp);
    }
  }, [otp]);

  const handleInputChange = (index, event) => {
    const { value } = event.target;
    const updatedInputValues = [...inputValues];
    updatedInputValues[index] = value;
    // console.log({updatedInputValues})
    setInputValues(updatedInputValues);

    if (value && index < inputRefs.current.length - 1) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const joinedNumber = Number(inputValues.join(""));
    setOtp(joinedNumber);
    setInputValues(["", "", "", ""]);
    inputRefs.current[0].focus();
  };

  const handleCancel = (event) => {
    event.preventDefault();
    setOtp(null);
    setInputValues(["", "", "", ""]);
    inputRefs.current[0].focus();
  };
  return (
    <div className="otpContainer-main">
      <form className="otp-Form" onSubmit={handleSubmit}>
        <span className="mainHeading">Enter OTP</span>
        <p className="otpSubheading">
          We have sent a verification code to your mobile number
        </p>

        <div className="inputContainer">
          {inputValues?.map((value, index) => (
            <input
              key={index}
              placeholder=""
              className="otp-input"
              type="tel"
              maxLength="1"
              value={value}
              onChange={(event) => handleInputChange(index, event)}
              ref={(el) => (inputRefs.current[index] = el)}
            />
          ))}
        </div>
        <button className="verifyButton" type="submit">
          Verify
        </button>
        <div>
          <button className="exitBtn" onClick={handleCancel}>
            ×
          </button>
          <p className="resendNote">
            Didn't receive the code?
            <button className="resendBtn">Resend Code</button>
          </p>
        </div>
      </form>
    </div>
  );
};

export default OtpComponent;
