import * as React from "react";
import "./index.scss";
import * as ContentServices from "../../services/experience.service";
import * as PexelService from "../../services/pexels.service";
import { ExperienceModel } from "../../interfaces/experience.interface";
import Header from "../../components/Header";
import Intro from "../../components/Intro";
import Experiences from "../../components/Experience";
import Footer from "../../components/Footer";
import { getIntro } from "../../services/intro.service";

interface State {
  experiences: ExperienceModel[];
  intro: IntroModel;
  wallpapers: any[];
}

class App extends React.Component<{}, State> {
  constructor(props: State) {
    super(props);
    this.state = {
      experiences: [],
      wallpapers: [],
      intro: undefined,
    } as State;
  }

  getContent = () => {
    ContentServices.getAllContent().then((result: ExperienceModel[]) => {
      this.setState({
        experiences: result,
      });
    });
  };

  getIntro = () => {
    getIntro().then((result: IntroModel) => {
      this.setState({
        intro: result,
      });
    });
  };

  getWallpapers() {
    PexelService.getWallpapers().then((photos: any[]) => {
      this.setState({
        wallpapers: photos.map((p) => {
          return p.src.original;
        }),
      });

      document.getElementById("background").style.backgroundImage = `url(${
        this.state.wallpapers[Math.floor(Math.random() * 50)]
      })`;
    });
  }

  componentDidMount(): void {
    this.getContent();
    this.getIntro();
    // this.getWallpapers();
  }

  render() {
    const mountExperiences = () => {
      if (!this.state.experiences?.length) return <></>;
      return <Experiences experiences={this.state.experiences}></Experiences>;
    };

    const mountIntro = () => {
      if (!this.state.intro) return <></>;
      return <Intro intro={this.state.intro}></Intro>;
    };

    return (
      <>
        <div id="background"></div>
        <main className="app">
          <Header
            menuItems={this.state.experiences}
            changeLanguageRefresh={this.getContent}
          ></Header>
          {mountIntro()}
          {mountExperiences()}
          <Footer></Footer>
        </main>
      </>
    );
  }
}

export default App;
