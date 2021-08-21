import PropTypes from 'prop-types';
import entriesDataProp from './entries-data.prop';

export default PropTypes.shape({
  timeStamp: PropTypes.string,
  count: PropTypes.shape({
    all: PropTypes.number.isRequired,
    enabled: PropTypes.number.isRequired,
    disabled: PropTypes.number.isRequired,
    withEmails: PropTypes.number,
  }),
  creation: PropTypes.array,
  lastLogon: PropTypes.array,
  topBoxes: entriesDataProp,
  values: PropTypes.arrayOf(PropTypes.number),
});
