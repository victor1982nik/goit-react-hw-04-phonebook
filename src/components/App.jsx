import { nanoid } from 'nanoid';
import { Component } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactsList/ContactsList';
import { Filter } from './Filter/Filter';
import { Section } from './Section/Section';

const keyLocalStorage = 'contacts';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem(
        keyLocalStorage,
        JSON.stringify(this.state.contacts)
      );
    }
  }

  componentDidMount() {
    try {
      const contacts = localStorage.getItem(keyLocalStorage);
      const parsedContacts = JSON.parse(contacts);
      if (parsedContacts) {
        this.setState({ contacts: parsedContacts });
      }
    } catch (error) {
      console.log(error.message);
    }
  }

  handleSubmit = data => {
    const newEl = {
      id: nanoid(),
      name: data.name,
      number: data.number,
    };
    if (this.findContact(data.name)) {
      window.alert(`${data.name} is already in contacts`);
      return;
    } else {
      this.setState(prevState => {
        //  console.log({ contacts: [newEl, ...prevState.contacts] });
        return { contacts: [newEl, ...prevState.contacts] };
      });
    }
  };

  findContact = contactToFind => {
    const { contacts } = this.state;
    return contacts.find(contact => contact.name === contactToFind);
  };

  handleFilter = e => {
    this.setState({ filter: e.target.value });
  };

  filterContacts = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  handleDeleteItem = idToDelete => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== idToDelete),
    }));
  };

  render() {
    const { contacts } = this.state;
    const filteredContacts = this.filterContacts();
    return (
      <div>
        <Section title="PhoneBook">
          <ContactForm onSubmit={this.handleSubmit} />
        </Section>

        <Section title="Contacts">
          {contacts.length > 0 && (
            <>
              <Filter
                filter={this.state.filter}
                findInList={this.handleFilter}
              />
              <br />
              <ContactList
                dataFiltered={filteredContacts}
                onDelete={this.handleDeleteItem}
              />
            </>
          )}
        </Section>
      </div>
    );
  }
}
