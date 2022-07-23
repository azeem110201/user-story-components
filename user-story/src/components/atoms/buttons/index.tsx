import { Button } from '@mui/material';
import React from 'react';

type ButtonsProps = {
    children: React.ReactNode;
    style?: React.CSSProperties;
    onClick?: () => void;
    size?: 'small'
    | 'medium'
    | 'large';
    variant?: "contained" | "outlined" | "text";
}

const Buttons = (props: ButtonsProps) => {
  return (
    <div>
        <Button
        onClick={props.onClick}
        style={props.style}
        sx={{
            textTransfrom: "none",
            "&:hover":{
            backgroundColor: `#ffffff`
          }
        }}
        variant={props.variant}
        size={props.size}
        >
            {props.children}
        </Button>
    </div>
  )
}

export default Buttons