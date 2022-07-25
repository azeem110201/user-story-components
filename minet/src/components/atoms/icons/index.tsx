import { Icon, IconProps } from "@mui/material";

interface Props extends IconProps {
  onClick?: () => void;
};

const Icons = (props: Props) => {
  return (
    <div>
      <Icon onClick={props.onClick} {...props}>{props.children}</Icon>
    </div>
  );
};

export default Icons;
