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
    width: 'calc(100% - 2px)',
    border: '1px solid rgba(255,255,255,0.6)',
    backgroundColor: 'rgba(255,255,255,0.1)',
    borderRadius: '7px 7px 0 0',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    // padding: 22,
    marginTop: 10,
  },
  container: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    height: 'calc(100vh)',
    padding: '0 40px',
  },
  body: {
    width: '100%',
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
    margin: 22,
  },
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
  checkGroup: {
    display: 'flex',
    marginRight: 12,
  },
  label: {
    color: 'rgba(255,255,255,0.8)',
    fontSize: 14,
    margin: '0 11px',
  },
  tableHead: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    background:
      'linear-gradient(180deg, rgba(2,0,36,1) 0%, rgba(4,61,103,1) 0%, rgba(177,195,208,1) 0%, rgba(255,255,255,1) 100%)',
  },
  headCol: {
    margin: '15px 25px',
    color: '#043D67',
    fontSize: 17,
    display: 'flex',
    flexGrow: 2,
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

const LaunchTable = props => {
  const [state, setState] = React.useState({
    landSuccess: true,
    reused: true,
    withReddit: true,
  });

  const handleChange = (target, checked) => {
    setState({ ...state, [target]: checked });
  };

  return (
    <div style={styles.container}>
      <div style={styles.title}>SpaceX Launches</div>
      <div style={styles.body}>
        <div style={styles.header}>
          <div style={styles.button} onClick={() => console.log(state)}>
            <LoopIcon style={styles.icon} />
          </div>
          <div style={styles.checkGroup}>
            <CheckBox
              checked={state.landSuccess}
              label="LAND SUCCESS"
              onCheck={handleChange}
              target="landSuccess"
            />
            <CheckBox
              checked={state.reused}
              label="REUSED"
              onCheck={handleChange}
              target="reused"
            />
            <CheckBox
              checked={state.withReddit}
              label="WITH REDDIT"
              onCheck={handleChange}
              target="withReddit"
            />
          </div>
        </div>
        <div style={styles.tableHead}>
          <div style={styles.headCol}>Badge</div>
          <div style={styles.headCol}>Rocket Name</div>
          <div style={styles.headCol}>Rocket Type</div>
          <div style={styles.headCol}>Launch Date</div>
          <div style={{ ...styles.headCol, flexGrow: 8 }}>Details</div>
          <div
            style={{ ...styles.headCol, flexGrow: 1, justifyContent: 'center' }}
          >
            ID
          </div>
          <div
            style={{ ...styles.headCol, flexGrow: 1, justifyContent: 'center' }}
          >
            Article
          </div>
        </div>
      </div>
    </div>
  );
};

export default LaunchTable;
