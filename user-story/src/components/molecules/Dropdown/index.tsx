import { Grid } from '@mui/material';
import React from 'react'
import Icon from '../../atoms/icons';
import TextTypography from '../../atoms/typography';

type DropdownProps = {
    text: React.ReactNode;
    icon: React.ReactNode;
    src: string;
    onClick?: () => void;
}

const Dropdown = (props: DropdownProps) => {
  return (
    <div>
        <Grid container>
            <Grid item>
                <TextTypography variant='subtitle1'>{props.text}</TextTypography>
            </Grid>
            <Grid item>
                <Icon onClick={props.onClick} src={props.src}>{props.icon}</Icon>
            </Grid>
        </Grid>
    </div>
  )
}

export default Dropdown