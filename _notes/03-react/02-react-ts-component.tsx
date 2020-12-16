import React from "react";

interface IHelloProps {
  message?: string;
}

// React.FunctionComponent
const Hello: React.FC<IHelloProps> = (props) => {
  return <h2>{props.message}</h2>;
};

Hello.defaultProps = {
  message: "default",
};

export default Hello;
