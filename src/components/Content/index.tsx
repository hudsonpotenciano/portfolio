import * as React from "react";
import "./index.scss";
import ContentCard from "../ContentCard";
import { ExperienceModel } from "../../interfaces/experience.interface";

class Content extends React.Component<{ contents: ExperienceModel[] }> {
  // eslint-disable-next-line
  constructor(props: { contents: ExperienceModel[] }) {
    super(props);
  }

  render() {
    const mountContents = () => {
      let jsx: JSX.Element[] = [];

      this.props.contents.forEach((content) => {
        jsx.push(
          <ContentCard
            key={content.menuIdentifier}
            content={content}
          ></ContentCard>
        );
      });

      return jsx;
    };

    return <div className="content-container">{mountContents()}</div>;
  }
}

export default Content;
