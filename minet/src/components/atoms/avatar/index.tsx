import { Avatar, AvatarProps } from '@mui/material'

interface Props extends AvatarProps  {
    onClick?: () => void;
};

const AvatarComponent = (props: Props) => {
  return (
    <div>
        <Avatar onClick={props.onClick} {...props}>{props.children}</Avatar>
    </div>
  )
}

export default AvatarComponent