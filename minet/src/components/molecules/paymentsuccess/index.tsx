import { Grid } from "@mui/material";
import React from "react";
import ButtonComponent from "../../atoms/buttons";

interface PaymentSuccessMessageProps {
  icon: React.ReactNode;
  value: React.ReactNode;
  description: React.ReactNode;
  label1: React.ReactNode;
  label2: React.ReactNode;
};

const PaymentSuccessMessage = (props: PaymentSuccessMessageProps) => {
  const handleCryptoTransaction = () => {
    // navigate to crypto buying/selling page
  };

  const handleCryptoConversion = () => {
    // navigate to crypto conversion page
  };
  return (
    <div>
      <Grid container direction="column">
        <Grid item>{props.icon}</Grid>
        <Grid item>{props.value}</Grid>
        <Grid item>{props.description}</Grid>
        <Grid item>
          <ButtonComponent onClick={handleCryptoTransaction}>
            {props.label1}
          </ButtonComponent>
          <ButtonComponent onClick={handleCryptoConversion}>
            {props.label2}
          </ButtonComponent>
        </Grid>
      </Grid>
    </div>
  );
};

export default PaymentSuccessMessage;
