import { Grid } from '@mui/material';
import React from 'react'
import TextTypography from '../../atoms/typography';

type IconWithTextProps = {
    icon: React.ReactNode;
    text: React.ReactNode;
}

const IconWithText = (props: IconWithTextProps) => {
  return (
    <div>
        <Grid container>
            <Grid item>
                {props.icon}
            </Grid>
            <Grid item>
                <TextTypography variant='subtitle1'>{props.text}</TextTypography>
            </Grid>
        </Grid>
    </div>
  )
}

export default IconWithText