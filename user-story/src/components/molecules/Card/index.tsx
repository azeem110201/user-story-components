import { Grid, LinearProgress } from '@mui/material';
import React from 'react'

interface CardProps {
    img: React.ReactNode;
    title: React.ReactNode;
    description: React.ReactNode;
    iconText: React.ReactNode;
    style?: React.CSSProperties;
}

const Card = (props: CardProps) => {

  return (
    <div>
        <Grid container direction="column" style={props.style}>
            <Grid item>
                {props.img}
            </Grid>
            <Grid item>
                {props.title}
            </Grid>
            <Grid item>
                {props.description}
            </Grid>
            <Grid item direction="row">
                {props.iconText}
            </Grid>
            <Grid item>
                <LinearProgress variant="determinate" />
            </Grid>
        </Grid>
    </div>
  )
}

export default Card