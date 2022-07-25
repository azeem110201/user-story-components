import { Grid } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import TextTypography from "../../atoms/TextTypography";

interface Props {
  id: number;
  name: string;
  status: string;
  icon: React.ReactNode;
  price: string;
  correlation: string;
}

const PriceCorrelation = (props: Props) => {
  const [details, setDetails] = useState<Props[]>([]);

  useEffect(() => {
    axios
      .get(`/correlation`)
      .then((data) => {
        setDetails(data.data);
      })
      .catch((error) => console.log(error));
  });

  const handleClicked = (id: number) => {
    // handle the clicked
  };
  return (
    <div>
      {details.slice(0, 4).map((detail) => {
        return (
          <Grid container onClick={() => handleClicked(detail.id)}>
            <Grid item>{detail.icon}</Grid>
            <Grid item direction={"column"}>
              <TextTypography>{detail.name}</TextTypography>
              <TextTypography>{detail.status}</TextTypography>
            </Grid>
            <Grid item direction={"column"}>
              <TextTypography>{detail.price}</TextTypography>
              <TextTypography>{detail.correlation}</TextTypography>
            </Grid>
          </Grid>
        );
      })}
    </div>
  );
};

export default PriceCorrelation;
