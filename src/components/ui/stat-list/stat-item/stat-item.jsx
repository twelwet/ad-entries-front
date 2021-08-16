import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { MOCK } from '../../../../constants';
import { DataAdapter } from '../../../../data-adapter';
import statDataProp from '../../../../prop-types/stat-data.prop';

function StatItem({ data, type, nameOfDataAdapter }) {
  const [isHover, setIsHover] = useState(false);
  const statItem = DataAdapter[type][nameOfDataAdapter](data);
  /*eslint-disable react/no-array-index-key*/
  return (
    <tr
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      className={isHover ? 'bg-light' : ''}
    >
      {nameOfDataAdapter === 'main' || nameOfDataAdapter === 'creation' || nameOfDataAdapter === 'activity'  ? null : <th scope="row">{1}</th>}
      {statItem.map((item, index) =>
        <td key={`${item}-${index}`}>{item === null ? MOCK : item}</td>,
      )}
    </tr>
  );
}

StatItem.propTypes = {
  type: PropTypes.string.isRequired,
  data: statDataProp,
  nameOfDataAdapter: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  type: state.stat.type,
  data: state.stat.data,
});

export default connect(mapStateToProps, null)(StatItem);
