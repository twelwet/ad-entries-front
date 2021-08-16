import React from 'react';
import { connect } from 'react-redux';
import { TableHead, Type, DataAdapterName } from '../../../../constants';
import PropTypes from 'prop-types';

function StatHead({ type, nameOfDataAdapter }) {
  return (
    <thead>
      <tr>
        {
          TableHead[type][nameOfDataAdapter].map(
            (item) => (
              <th
                className={nameOfDataAdapter === DataAdapterName[Type.EMAILS].TOP_VOLUME ? '' : 'col-md-1'}
                key={item}
                scope="col"
              >
                {item}
              </th>),
          )
        }
      </tr>
    </thead>
  );
}

StatHead.propTypes = {
  type: PropTypes.string.isRequired,
  nameOfDataAdapter: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  type: state.stat.type,
});

export default connect(mapStateToProps, null)(StatHead);
