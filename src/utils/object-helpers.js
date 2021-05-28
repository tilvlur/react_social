export const updateObjectInArray = (itemsArr, objPropName, itemId, newObjProps) => {
  return itemsArr.map(u => {
    if (u[objPropName] === itemId) {
      return {...u, ...newObjProps};
    }
    return u;
  });
};