import PropTypes from 'prop-types';

export default PropTypes.shape({
  accounts: PropTypes.shape({
    all: PropTypes.number.isRequired,
    enabled: PropTypes.number.isRequired,
    disabled: PropTypes.number.isRequired,
    withEmails: PropTypes.number.isRequired,
    creation: PropTypes.array.isRequired,
    lastLogon: PropTypes.array.isRequired,
  }),
  emails: PropTypes.shape({
    all: PropTypes.number.isRequired,
    enabled: PropTypes.number.isRequired,
    disabled: PropTypes.number.isRequired,
    allBoxesSize: PropTypes.number.isRequired,
    creation: PropTypes.array.isRequired,
    lastLogon: PropTypes.array.isRequired,
  }),
});
