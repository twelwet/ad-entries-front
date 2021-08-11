import React from 'react';
import { connect } from 'react-redux';
import { TableHead } from '../../../../constants';
import PropTypes from 'prop-types';

function ListHead({ type }) {
  return (
    <thead>
      <tr>
        {
          TableHead[type].map(
            (item) => <th key={item} scope="col">{item}</th>,
          )
        }
      </tr>
    </thead>
  );
}

ListHead.propTypes = {
  type: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  type: state.entries.type,
});

export default connect(mapStateToProps, null)(ListHead);
