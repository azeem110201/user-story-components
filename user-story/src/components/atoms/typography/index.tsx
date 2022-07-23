import { Typography } from '@mui/material';
import React from 'react'

type TypographyProps = {
  align?: 'center'
  | 'inherit'
  | 'justify'
  | 'left'
  | 'right';
  style?: React.CSSProperties;
  children: React.ReactNode;
  variant: 'body1'
  | 'body2'
  | 'button'
  | 'caption'
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'inherit'
  | 'overline'
  | 'subtitle1'
  | 'subtitle2';
  onClick?: () => void;
}

const TextTypography = (props: TypographyProps) => {
  return (
    <div>
      <Typography
       style={props.style}
       variant={props.variant}
       align={props.align}
       onClick={props.onClick}
       sx={{
        textTransform: "none"
       }}
      >{props.children}</Typography>
    </div>
  )
}

export default TextTypography