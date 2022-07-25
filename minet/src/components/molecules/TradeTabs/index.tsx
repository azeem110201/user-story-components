import { Grid } from "@mui/material";
import React from "react";
import Icons from "../../atoms/icons";
import TextTypography from "../../atoms/TextTypography";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import StarIcon from "@mui/icons-material/Star";

type TradeTabsProps = {
  icon: React.ReactNode;
  name: string;
  ticker: string;
  price: string;
  change: string;
  marketCap: string;
  watch: boolean;
  style?: React.CSSProperties;
  onClick?: () => void;
};

const TradeTabs = (props: TradeTabsProps) => {
  return (
    <div>
      <Grid container sx={props.style}>
        <Grid item>
          <Icons children={props.icon} />
          <Grid item direction={"column"}>
            <TextTypography children={props.name} />
            <TextTypography children={props.ticker} />
          </Grid>
          variant={"filled"}
        </Grid>
        <Grid item>
          <TextTypography children={props.price} />
        </Grid>
        <Grid item>
          <TextTypography children={props.change} />
        </Grid>
        <Grid item>
          <TextTypography children={props.marketCap} />
        </Grid>
        <Grid item>{props.watch ? <StarIcon /> : <StarBorderIcon />}</Grid>
      </Grid>
    </div>
  );
};

export default TradeTabs;
