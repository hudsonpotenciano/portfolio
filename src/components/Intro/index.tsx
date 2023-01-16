import * as React from "react";
import Button from "../Button";
import "./index.scss";

class Intro extends React.Component<{ intro: IntroModel }> {
  render() {
    console.log(this.props.intro);

    return (
      <div className="intro-container">
        <div className="intro-content-side">
          <div className="name">{this.props.intro.name}</div>
          <div className="title">{this.props.intro.title}</div>
          <div className="buttons">
            <Button
              clickFunction={() => {
                window.open(this.props.intro.cvLink, "_blank");
              }}
              text="Download CV"
            ></Button>
          </div>
        </div>
        <div className="intro-image-side">
          <img src={this.props.intro.imageUrl} alt="" />
        </div>
      </div>
    );
  }
}

export default Intro;
