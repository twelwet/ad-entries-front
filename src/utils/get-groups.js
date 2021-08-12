export const getGroups = (groups) => {
  const result = [];
  groups
    .forEach((entry) => entry
      .split(',')
      .filter((groupName) => groupName.match(/CN=/))
      .forEach((cn) => result
        .push(cn.slice(3))));
  return [...(new Set(result))].join('; ');
};
