import React from "react";
import "./index.scss";
import { ExperienceModel } from "../../../interfaces/experience.interface";

interface Menu {
  menuActive: string;
}

interface Props {
  menuItems: ExperienceModel[];
}

class MenuBar extends React.Component<Props> {
  state: Menu = {
    menuActive: undefined,
  };

  handleMenuChange = (menuActiveTitle: string, moveScroll: boolean = true) => {
    const removeClass = document.querySelectorAll("content-active");

    removeClass.forEach((element) =>
      element.classList.remove("content-active")
    );

    const contentItem = document.getElementById("content-" + menuActiveTitle);
    if (!contentItem) return;
    if (moveScroll) {
      contentItem.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
    }
    contentItem.classList.add("content-active");
  };

  componentDidUpdate(): void {
    if (!this.state.menuActive && this.props.menuItems[0]) {
      this.setState({
        menuActive: this.props.menuItems[0]?.menuIdentifier,
      });
    }
  }

  render() {
    const clickMenu = (item: ExperienceModel) => {
      this.setState({
        menuActive: item.menuIdentifier,
      });

      this.handleMenuChange(item.menuIdentifier);
    };

    const mountMenuItems = () => {
      if (this.props.menuItems.length === 0) return;

      let jsx: JSX.Element[] = [];
      this.props.menuItems.forEach((item) => {
        jsx.push(
          <div
            key={item.menuIdentifier}
            onClick={() => clickMenu(item)}
            id={"menu-" + item.menuIdentifier}
            className={
              "menu-item" +
              (item.menuIdentifier === this.state.menuActive
                ? " menu-active"
                : "")
            }
            // style={
            //   item.menuIdentifier === this.state.menuActive
            //     ? { boxShadow: `0px 0px 5px 3px ${item.color}` }
            //     : {}
            // }
          >
            {item.avatar ? (
              <img
                className={"manu-avatar " + item.menuIdentifier}
                src={item.avatar}
                alt=""
              />
            ) : (
              <span className={"menu-item-language " + item.menuIdentifier}>
                {item.menuIdentifier.toUpperCase()}
              </span>
            )}
          </div>
        );
      });

      return jsx;
    };

    return (
      <div id="menu-container">
        <div id="menu">{mountMenuItems()}</div>
      </div>
    );
  }
}

export default MenuBar;
