import * as React from "react";
import "./index.scss";
import ExperienceCard from "./ExperienceCard";
import { ExperienceModel } from "../../interfaces/experience.interface";
import ExperienceBlock from "./ExperienceBlock";

class Experiences extends React.Component<
  { experiences: ExperienceModel[] },
  { selectedExperience: ExperienceModel }
> {
  constructor(props: any) {
    super(props);
    this.state = {
      selectedExperience: undefined,
    };
  }

  changeExpBlock = (experience: ExperienceModel) => {
    this.setState({
      selectedExperience: experience,
    });
    // if (this.state.selectedExperience) {
    //   setTimeout(() => {
    //     document
    //       .getElementById("experience-" + experience.menuIdentifier)
    //       .scrollIntoView({ behavior: "smooth", block: "center" });
    //   }, 300);
    // }
  };

  componentDidMount() {
    this.changeExpBlock(this.props.experiences[0]);
  }

  render() {
    const mountCards = () => {
      let jsx: JSX.Element[] = [];

      if (!this.props.experiences?.length) return jsx;

      this.props.experiences.forEach((experience) => {
        jsx.push(
          <ExperienceCard
            key={experience.menuIdentifier}
            experience={experience}
            clickEvent={this.changeExpBlock}
          ></ExperienceCard>
        );
      });

      return jsx;
    };

    const mountBlocks = () => {
      if (!this.state.selectedExperience) return <></>;

      return (
        <>
          <ExperienceBlock
            experience={this.state.selectedExperience}
          ></ExperienceBlock>
        </>
      );
    };

    return (
      <div className="experience-container" id="experiences">
        <div className="experience-cards">{mountCards()}</div>
        <div className="experience-blocks">{mountBlocks()}</div>
      </div>
    );
  }
}

export default Experiences;
