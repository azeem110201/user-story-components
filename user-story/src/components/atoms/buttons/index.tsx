import { Button, ButtonProps } from "@mui/material";
import React from "react";

interface ButtonsProps extends ButtonProps {
  style?: React.CSSProperties;
  onClick?: () => void;
}

const Buttons = (props: ButtonsProps) => {
  return (
    <div>
      <Button onClick={props.onClick} sx={props.style} {...props} />
    </div>
  );
};

export default Buttons;
