import React from "react";
import Button from "@mui/material/IconButton";

type Props = {
  text?: string;
  style?: React.CSSProperties;
  onclick?: React.MouseEventHandler<HTMLButtonElement>;
};

const IconButton = (props: Props) => {
  return (
    <Button
      onClick={props.onclick}
      className="rounded-3xl sm:rounded-full px-[8vw] py-[3vh] sm:w-auto sm:py-4 sm:px-10 text-[0.9rem] sm:text-auto font-bold  text-tertiary"
      style={props.style}
    >
      {props.text}
    </Button>
  );
};

export default IconButton;
