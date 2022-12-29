import * as React from "react";
import "./index.scss";
import { documentToHtmlString } from "@contentful/rich-text-html-renderer";
import { ExperienceModel } from "../../../interfaces/experience.interface";
import XpLevel from "../../XpLevel";

class ContentCard extends React.Component<{ content: ExperienceModel }> {
  render() {
    const mountText = (content: ExperienceModel) => {
      return content.text ? (
        <>
          <div
            className="content-text"
            dangerouslySetInnerHTML={{
              __html: documentToHtmlString(content.text),
            }}
          ></div>
        </>
      ) : (
        <></>
      );
    };

    const mountSubtitle = (content: ExperienceModel) => {
      return content.subtitle ? (
        <>
          <div className="content-subtitle">{content.subtitle}</div>
        </>
      ) : (
        <></>
      );
    };

    const mountXpLevel = () => {
      if (this.props.content.level) {
        return (
          <>
            <XpLevel level={this.props.content.level}></XpLevel>
          </>
        );
      }
    };

    return (
      <div
        className="content-block"
        id={"content-" + this.props.content.menuIdentifier}
      >
        <div className="line"></div>
        <div>
          <div className="row-center">
            <img
              className="content-avatar"
              src={this.props.content.avatar}
              alt={this.props.content.title}
            />
          </div>
          <div className="content-title">{this.props.content.title}</div>
          {mountXpLevel()}
          {mountSubtitle(this.props.content)}
          {mountText(this.props.content)}
        </div>
      </div>
    );
  }
}

export default ContentCard;