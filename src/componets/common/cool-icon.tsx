import clsx from "clsx";
import React from "react";

const CoolIcon: React.FC<{
  children: React.ReactNode;
  classNames?: string;
}> = ({ children, classNames }) => {
  return (
    <div
      className={clsx(
        "w-[38px] h-[38px] rounded-lg flex items-center justify-center",
        "bg-[#f4f4f4]",
        classNames
      )}
    >
      {children}
    </div>
  );
};

export default CoolIcon;
