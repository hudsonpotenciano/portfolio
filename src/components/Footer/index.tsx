import * as React from "react";
import Contacts from "../Contacts";
import "./index.scss";

class Footer extends React.Component {
  render() {
    return (
      <>
        <footer className="footer-container">
          <Contacts></Contacts>
          {/* <h4>References</h4>
          <a href="https://www.flaticon.com/free-icons/flag" title="flag icons">
            Flag icons created by Freepik - Flaticon
          </a> */}
        </footer>
      </>
    );
  }
}

export default Footer;
