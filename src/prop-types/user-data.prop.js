import PropTypes from 'prop-types';

export default PropTypes.shape({
  objectInfo: PropTypes.shape({
    // class: PropTypes.string.isRequired,
    dn: PropTypes.string.isRequired,
  }),
  person: PropTypes.shape({
    name: PropTypes.string.isRequired,
    surname: PropTypes.string.isRequired,
    // fullName: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    telephoneNumber: PropTypes.string.isRequired,
    // whenEmailCreated: PropTypes.string.isRequired,
  }),
  company: PropTypes.shape({
    // position: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }),
  account: PropTypes.shape({
    name: PropTypes.string.isRequired,
    // fullName: PropTypes.string.isRequired,
    lastLogon: PropTypes.string.isRequired,
    whenCreated: PropTypes.string.isRequired,
    // whenChanged: PropTypes.string.isRequired,
    // pwdLastSet: PropTypes.string.isRequired,
    // logonCount: PropTypes.string.isRequired,
  }),
});
