import * as React from "react";
import Content from "../../components/Content";
import "./index.css";
import * as ContentServices from "../../services/content.service";
import { ExperienceModel } from "../../interfaces/experience.interface";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

interface State {
  contents: ExperienceModel[];
}

class App extends React.Component<{}, State> {
  constructor(props: State) {
    super(props);
    this.state = {
      contents: [],
    } as State;
  }

  getContent = () => {
    ContentServices.getAllContent().then((result: ExperienceModel[]) => {
      this.setState({
        contents: result,
      });
    });
  };

  componentDidMount(): void {
    this.getContent();
  }

  render() {
    return (
      <>
        <div className="background"></div>
        <Header
          menuItems={this.state.contents}
          changeLanguageRefresh={this.getContent}
        ></Header>
        <main className="app">
          <Content contents={this.state.contents}></Content>
        </main>
        {/* <Footer></Footer> */}
      </>
    );
  }
}

export default App;
