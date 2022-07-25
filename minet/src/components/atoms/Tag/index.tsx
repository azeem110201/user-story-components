import { Chip } from "@mui/material";
import React from "react";

interface Props {
  text: string;
}

const Tag = (props: Props) => {
  return (
    <div>
      <Chip label={props.text} />
    </div>
  );
};

export default Tag;
