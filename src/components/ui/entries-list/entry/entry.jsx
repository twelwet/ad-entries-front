import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import entryDataProp from '../../../../prop-types/entry-data.prop';
import { DataAdapter } from '../../../../data-adapter';
import { MOCK } from '../../../../constants';

function Entry({ type, data, count, dataAdapterName }) {
  const entry = DataAdapter[type][dataAdapterName](data);
  /*eslint-disable react/no-array-index-key*/
  return (
    <tr>
      <th scope="row">{count}</th>
      {entry.map((item, index) =>
        <td key={`${item}-${index}`}>{item === null ? MOCK : item}</td>,
      )}
    </tr>
  );
}

Entry.propTypes = {
  type: PropTypes.string.isRequired,
  count: PropTypes.number.isRequired,
  data: entryDataProp,
  dataAdapterName: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  type: state.entries.type,
  dataAdapterName: state.entries.dataAdapterName,
});

export default connect(mapStateToProps, null)(Entry);
