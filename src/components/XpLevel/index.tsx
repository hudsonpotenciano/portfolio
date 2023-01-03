import * as React from "react";
import "./index.scss";

class XpLevel extends React.Component<any> {
  render() {
    const mountItems = () => {
      let jsx: JSX.Element[] = [];

      for (let index = 1; index <= this.props.level; index++) {
        jsx.push(
          <div key={index} className={`xplevel-item item-${index}`}></div>
        );
      }

      return jsx;
    };

    return (
      <>
        <div className={`xplevel-container level-${this.props.level}`}>
          <div className="xplevel-items">{mountItems()}</div>
        </div>
      </>
    );
  }
}

export default XpLevel;
