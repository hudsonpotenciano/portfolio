import * as React from "react";
import "./index.scss";

class Title extends React.Component<{ title: string }> {
  render() {
    return <div className="title">{this.props.title}</div>;
  }
}

export default Title;
