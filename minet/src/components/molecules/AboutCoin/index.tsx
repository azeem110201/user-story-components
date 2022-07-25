import { Grid } from "@mui/material";
import React from "react";
import TextTypography from "../../atoms/TextTypography";
import IconText from "../IconText";

interface AboutCoinProps {
  style?: React.CSSProperties;
  name: string;
  description: string;
  websiteLink: string;
  whitePaperLink: string;
};

const AboutCoin = (props: AboutCoinProps) => {
  const handleClick = () => {
    // naviaget to respective link
  };
  return (
    <div>
      <Grid container sx={props.style} direction={"column"}>
        <TextTypography>About - {props.name}</TextTypography>
        <Grid item>
          <TextTypography>{props.description}</TextTypography>
        </Grid>
        <Grid item direction={"column"}>
          <TextTypography>Resources</TextTypography>
          <Grid item direction={"column"}>
            <IconText onClick={handleClick} icon={} text={"Official Website"} />
            <IconText onClick={handleClick} icon={} text={"White Paper"} />
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default AboutCoin;
