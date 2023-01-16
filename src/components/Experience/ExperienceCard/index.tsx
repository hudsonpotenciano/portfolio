import * as React from "react";
import { ExperienceModel } from "../../../interfaces/experience.interface";
import "./index.scss";

class ExperienceCard extends React.Component<{
  experience: ExperienceModel;
  clickEvent: Function;
}> {
  render() {
    return (
      <div
        onClick={() => this.props.clickEvent(this.props.experience)}
        className="content-card-container"
      >
        <img
          className="content-avatar"
          src={this.props.experience.avatar}
          alt={this.props.experience.title}
        />
      </div>
    );
  }
}

export default ExperienceCard;
