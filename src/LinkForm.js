import React from "react";
import "./LinkForm.css";

const LinkForm = ({
  handleBtnSubmit,
  handleInputChange,
  submittedLink,
  submitted,
}) => {
  return (
    <div className="">
      <p>{"let's see how many Links / images you can submit"}</p>
      <div className="form center pa4 br3 shadow-5">
        <input
          className="w-70 f4 center pa2"
          type="text"
          placeholder="Enter your Link"
          onChange={handleInputChange}
        />
        <button
          className="bg-light-purple link grow white pointer ph4 pv2 dib"
          onClick={handleBtnSubmit}
        >
          submit
        </button>
      </div>
      {submitted && (
        <p className="f3 white">This is your link: {submittedLink}</p>
      )}
    </div>
  );
};

export default LinkForm;
