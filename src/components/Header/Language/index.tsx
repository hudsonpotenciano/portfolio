import * as React from "react";
import "./index.scss";

const languages = [
  {
    key: "pt-BR",
    flag: require("../../../assets/images/brazil.png"),
  },
  {
    key: "en-US",
    flag: require("../../../assets/images/united-states.png"),
  },
];

interface Props {
  changeLanguageRefresh?: Function;
}

class Language extends React.Component<Props, any> {
  constructor(props: Props) {
    super(props);
    this.state = { lang: "" };
  }

  changeLang = (lang: any) => {
    this.setState({
      lang: lang,
    });

    localStorage.setItem(process.env.REACT_APP_LANGKEY, lang);

    if (this.props.changeLanguageRefresh) {
      this.props.changeLanguageRefresh();
    }
  };

  componentDidMount() {
    const language = localStorage.getItem(process.env.REACT_APP_LANGKEY);
    if (language) {
      this.setState({
        lang: language,
      });
    } else {
      const navLang = languages.find((l) => l.key === navigator.language);
      this.changeLang(navLang?.key ?? languages[0].key);
    }
  }

  render() {
    const mountLanguages = () => {
      let jsx: JSX.Element[] = [];

      languages.forEach((lang) => {
        jsx.push(
          <img
            key={lang.key}
            onClick={() => this.changeLang(lang.key)}
            className={`toggle-lang ${
              this.state.lang === lang.key ? "active" : ""
            }`}
            src={lang.flag}
            alt=""
          />
        );
      });

      return jsx;
    };

    return (
      <>
        <div className="toggle-lang-container">{mountLanguages()}</div>
      </>
    );
  }
}

export default Language;
