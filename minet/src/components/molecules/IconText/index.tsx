import { Grid } from "@mui/material";
import React from "react";

interface IconTextProps {
  icon: React.ReactNode;
  text: React.ReactNode;
  style?: React.CSSProperties;
  onClick?: () => void;
};

const IconText = (props: IconTextProps) => {
  return (
    <div>
      <Grid container style={props.style}>
        <Grid item onClick={props.onClick}>
          {props.icon}
        </Grid>
        <Grid item>{props.text}</Grid>
      </Grid>
    </div>
  );
};

export default IconText;
