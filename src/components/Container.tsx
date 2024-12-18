import React, { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  classes?: string;
}

const Container: React.FC<ContainerProps> = ({ children, classes }) => {
  return (
    <div className={"px-[1.25rem] lg:px-[6.25rem] 3xl:px-[6.25rem] " + classes}>
      {children}
    </div>
  );
};

export default Container;
