import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import userDataProps from '../../../../prop-types/user-data.prop';
import { DataAdapter } from '../../../../data-adapter';
import { MOCK } from '../../../../constants';

function Entry({ type, data, count }) {
  const entry = DataAdapter[type](data);
  /*eslint-disable react/no-array-index-key*/
  return (
    <tr>
      <th scope="row">{count}</th>
      {entry.map((item, index) => <td key={`${item}-${index}`}>{item === null ? MOCK : item}</td>)}
    </tr>
  );
}

Entry.propTypes = {
  type: PropTypes.string.isRequired,
  count: PropTypes.number.isRequired,
  data: userDataProps,
};

const mapStateToProps = (state) => ({
  type: state.entries.type,
});

export default connect(mapStateToProps, null)(Entry);
