import React from 'react';
import ImageIcon from '@material-ui/icons/PanoramaOutlined';

import linkIcon from '../assets/link.svg';

const styles = {
  headCol: {
    margin: '15px 25px',
    color: '#043D67',
    fontSize: 17,
    display: 'flex',
    width: '10vw',
  },
  rowContainer: {
    width: '100%',
    height: 65,
    display: 'flex',
    justifyContent: 'space-between',
    backgroundColor: '#dcdcdc',
    fontColor: '#444444',
    margin: '7px 0',
    borderRadius: 7,
    alignItems: 'center',
  },
};

const renderBadge = ({ missionPatchUrl }) => {
  if (missionPatchUrl) {
    return <img src={missionPatchUrl} alt="badge" height="40" />;
  }
  return <ImageIcon style={{ color: '#939393', fontSize: 40 }} />;
};

const formatDate = date => {
  const dt = new Date(date);
  return `${dt.getMonth() + 1}/${dt.getDate()}/${dt.getFullYear()}`;
};

const TableRow = ({ data }) => {
  const {
    rocketName,
    rocketType,
    launchDate,
    details,
    flightNumber,
    articleUrl,
  } = data;

  return (
    <div style={styles.rowContainer}>
      <div
        style={{ ...styles.headCol, width: '5vw', justifyContent: 'center' }}
      >
        {renderBadge(data)}
      </div>
      <div style={styles.headCol}>{rocketName}</div>
      <div style={styles.headCol}>{rocketType}</div>
      <div style={styles.headCol}>{formatDate(launchDate)}</div>
      <div
        style={{
          ...styles.headCol,
          width: '40vw',
          whiteSpace: 'nowrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          display: 'block',
        }}
      >
        {details}
      </div>
      <div
        style={{ ...styles.headCol, width: '5vw', justifyContent: 'center' }}
      >
        {flightNumber}
      </div>
      <div
        style={{ ...styles.headCol, width: '5vw', justifyContent: 'center' }}
      >
        {articleUrl && (
          <a href={articleUrl} target="_blank" rel="noopener noreferrer">
            <img
              src={linkIcon}
              height="20"
              alt="article"
              style={{ cursor: 'pointer' }}
            />
          </a>
        )}
      </div>
    </div>
  );
};

export default TableRow;
