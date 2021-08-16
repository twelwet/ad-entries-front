import PropTypes from 'prop-types';
import entriesDataProp from './entries-data.prop';

export default PropTypes.shape({
  count: PropTypes.shape({
    all: PropTypes.number.isRequired,
    enabled: PropTypes.number.isRequired,
    disabled: PropTypes.number.isRequired,
    withEmails: PropTypes.number,
  }),
  creation: PropTypes.array.isRequired,
  lastLogon: PropTypes.array.isRequired,
  topBoxes: entriesDataProp,
});
