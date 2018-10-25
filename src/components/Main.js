import React from "react";
import { countryStarts, countryInclude } from "./Methods";

const Main = props => {
  return (
    <div className="countryContainer container">
      {props.start ? countryStarts(props.typing) : countryInclude(props.typing)}
    </div>
  );
};

export default Main;
