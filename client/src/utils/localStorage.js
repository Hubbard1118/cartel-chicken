export const getSavedElementsIds = () => {
  const savedElementsIds = localStorage.getItem('saved_elements')
    ? JSON.parse(localStorage.getItem('saved_elements'))
    : [];

  return savedElementsIds;
};

export const saveElementIds = (elementIdArr) => {
  if (elementIdArr.length) {
    localStorage.setItem('saved_elements', JSON.stringify(elementIdArr));
  } else {
    localStorage.removeItem('saved_elements');
  }
};

export const removeElementId = (elementId) => {
  const savedElementsIds = localStorage.getItem('saved_elements')
    ? JSON.parse(localStorage.getItem('saved_elements'))
    : null;

  if (!savedElementsIds) {
    return false;
  }

  const updatedSavedElementsIds = savedElementsIds?.filter((savedElementId) => savedElementId !== elementId);
  localStorage.setItem('saved_elements', JSON.stringify(updatedSavedElementsIds));

  return true;
};
