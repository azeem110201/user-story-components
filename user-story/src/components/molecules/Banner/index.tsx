import { Grid } from '@mui/material'
import React from 'react'
import BooksThumbnail from '../../atoms/booksthumbnails'
import TextTypography from '../../atoms/typography'

type BannerProps = {
    text: React.ReactNode;
    style?: React.CSSProperties;
    src: string;
}

const Banner = (props: BannerProps) => {
  return (
    <div>
        <Grid container style={props.style}>
            <Grid item>
                <TextTypography variant='h3'>{props.text}</TextTypography>
            </Grid>
            <Grid item>
                <BooksThumbnail src={props.src} />
            </Grid>
        </Grid>
    </div>
  )
}

export default Banner