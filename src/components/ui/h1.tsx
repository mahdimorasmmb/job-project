import { cn } from "@/lib/utils";
import React, { FC } from "react";

const H1: FC<React.HTMLProps<HTMLHeadingElement>> = (props) => (
  <h1
    {...props}
    className={cn(
      "text-4xl font-extrabold tracking-tight lg:text-5xl ",
      props.className,
    )}
  />
);

export default H1;
