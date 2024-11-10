import React from "react";

interface Props {
  check: boolean | string | number | unknown;
  children: React.ReactNode;
}

export const ShouldRender: React.FC<Props> = ({ check, children }) => {
  const component = (children as React.ReactElement) || <React.Fragment />;
  return check ? component : <React.Fragment />;
};
