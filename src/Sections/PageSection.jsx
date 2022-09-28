import React from "react";

const PageSection = ({ name, title, subtitle, children }) => {
  return (
    <div
      name={name}
      className=" w-full h-full bg-black text-white text-center   "
    >
      <div className="my-32 mx-4 text-center lg:text-left">
        <h1 className="text-5xl text-center">{title}</h1>
        <p className="mt-8 mb-16 text-center">{subtitle}</p>

        {children}
      </div>
    </div>
  );
};

export default PageSection;
