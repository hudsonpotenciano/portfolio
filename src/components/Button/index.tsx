import * as React from "react";
import "./index.scss";

class Button extends React.Component<{
  text: string;
  clickFunction: Function;
}> {
  render() {
    return (
      <button
        onClick={() => {
          this.props.clickFunction();
        }}
        className="button"
      >
        {this.props.text}
      </button>
    );
  }
}

export default Button;
