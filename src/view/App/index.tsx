import * as React from "react";
import MenuBar from "../../components/MenuBar";
import Content from "../../components/Content";
import "./index.css";
import Contacts from "../../components/Contacts";
import * as ContentServices from "../../services/content.service";
import * as ContactsServices from "../../services/contacts.service";
import { ExperienceModel } from "../../interfaces/experience.interface";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

interface Props {
  contents: ExperienceModel[];
  contacts: ContactModel[];
}

class App extends React.Component<{}, Props> {
  constructor(props: Props) {
    super(props);
    this.state = {
      contacts: [],
      contents: [],
    } as Props;
  }

  getContent = () => {
    ContentServices.getAllContent().then((result: ExperienceModel[]) => {
      this.setState({
        contents: result,
      });
    });

    ContactsServices.getAllContacts().then((result: ContactModel[]) => {
      this.setState({
        contacts: result,
      });
    });
  };

  componentDidMount(): void {
    this.getContent();
  }

  render() {
    return (
      <>
        <Header changeLanguageRefresh={this.getContent}></Header>
        <main className="app">
          <MenuBar menuItems={this.state.contents}></MenuBar>
          <Content contents={this.state.contents}></Content>
          <Contacts contacts={this.state.contacts}></Contacts>
        </main>
        <Footer></Footer>
      </>
    );
  }
}

export default App;
