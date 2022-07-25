import { Grid, StepContent, StepLabel, Stepper, Step } from "@mui/material";
import React from "react";
import ButtonComponent from "../../atoms/buttons";
import TextTypography from "../../atoms/TextTypography";

interface OrderSummaryProps {
  title: string;
  amount: string;
  price: string;
  paymentMethod: string;
  deliveryFees: string;
  transactionFees: string;
  depositTo: string;
  sell: boolean;
}

const OrderSummary = (props: OrderSummaryProps) => {
  const steps = [
    {
      label: "Payment method",
      description: props.paymentMethod,
    },
    {
      label: "Delivery fees",
      description: props.deliveryFees,
    },
    {
      label: "Deposit to",
      description: props.depositTo,
    },
  ];

  const handleSell = () => {
    // sell the crypto
  };

  const handleBuy = () => {
    // buy the crypto
  };
  return (
    <div>
      <Grid container>
        <Grid>
          <TextTypography>{props.title}</TextTypography>
          <TextTypography>{props.amount}</TextTypography>
          <TextTypography>{props.price}</TextTypography>
        </Grid>
        <Grid>
          <Stepper>
            {steps.map((step) => {
              return (
                <Step>
                  <StepLabel>{step.label}</StepLabel>
                  <StepContent>{step.description}</StepContent>
                </Step>
              );
            })}
          </Stepper>
        </Grid>
        <Grid>
          <TextTypography></TextTypography>
          <TextTypography></TextTypography>
          <TextTypography></TextTypography>
        </Grid>
        <Grid>
          {props.sell ? (
            <ButtonComponent variant="contained" onClick={handleSell}>
              Sell Now
            </ButtonComponent>
          ) : (
            <ButtonComponent variant="contained" onClick={handleBuy}>
              Buy Now
            </ButtonComponent>
          )}
        </Grid>
      </Grid>
    </div>
  );
};

export default OrderSummary;
