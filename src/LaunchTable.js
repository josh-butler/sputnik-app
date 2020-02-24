import React from 'react';
import LoopIcon from '@material-ui/icons/Sync';
import CheckIcon from '@material-ui/icons/Check';
// import { Checkbox } from '@material-ui/core';

const styles = {
  title: {
    color: '#FFF',
    fontSize: 64,
    padding: 30,
  },
  header: {
    width: '100%',
    border: '1px solid rgba(255,255,255,0.6)',
    backgroundColor: 'rgba(255,255,255,0.1)',
    borderRadius: '7px 7px 0 0',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 22,
    marginTop: 10,
  },
  container: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    height: 'calc(100vh)',
  },
  body: {
    width: '75%',
    height: '100%',
  },
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
  },
  checkbox: {
    border: '1px solid rgba(255,255,255,0.7)',
    height: 22,
    width: 22,
    borderRadius: 4,
    paddingRight: 2,
    paddingBottom: 2,
  },
  checkContainer: {
    display: 'flex',
    alignItems: 'center',
    marginLeft: 20,
  },
  checkGroup: {
    display: 'flex',
  },
  label: {
    color: 'rgba(255,255,255,0.8)',
    fontSize: 14,
    margin: '0 11px',
  },
};

const CheckBox = ({ checked, label }) => {
  return (
    <div style={styles.checkContainer}>
      <div style={styles.checkbox}>
        {checked && <CheckIcon style={{ color: '#13A2E8' }} />}
      </div>
      <div style={styles.label}>{label}</div>
    </div>
  );
};

const LaunchTable = props => {
  return (
    <div style={styles.container}>
      <div style={styles.title}>SpaceX Launches</div>
      <div style={styles.body}>
        <div style={styles.header}>
          <div style={styles.button}>
            <LoopIcon style={styles.icon} />
          </div>
          <div style={styles.checkGroup}>
            <CheckBox checked label="LAND SUCCESS" />
            <CheckBox label="REUSED" />
            <CheckBox label="WITH REDDIT" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LaunchTable;
