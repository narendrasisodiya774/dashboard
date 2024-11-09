import clsx from "clsx";
import React from "react";

const CoolCard: React.FC<{
  children: React.ReactNode;
  classNames?: string;
}> = ({ children, classNames }) => {
  return (
    <div
      className={clsx(
        "bg-[#FFFFFF] w-full h-full p-4 border border-[#E5E5E5] rounded-xl shadow-md",
        classNames
      )}
    >
      {children}
    </div>
  );
};

export default CoolCard;
