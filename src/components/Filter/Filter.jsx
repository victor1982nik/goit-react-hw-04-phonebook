import PropTypes from 'prop-types';
import { Input, Label } from './Filter.styled';

export function Filter({ filter, findInList }) {
  return (
    <>
      <Label>Find contacts by name</Label>
      <Input type="filter" name="filter" value={filter} onChange={findInList} />
    </>
  );
}

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  findInList: PropTypes.func,
};
