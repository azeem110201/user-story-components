import { Grid } from "@mui/material";
import React from "react";
import Icons from "../../atoms/icons/index";
import TextTypography from "../../atoms/TextTypography";

interface CryptoCardProps {
  style?: React.CSSProperties;
  icon: React.ReactNode;
  name: React.ReactNode;
  price: React.ReactNode;
  onClick?: () => void;
};

const CryptoCard = (props: CryptoCardProps) => {
  return (
    <div>
      <Grid
        container
        direction={"column"}
        sx={props.style}
        onClick={props.onClick}
      >
        <Grid item>
          <Icons>{props.icon}</Icons>
        </Grid>
        <Grid item>
          <TextTypography>{props.name}</TextTypography>
        </Grid>
        <Grid item>
          <TextTypography>{props.price}</TextTypography>
        </Grid>
      </Grid>
    </div>
  );
};

export default CryptoCard;
