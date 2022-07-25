import { Button, ButtonProps } from "@mui/material";

interface Props extends ButtonProps {
  onClick?: () => void;
  sx?: React.CSSProperties;
}

const ButtonComponent = (props: Props) => {
  return (
    <div>
      <Button sx={props.sx} onClick={props.onClick} {...props}>
        {props.children}
      </Button>
    </div>
  );
};

export default ButtonComponent;
