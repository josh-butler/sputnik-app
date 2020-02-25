import React, { useState, useEffect } from 'react';
import axios from 'axios';

import CheckBox from './components/CheckBox';
import Reloader from './components/Reloader';
import TableRow from './components/TableRow';

const API_URL = 'https://rozv4aak55.execute-api.us-east-1.amazonaws.com/prod';

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
    maxWidth: 1200,
  },
  checkGroup: {
    display: 'flex',
    marginRight: 12,
  },
  tableHead: {
    width: '100%',
    marginBottom: 7,
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
    width: '10vw',
  },
};

const LaunchTable = props => {
  const [state, setState] = useState({
    landSuccess: false,
    reused: false,
    withReddit: false,
  });
  const [query, setQuery] = useState('');
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const result = await axios(`${API_URL}/launch${query}`);
      setData(result.data);
      setIsLoading(false);
    };
    fetchData();
  }, [query]);

  const handleChange = (target, checked) => {
    setState({ ...state, [target]: checked });
  };

  const updateQuery = () => {
    let newQuery = '';
    const params = [];
    for (let k of ['landSuccess', 'reused', 'withReddit']) {
      if (state[k]) {
        params.push(`${k}=1`);
      }
    }

    if (params.length) {
      newQuery = `?${params.join('&')}`;
    }

    if (newQuery !== query) {
      setQuery(newQuery);
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.title}>SpaceX Launches</div>
      <div style={styles.body}>
        <div style={styles.header}>
          <Reloader isLoading={isLoading} updateQuery={updateQuery} />
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
          <div
            style={{
              ...styles.headCol,
              width: '5vw',
              justifyContent: 'center',
            }}
          >
            Badge
          </div>
          <div style={styles.headCol}>Rocket Name</div>
          <div style={styles.headCol}>Rocket Type</div>
          <div style={styles.headCol}>Launch Date</div>
          <div style={{ ...styles.headCol, width: '40vw' }}>Details</div>
          <div
            style={{
              ...styles.headCol,
              width: '5vw',
              justifyContent: 'center',
            }}
          >
            ID
          </div>
          <div
            style={{
              ...styles.headCol,
              width: '5vw',
              justifyContent: 'center',
            }}
          >
            Article
          </div>
        </div>
        <div style={{ marginBottom: 40 }}>
          {data.map(row => {
            return <TableRow key={row.id} data={row} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default LaunchTable;
