import * as React from "react";
import "./index.scss";
import * as ContactsServices from "../../services/contacts.service";

interface State {
  contacts: ContactModel[];
}

class Contacts extends React.Component<{}, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      contacts: [],
    } as State;
  }

  componentDidMount(): void {
    ContactsServices.getAllContacts().then((result: ContactModel[]) => {
      this.setState({
        contacts: result,
      });
    });
  }

  render() {
    const mountContacts = () => {
      if (this.state.contacts.length === 0) return;
      let render: JSX.Element[] = [];
      this.state.contacts.forEach((contact: ContactModel) => {
        render.push(
          <a
            className="contact-item"
            key={contact.title}
            href={contact.link}
            target="_blank"
            rel="noreferrer"
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
