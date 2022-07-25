import { Tabs, Tab } from "@mui/material";
import React, { useState } from "react";

const ChartTimeLine = () => {
  const [value, setValue] = useState<string>("one");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };
  return (
    <div>
      <Tabs value={value} onChange={handleChange} textColor="primary">
        <Tab value="one" label="1H" />
        <Tab value="two" label="24H" />
        <Tab value="three" label="1W" />
        <Tab value="four" label="1M" />
        <Tab value="five" label="1Y" />
        <Tab value="six" label="ALL" />
      </Tabs>
    </div>
  );
};

export default ChartTimeLine;
