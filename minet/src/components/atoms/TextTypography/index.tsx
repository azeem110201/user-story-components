import { Typography, TypographyProps } from "@mui/material";

interface TextTypographyProps extends TypographyProps {
  onClick?: () => void;
};

const TextTypography = (props: TextTypographyProps) => {
  return (
    <div>
      <Typography {...props}>
        {props.children}
      </Typography>
    </div>
  );
};

export default TextTypography;
