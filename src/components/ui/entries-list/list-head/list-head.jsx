import React from 'react';
import { connect } from 'react-redux';
import { TableHead } from '../../../../constants';
import PropTypes from 'prop-types';

function ListHead({ type, dataAdapterName }) {
  return (
    <thead>
      <tr>
        {
          TableHead[type][dataAdapterName].map(
            (item) => <th key={item} scope="col">{item}</th>,
          )
        }
      </tr>
    </thead>
  );
}

ListHead.propTypes = {
  type: PropTypes.string.isRequired,
  dataAdapterName: PropTypes.string.isRequired,
};

const mapStateToProps = (state, { stateField }) => ({
  type: state[stateField].type,
  dataAdapterName: state[stateField].dataAdapterName,
});

export default connect(mapStateToProps, null)(ListHead);
