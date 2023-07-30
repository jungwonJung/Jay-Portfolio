import React from "react";

function MobileMessage() {
  return (
    <div className="flex justify-center items-center">
      <div className="bg-brand w-3/4 h-96 text-white mt-20 rounded-lg flex flex-col justify-center items-center shadow-lg">
        <h1 className="text-2xl mb-4">
          Sorry, this website is best viewed on a larger screen.
        </h1>
        <p className="text-xl">
          Please access it from a device with a width of 1100px or higher..
        </p>
        <img
          className=" w-72 h-52"
          src="/assets/screenImage.png"
          alt="screenclip"
        />
      </div>
    </div>
  );
}

export default MobileMessage;
