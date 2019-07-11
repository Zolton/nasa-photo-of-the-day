import React from "react";
import { Loader } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";

function LoaderFile() {
  return (
    <div className="ui active inverted dimmer">
      <div className="ui large text loader">Loading NASA files.  This is gonna be good</div>
    </div>
  );
}

export default LoaderFile;
