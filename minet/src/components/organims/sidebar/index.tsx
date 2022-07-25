import { Grid } from "@mui/material";
import React from "react";
import Icons from "../../atoms/icons";

type SidebarProps = {
  logo: React.ReactNode;
  icons: [];
};

const Sidebar = (props: SidebarProps) => {
  const handleIconClick = (index: number) => {
    // route to the page based on the icon clicked
  };
  return (
    <div>
      <Grid container direction={"column"}>
        <Grid item>{props.logo}</Grid>
        <Grid item direction={"column"}>
          {props.icons.map((icon, index) => {
            return (
              <Icons key={index} onClick={() => handleIconClick(index)}>
                {icon}
              </Icons>
            );
          })}
        </Grid>
      </Grid>
    </div>
  );
};

export default Sidebar;
