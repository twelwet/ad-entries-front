import React, {useState} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import entryDataProp from '../../../../prop-types/entry-data.prop';
import { DataAdapter } from '../../../../data-adapter';
import { MOCK } from '../../../../constants';
import { Type, DataAdapterName } from '../../../../constants';
import { getCnsFromDn } from '../../../../utils/get-cns-from-dn';

function Entry({ type, data, count, dataAdapterName }) {
  const [isHover, setIsHover] = useState(false);
  const [isCollapse, setIsCollapse] = useState(true);

  const entry = DataAdapter[type][dataAdapterName](data);
  /*eslint-disable react/no-array-index-key*/
  if (type === Type.GROUP && dataAdapterName === DataAdapterName[Type.GROUP].MAIN) {
    return (
      <>
        <tr
          style={{cursor: 'pointer'}}
          onMouseEnter={() => setIsHover(true)}
          onMouseLeave={() => setIsHover(false)}
          onClick={() => setIsCollapse(!isCollapse)}
          data-bs-toggle="collapse"
          data-bs-target={`#${entry[0]}`}
          className={isHover ? 'bg-light' : ''}
        >
          <th scope="row">{count}</th>
          {entry.map((item, index) =>
            <td key={`${item}-${index}`}>{item === null ? MOCK : item}</td>,
          )}
        </tr>
        <tr className={isCollapse ? 'collapse' : 'collapse show'}>
          <td id={entry[0]} colSpan={entry.length + 2}>
            <ol className="ms-3">
              {data.group.member.map((member, index) => <li key={index}>{getCnsFromDn(member)}</li>)}
            </ol>
          </td>
        </tr>
      </>
    );
  }

  return (
    <tr
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      className={isHover ? 'bg-light' : ''}
    >
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
