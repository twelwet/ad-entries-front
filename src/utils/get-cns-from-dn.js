export const getCnsFromDn = (dn) => dn
  .split(',')
  .filter((item) => item.match(/CN=/))
  .map((item) => item.slice(3))
  .join('; ');
