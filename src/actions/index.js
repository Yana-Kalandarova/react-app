export const searchContact = searchValue => ({
  type: 'SEARCH_CONTACT',
  searchValue,
});

export const deleteContact = id => ({
  type: 'DELETE_CONTACT',
  id,
});
