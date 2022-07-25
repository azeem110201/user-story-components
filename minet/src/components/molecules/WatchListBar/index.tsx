import { Box, Grid } from "@mui/material";
import React from "react";
import TextTypography from "../../atoms/TextTypography";

type WatchListBarProps = {
  image: React.ReactNode;
  name: string;
  code: string;
  change: string;
  marketCap: string;
  volume: string;
  circulatingSupply: string;
  isAddedToWatchList: boolean;
};

const WatchListBar = (props: WatchListBarProps) => {
  return (
    <div>
      <Grid container>
        <Grid item>
          {props.image}
          <Box>
            <TextTypography>{props.name}</TextTypography>
            <TextTypography>{props.code}</TextTypography>
            <TextTypography>{props.change}</TextTypography>
          </Box>
        </Grid>
        <Grid item>
          <Box>
            <TextTypography>Market Cap</TextTypography>
            <TextTypography>{props.marketCap}</TextTypography>
          </Box>
          <Box>
            <TextTypography>Vol. 24H</TextTypography>
            <TextTypography>{props.volume}</TextTypography>
          </Box>
          <Box>
            <TextTypography>Circulating Supply</TextTypography>
            <TextTypography>{props.circulatingSupply}</TextTypography>
          </Box>
        </Grid>
        <Grid item></Grid>
      </Grid>
    </div>
  );
};

export default WatchListBar;
