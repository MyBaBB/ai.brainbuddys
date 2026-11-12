// eslint-disable-next-line no-unused-vars
import React from "react";

import BatSignal from "../../Images/BatButton.webp";
import "./ContactMe.css";

const ContactMe = () => {
  return (
    <div
      className="ContactButtonHide dataToolTip233 tipStyles relative m-auto h-full w-fit items-center justify-center"
      data-tool-tip="Bat Rescue"
    >
      <div
        id="contact"
        className="buttonsAllWrapper z-20 m-auto w-fit cursor-pointer px-1 pb-2 duration-500 ease-in-out hover:scale-[100.8%]"
      >
        <a
          href="https://mybabb.com "
          className="relative flex-row justify-center"
        >
          <button
            className="rootsButton w-fit whitespace-nowrap font-extrabold"
            title="Rescue Button"
          >
            <div className="batSignal flex items-center justify-center">
              <div className="absolute h-[4rem] w-[4rem] rounded-full bg-black/10"></div>
              <img
                src={BatSignal}
                alt="Bat Signal"
                className="imgBatSignal h-[4.5rem] w-[4.5rem]"
              />
            </div>
          </button>
        </a>
      </div>
    </div>
  );
};

export default ContactMe;
