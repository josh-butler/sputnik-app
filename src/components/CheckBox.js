import React from 'react';
import CheckIcon from '@material-ui/icons/Check';

const styles = {
  checkbox: {
    border: '1px solid rgba(255,255,255,0.7)',
    height: 22,
    width: 22,
    borderRadius: 4,
    paddingRight: 2,
    paddingBottom: 2,
    cursor: 'pointer',
  },
  checkContainer: {
    display: 'flex',
    alignItems: 'center',
    marginLeft: 20,
  },
  label: {
    color: 'rgba(255,255,255,0.8)',
    fontSize: 14,
    margin: '0 11px',
  },
};

const CheckBox = ({ checked, label, onCheck, target }) => {
  return (
    <div
      style={styles.checkContainer}
      onClick={() => onCheck(target, !checked)}
    >
      <div style={styles.checkbox}>
        {checked && <CheckIcon style={{ color: '#13A2E8' }} />}
      </div>
      <div style={styles.label}>{label}</div>
    </div>
  );
};

export default CheckBox;
