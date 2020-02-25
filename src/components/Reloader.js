import React from 'react';
import LoopIcon from '@material-ui/icons/Sync';
import CircularProgress from '@material-ui/core/CircularProgress';

const styles = {
  icon: {
    color: '#FFF',
    position: 'relative',
    top: '50%',
    transform: 'translate(0, -50%)',
  },
  button: {
    border: '2px solid white',
    height: 36,
    width: 36,
    borderRadius: '50%',
    opacity: '1.0 !important',
    cursor: 'pointer',
    margin: 22,
  },
  spinner: { color: '#FFF', height: 36, width: 36, margin: 24 },
};

const Reloader = ({ isLoading, updateQuery }) => {
  if (isLoading) {
    return <CircularProgress style={styles.spinner} />;
  }
  return (
    <div style={styles.button} onClick={updateQuery}>
      <LoopIcon style={styles.icon} />
    </div>
  );
};

export default Reloader;
