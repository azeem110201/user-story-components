import { Grid } from "@mui/material";
import React from "react";
import ButtonComponent from "../../atoms/buttons";
import Icons from "../../atoms/icons";
import TextTypography from "../../atoms/TextTypography";
import Dropdown from "../../molecules/dropdown";

interface Props {
  page: string;
  avatar: object;
  style?: React.CSSProperties;
}

const Header = (props: Props) => {
  return (
    <div>
      <Grid container sx={props.style}>
        <Grid item>
          <TextTypography>{props.page}</TextTypography>
        </Grid>
        <Grid item>
          <Grid item>
            <ButtonComponent variant="contained">SELL</ButtonComponent>
            <ButtonComponent variant="contained">BUY</ButtonComponent>
          </Grid>
          <Grid item>
            <Icons src={Dropdown} />
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default Header;
