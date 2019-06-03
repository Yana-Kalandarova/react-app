import { findIndexById } from '../utils/index';

const contactList = (list = [], action) => {
  switch (action.type) {
    case 'DELETE_CONTACT':
    {
      const deletedIndex = findIndexById(list, action.id);

      return list
        .slice(0, deletedIndex)
        .concat(list.slice(deletedIndex + 1));
    }
    default:
      return list;
  }
};

export default contactList;
