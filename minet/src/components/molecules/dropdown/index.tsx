import { Grid } from '@mui/material';
import React from 'react'

interface DropdownProps {
    text: React.ReactNode;
    icon?: React.ReactNode;
    onClick?: () => void;
    style?: React.CSSProperties;
}

const Dropdown = (props: DropdownProps) => {
  return (
    <div>
        <Grid container style={props.style} onClick={props.onClick}>
            <Grid item>
                {props.text}
            </Grid>
            <Grid item>
                {props.icon}
            </Grid>
        </Grid>
    </div>
  )
}

export default Dropdown