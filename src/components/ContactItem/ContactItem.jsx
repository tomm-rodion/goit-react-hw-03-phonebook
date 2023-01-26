import PropTypes from 'prop-types';

export const ContactItem = ({ id, name, number, onDelete }) => {
  return (
    <li>
      <span>{name} : </span>
      <span>{number}</span>
      <button type="button" onClick={() => onDelete(id)}>
        Delete contact
      </button>
    </li>
  );
};

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};
