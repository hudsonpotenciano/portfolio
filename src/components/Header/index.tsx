import * as React from "react";
import { ExperienceModel } from "../../interfaces/experience.interface";
import MenuBar from "./MenuBar";
import "./index.scss";
import Language from "./Language";

interface Props {
  changeLanguageRefresh: Function;
  menuItems: ExperienceModel[];
}

class Header extends React.Component<Props> {
  render() {
    return (
      <>
        <header className="header-container row-center">
          <MenuBar menuItems={this.props.menuItems}></MenuBar>
          <Language
            changeLanguageRefresh={this.props.changeLanguageRefresh}
          ></Language>
        </header>
      </>
    );
  }
}

export default Header;
