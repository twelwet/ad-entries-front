export const getOusFromDn = (dn) => dn
  .split(',')
  .filter((item) => item.match(/OU=/))
  .map((item) => item.slice(3))
  .join('; ');
