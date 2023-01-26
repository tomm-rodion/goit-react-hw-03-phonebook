import PropTypes from 'prop-types';

export const ContactsFilter = ({ filter, onFilter }) => {
  return (
    <>
      <div>
        <label htmlFor="filter">Search contact by name</label>
        <input
          type="text"
          autoComplete="off"
          name="filter"
          value={filter}
          onChange={onFilter}
        />
      </div>
    </>
  );
};

ContactsFilter.propTypes = {
  filter: PropTypes.string.isRequired,
  onFilter: PropTypes.func.isRequired,
};
