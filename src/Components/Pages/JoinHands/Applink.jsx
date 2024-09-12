import React from "react";

export default function Applink() {
  return (
    <div className="mt-28">
      <div className="flex w-11/12 mx-auto space-x-28">
        <div
          className="flex flex-col p-10 h-[350px]"
          style={{
            background: "linear-gradient(360deg, #EFF6FF 0%, #FFFFFF 100%)",
          }}
        >
          <img
            src="/images/Group1.png"
            alt="Logo"
            className="h-[30px] w-[30px]"
          />
          <p className="pt-5 text-lg">App link</p>
          <p className="w-[610px] pt-10 text-md">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of
            type and scrambled it to make a type specimen book.
          </p>
        </div>
        <div>
          <img
            src="/images/Applink.png"
            alt="Logo"
            className="h-[350px] w-[550px]"
          />
        </div>
      </div>
    </div>
  );
}
