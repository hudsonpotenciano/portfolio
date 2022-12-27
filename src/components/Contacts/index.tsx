import * as React from "react";
import "./index.scss";

interface Props {
  contacts: ContactModel[];
}

class Contacts extends React.Component<Props> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    const mountContacts = () => {
      if (this.props.contacts.length == 0) return;
      let render: JSX.Element[] = [];
      this.props.contacts.forEach((contact: ContactModel) => {
        render.push(
          <a
            className="contact-item"
            key={contact.title}
            href={contact.link}
            target="_blank"
          >
            <img src={contact.logo} alt="" />
            <span className="contact-title">{contact.title}</span>
          </a>
        );
      });
      return render;
    };

    return <div className="contacts-container">{mountContacts()}</div>;
  }
}

export default Contacts;
