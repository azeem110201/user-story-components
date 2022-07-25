import { Typography, TypographyProps } from "@mui/material";
import React from "react";

interface TypographiesProps extends TypographyProps {
  style?: React.CSSProperties;
  onClick?: () => void;
}

const TextTypography = (props: TypographiesProps) => {
  return (
    <div>
      <Typography onClick={props.onClick} sx={props.style} {...props} />
    </div>
  );
};

export default TextTypography;
