import * as React from "react";
import "./index.scss";
import { documentToHtmlString } from "@contentful/rich-text-html-renderer";
import { ExperienceModel } from "../../../interfaces/experience.interface";
import XpLevel from "../../XpLevel";

class ExperienceBlock extends React.Component<{ experience: ExperienceModel }> {
  render() {
    const mountText = (content: ExperienceModel) => {
      return content.text ? (
        <>
          <div
            className="experience-text"
            dangerouslySetInnerHTML={{
              __html: documentToHtmlString(content.text),
            }}
          ></div>
        </>
      ) : (
        <></>
      );
    };

    const mountXpLevel = () => {
      if (this.props.experience.level) {
        return (
          <>
            <XpLevel level={this.props.experience.level}></XpLevel>
          </>
        );
      }
    };

    return (
      <div
        className="experience-block"
        id={"experience-" + this.props.experience.menuIdentifier}
      >
        <div className="experience-title">{this.props.experience.title}</div>
        <div>
          {/* {mountXpLevel()} */}
          {mountText(this.props.experience)}
        </div>
      </div>
    );
  }
}

export default ExperienceBlock;
