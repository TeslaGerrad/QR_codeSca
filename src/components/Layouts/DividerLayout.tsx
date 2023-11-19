import React, { HTMLAttributes, PropsWithChildren } from "react";
import { useTheme } from "@mui/material/styles";

type Props = {} & PropsWithChildren<{}>;

const DividerLayout = (props: Props) => {
  return (
    <div
      className={
        "flex sm:h-[100%] sm:w-[100%] h-auto w-[100%] gap-2 sm:firstChild:h-auto flex-col md:flex-row bg-primary sm:flex-row sm:firstChild:flex-1 md:firstChild:flex-[3] firstChild:text-secondary firstChild:font-extrabold items-center justify-center text-center secondChild:bg-secondary secondChild:text-tertiary secondChild:flex-1 sm:px-10 sm:firstChild:min-w-[320px] p-2 sm:secondChild:min-w-[320px]"
      }
    >
      {props.children}
    </div>
  );
};

export default DividerLayout;
