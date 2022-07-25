import { Grid } from "@mui/material";
import React from "react";
import Tag from "../../atoms/Tag";
import TextTypography from "../../atoms/TextTypography";

interface Props {
  image: React.ReactNode;
  name: string;
  price: string;
  time: string;
}

const WatchList = (props: Props) => {
  return (
    <div>
      <Grid container>
        <Grid item>
          {props.image}
          <Grid item>
            <TextTypography>{props.name}</TextTypography>
            <TextTypography>{props.price}</TextTypography>
            <Tag text={props.time} />
          </Grid>
        </Grid>
        <Grid item>{/* graph for the corresponding crypto */}</Grid>
      </Grid>
    </div>
  );
};

export default WatchList;
