import PropTypes from 'prop-types';
import { Container, Title } from './Section.styled';

export function Section({ title, children }) {
  return <>
      <Title>{title}</Title>
      
      <Container>{children}</Container>
  </>;
}

Section.propTypes = {
  title: PropTypes.string.isRequired,
};