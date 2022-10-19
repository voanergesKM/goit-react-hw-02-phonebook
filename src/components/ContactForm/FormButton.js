import PropTypes from 'prop-types';
import { StyledButton } from './FormButton.styled';

export const Button = ({ text, type }) => {
  return <StyledButton type={type}>{text}</StyledButton>;
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  type: PropTypes.string,
};
