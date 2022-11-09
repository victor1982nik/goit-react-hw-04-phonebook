import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import { Button } from 'components/ContactForm/ContactForm.styled';
import { List } from './ContactsList.styled';

export function ContactList({ dataFiltered, onDelete }) {
  return (
    <ul>
      {dataFiltered.map((contact, index) => (
        <List key={nanoid()}>
          {contact.name} {contact.number}{' '}
          <Button type="button" onClick={() => onDelete(contact.id)}>
            Delete
          </Button>
        </List>
      ))}
    </ul>
  );
}

ContactList.propTypes = {
  dataFiltered: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  onDelete: PropTypes.func,
};
