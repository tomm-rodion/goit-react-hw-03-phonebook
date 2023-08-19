import PropTypes from 'prop-types';

import { ContactItem } from 'components/ContactItem/ContactItem';

export const ContactList = ({ filterContacts, filter, onDelete }) => {
  const resultFilter = filterContacts();
  return (
    <ul>
      {resultFilter.length !== 0
        ? resultFilter.map(({ name, number, id }) => (
            <ContactItem
              key={id}
              name={name}
              id={id}
              number={number}
              onDelete={onDelete}
            />
          ))
        : `Contact named "${filter}" not found!`}
    </ul>
  );
};

ContactList.prototype = {
  filterContacts: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};
