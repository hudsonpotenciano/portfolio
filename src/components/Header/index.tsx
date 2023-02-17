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
  goToElement(id: string) {
    setTimeout(() => {
      document
        .getElementById(id)
        .scrollIntoView({ behavior: "smooth", block: "center" });
    }, 300);
  }

  render() {
    return (
      <>
        <header className="header-container row-center">
          {/* <MenuBar menuItems={this.props.menuItems}></MenuBar> */}
          <div className="header-logo">
            <img
              src={require("../../assets/images/hudson-avatar.png")}
              alt=""
            />
          </div>
          <div className="header-pages row-center">
            <ul>
              <li
                onClick={() => {
                  this.goToElement("experiences");
                }}
              >
                Experiences
              </li>
              <li
                onClick={() => {
                  this.goToElement("contacts");
                }}
              >Contact</li>
            </ul>
          </div>
          <div className="header-language">
            <Language
              changeLanguageRefresh={this.props.changeLanguageRefresh}
            ></Language>
          </div>
        </header>
      </>
    );
  }
}

export default Header;
