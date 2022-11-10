import PropTypes from 'prop-types';
import { useState } from 'react';
import { Button, Form } from './ContactForm.styled';
import { ContactElement } from './ContactsElement/ContactsElement';

export function ContactForm({ onSubmit }) {
  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit({ name, mobile });
    setName('');
    setMobile('');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <ContactElement
        label="Name"
        name="name"
        type="text"
        value={name}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        onChange={e => setName(e.target.value)}
      />
      <br />
      <ContactElement
        label="Number"
        name="mobile"
        type="tel"
        value={mobile}
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        onChange={e => setMobile(e.target.value)}
      />
      <br />
      <Button type="submit">Add contact</Button>
    </Form>
  );
}

// class oldContactForm extends Component {
//   state = {
//     name: '',
//     number: '',
//   };

//   handleChange = e => {
//     this.setState({ [e.target.name]: e.target.value });
//   };

//   handleClick = e => {
//     e.preventDefault();
//     this.props.onSubmit(this.state);
//     this.setState({ name: '', number: '' });
//   };

//   render() {
//     return (
//       <Form onSubmit={this.handleClick}>
//         <ContactElement
//           label="Name"
//           name="name"
//           type="text"
//           value={this.state.name}
//           pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//           title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//           onChange={this.handleChange}
//         />
//         <br />
//         <ContactElement
//           label="Number"
//           name="number"
//           type="tel"
//           value={this.state.number}
//           pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//           title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//           onChange={this.handleChange}
//         />
//         <br />
//         <Button type="submit" onClick={this.handleClick}>
//           Add contact
//         </Button>
//       </Form>
//     );
//   }
// }

ContactForm.propTypes = {
  onSubmit: PropTypes.func,
};
