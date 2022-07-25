import { Grid } from "@mui/material";
import React from "react";
import Icons from "../../atoms/icons";
import TextTypography from "../../atoms/TextTypography";

type PortfolioCardProps = {
  style?: React.CSSProperties;
  onClick?: () => void;
  icon: React.ReactNode;
  name: string;
  ticker: string;
  price: string;
  change: string;
};

const PortfolioCard = (props: PortfolioCardProps) => {
  return (
    <div>
      <Grid container sx={props.style} onClick={props.onClick}>
        <Grid item direction={"row"}>
          <Icons>{props.icon}</Icons>
          <Grid item direction={"column"}>
            <TextTypography>{props.name}</TextTypography>
            <TextTypography>{props.ticker}</TextTypography>
          </Grid>
        </Grid>
        <Grid item direction={"column"}>
          <TextTypography>{props.price}</TextTypography>
          <TextTypography>{props.change}</TextTypography>
        </Grid>
      </Grid>
    </div>
  );
};

export default PortfolioCard;
