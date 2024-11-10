import React from "react";

interface IRenderCProps {
  check: boolean | string | number | unknown;
  children: React.ReactNode;
}

const ShouldRender: React.FC<IRenderCProps> = ({ check, children }) => {
  const component = (children as React.ReactElement) || <React.Fragment />;
  return check ? component : <React.Fragment />;
};

export default ShouldRender;
