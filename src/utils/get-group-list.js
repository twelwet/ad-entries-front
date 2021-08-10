export const getGroupList = (groupsInfo) => {
  if (!groupsInfo) {
    return ['-'];
  }

  if (typeof groupsInfo === 'string') {
    return [groupsInfo];
  } else {
    return [...groupsInfo];
  }
};
