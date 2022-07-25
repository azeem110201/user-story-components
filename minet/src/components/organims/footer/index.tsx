import { Grid } from "@mui/material";
import React from "react";
import ButtonComponent from "../../atoms/buttons";
import TextTypography from "../../atoms/TextTypography";
import Dropdown from "../../molecules/dropdown";
import IconText from "../../molecules/IconText";

type FooterProps = {
  style?: React.CSSProperties;
  icon: React.ReactNode;
};

const Footer = (props: FooterProps) => {
  const handleDashboard = () => {
    // navigate to dashboard
  };

  const handleCareers = () => {
    // navigate to careers
  };

  const handleLegal = () => {
    // navigate to legal & privacy
  };

  return (
    <div>
      <Grid container sx={props.style}>
        <Grid item>
          <TextTypography color="primary" onClick={handleDashboard}>
            Dashboard
          </TextTypography>
          <TextTypography color="primary" onClick={handleCareers}>
            Careers
          </TextTypography>
          <TextTypography color="primary" onClick={handleLegal}>
            Legal & Privacy
          </TextTypography>
          <IconText icon={props.icon} text="2021 Minet" />
        </Grid>
        <Grid item>
          <Dropdown text="English" icon={props.icon} />
          <ButtonComponent color="primary" children="Need help" />
        </Grid>
      </Grid>
    </div>
  );
};

export default Footer;
