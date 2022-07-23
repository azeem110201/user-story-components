import React from "react";

type ThumbmailProps = {
  src: string;
  alt?: string;
  onClick?: any;
};

const BooksThumbnail = (props: ThumbmailProps) => {
  return (
    <div>
      <img src={props.src} alt={props.alt} onClick={props.onClick}/>
    </div>
  );
};

export default BooksThumbnail;
