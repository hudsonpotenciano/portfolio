import * as React from "react";
import "./index.scss";
import Language from "./Language";

interface Props {
  changeLanguageRefresh: Function;
}

class Header extends React.Component<Props> {
  render() {
    return (
      <>
        <header className="header-container row-center">
          <Language
            changeLanguageRefresh={this.props.changeLanguageRefresh}
          ></Language>
        </header>
      </>
    );
  }
}

export default Header;
