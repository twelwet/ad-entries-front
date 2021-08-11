import PropTypes from 'prop-types';

export default PropTypes.shape({
  objectInfo: PropTypes.shape({
    dn: PropTypes.string.isRequired,
    class: PropTypes.arrayOf(PropTypes.string),
    category: PropTypes.string,
    memberOf: PropTypes.arrayOf(PropTypes.string),
    whenCreated: PropTypes.string,
    whenChanged: PropTypes.string,
  }),
  user: PropTypes.shape({
    person: PropTypes.shape({
      displayName: PropTypes.string,
      email: PropTypes.string,
      emailBoxSize: PropTypes.string,
      telephoneNumber: PropTypes.string,
      whenEmailCreated: PropTypes.string,
    }),
    company: PropTypes.shape({
      position: PropTypes.string,
      name: PropTypes.string,
    }),
    account: PropTypes.shape({
      name: PropTypes.string,
      fullName: PropTypes.string,
      lastLogon: PropTypes.string,
      pwdLastSet: PropTypes.string,
      logonCount: PropTypes.string,
    }),
  }),
  group: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
    member: PropTypes.arrayOf(PropTypes.string),
  }),
  ou: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
    location: PropTypes.shape({
      region: PropTypes.string,
      city: PropTypes.string,
      street: PropTypes.string,
    }),
  }),
});
