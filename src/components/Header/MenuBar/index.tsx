import React from "react";
import "./index.scss";
import { ExperienceModel } from "../../../interfaces/experience.interface";
import utils from "../../../utils/utils";

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

  componentDidMount() {
    let intervalScroll: any = undefined;

    const hideMenuIfInFooter = () => {
      const menu = document.getElementById("menu");
      const rootHeight = document.getElementById("root").offsetHeight;

      if (window.innerHeight + window.scrollY + 100 > rootHeight) {
        menu.classList.add("hide");
      } else if (menu.classList.contains("hide")) {
        menu.classList.remove("hide");
      }
    };

    // const checkScrollInAnotherMenuItem = () => {
    //   const contentBlocks = document.querySelectorAll(".content-block");

    //   for (let index = 0; index < contentBlocks.length; index++) {
    //     const contentBlock = contentBlocks[index];

    //     const menuTitleId = contentBlock.id.split("-")[1];
    //     const menuActive = document.querySelector(".menu-active");

    //     if (
    //       "menu-" + menuTitleId !== menuActive?.id &&
    //       utils.isInViewport(contentBlock)
    //     ) {
    //       document
    //         .querySelector(".content-active")
    //         ?.classList.remove("content-active");

    //       const newMenu = this.props.menuItems.find(
    //         (m) => m.menuIdentifier === menuTitleId
    //       );

    //       this.setState({
    //         menuActive: newMenu.menuIdentifier,
    //       });

    //       this.handleMenuChange(this.state.menuActive, false);

    //       return;
    //     }
    //   }
    // };

    document.addEventListener("scroll", () => {
      const addMoveToMenuScrollEvent = () => {
        hideMenuIfInFooter();

        clearInterval(intervalScroll);
        intervalScroll = undefined;

        // checkScrollInAnotherMenuItem();
      };

      if (!intervalScroll)
        intervalScroll = setInterval(addMoveToMenuScrollEvent, 300);
    });
  }

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
