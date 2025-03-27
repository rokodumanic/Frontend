import React from "react";

function BlockHeader({ blockname, title, description, bgcolor, color = "text-[#062949]" }) {
  return (
    <div className={` ${color} text-center p-8`}>
      {blockname === "" ? null : (
        <span className={`${bgcolor} text-white text-xs py-1 px-5 rounded-xl`}>
          {blockname}
        </span>
      )}
      <h2 className="bold my-4 mx-auto">{title}</h2>
      {description === "" ? null : (
        <p className="w-1/3 mx-auto mt-4 body1 regular">{description}</p>
      )}
    </div>
  );
}

export default BlockHeader;
