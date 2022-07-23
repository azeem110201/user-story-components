import React from "react";
import { ReactSVG } from "react-svg";
import "./index.css";

type IconsProps = {
  src: string;
  onClick?: () => void;
  children: React.ReactNode;
};


const Icon = (props: IconsProps) => {
  return (
    <ReactSVG
      src={props.src}
      onClick={props.onClick}
    >{props.children}</ReactSVG>
  );
};

export default Icon;