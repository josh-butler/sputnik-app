import React from 'react';
import LoopIcon from '@material-ui/icons/Sync';
import CheckIcon from '@material-ui/icons/Check';

const jsonResponse = JSON.parse(`{
  "data" : [
      {
          "withReddit": true,
          "articleUrl": "https://spaceflightnow.com/2019/06/25/falcon-heavy-launches-on-military-led-rideshare-mission-boat-catches-fairing",
          "flightNumber": "81",
          "reused": false,
          "rocketName": "Falcon Heavy",
          "missionName": "STP-2",
          "rocketType": "FT",
          "details": "Space Test Program 2 is a rideshare managed by the U.S. Air Force Space and Missile Systems Center (SMC), launching from LC-39A, KSC. Most of the spacecraft will be delivered into low Earth orbit (LEO) in two deployment sequences separated by a second stage burn. These LEO payloads include the six Taiwan and United States owned COSMIC-2 microsatellites, the Planetary Society's LightSail-B demonstrator cubesat, and others. The third and final deployment will be the Air Force Research Lab's DSX spacecraft, which will be delivered to a medium Earth orbit (MEO). This mission will reuse the side cores from Arabsat 6A, which will return to LZ-1, and LZ-2. The new center core will boost back to land on OCISLY less than 40 km from the launch site.",
          "landSuccess": false,
          "id": "7d21fda4-17ed-4d62-a9b5-b59d215475e3",
          "launchDate": "2019-06-25T03:30:00.000Z",
          "missionPatchUrl": "https://images2.imgbox.com/b0/23/BvwaqoS0_o.png"
      },
      {
          "withReddit": true,
          "articleUrl": "https://spaceflightnow.com/2019/12/05/dragon-soars-on-research-and-resupply-flight-to-international-space-station",
          "flightNumber": "85",
          "reused": false,
          "rocketName": "Falcon 9",
          "missionName": "CRS-19",
          "rocketType": "FT",
          "details": "SpaceX's 19th Crew Resupply Mission on behalf of NASA with a total of 20 contracted flights, this mission brings essential supplies to the International Space Station using SpaceX's reusable Dragon spacecraft. The external payloads for this mission include the Hyperspectral Imager Suite and a lithium-ion battery. Falcon 9 and Dragon will launch from SLC-40, Cape Canaveral AFS. The mission will be complete with return and recovery of the Dragon capsule and down cargo.",
          "landSuccess": true,
          "id": "2a75e540-f5f3-4e3f-8760-b5e8d4f178f1",
          "launchDate": "2019-12-05T17:29:23.000Z",
          "missionPatchUrl": "https://images2.imgbox.com/05/f9/FQWx8g9k_o.png"
      },
      {
          "withReddit": false,
          "articleUrl": "https://en.wikipedia.org/wiki/SpaceX_COTS_Demo_Flight_1",
          "flightNumber": "7",
          "reused": false,
          "rocketName": "Falcon 9",
          "missionName": "COTS 1",
          "rocketType": "v1.0",
          "landSuccess": false,
          "id": "821c1514-c7d5-4eab-ab4b-fd4a35ace1c5",
          "launchDate": "2010-12-08T15:43:00.000Z",
          "missionPatchUrl": "https://images2.imgbox.com/d9/3e/FfrN88ry_o.png"
      },
      {
        "withReddit": true,
        "articleUrl": "https://spaceflightnow.com/2016/06/15/spacex-successfully-fires-satellites-into-orbit-but-loses-booster-on-landing/",
        "flightNumber": "31",
        "reused": false,
        "rocketName": "Falcon 9",
        "missionName": "ABS-2A / Eutelsat 117W B",
        "rocketType": "FT",
        "details": "One year after pioneering this technique on flight 16, Falcon again launched two Boeing 702SP gridded ion thruster satellites in a dual-stack configuration, with the two customers sharing the rocket and mission costs. First stage landing attempt on drone ship failed on landing due to low thrust on one of the three landing engines.",
        "landSuccess": false,
        "id": "4ee563a3-5991-42f6-a0c7-3714ae3e1cab",
        "launchDate": "2016-06-15T14:29:00.000Z",
        "missionPatchUrl": "https://images2.imgbox.com/ae/e9/VTH2y7S5_o.png"
    },
    {
        "withReddit": false,
        "articleUrl": "https://www.nasa.gov/mission_pages/station/main/spacex-crs1-target.html",
        "flightNumber": "9",
        "reused": false,
        "rocketName": "Falcon 9",
        "missionName": "CRS-1",
        "rocketType": "v1.0",
        "details": "CRS-1 successful, but the secondary payload was inserted into abnormally low orbit and lost due to Falcon 9 boost stage engine failure, ISS visiting vehicle safety rules, and the primary payload owner's contractual right to decline a second ignition of the second stage under some conditions.",
        "landSuccess": false,
        "id": "69c2c150-e7de-45d8-afb2-37475ac717e9",
        "launchDate": "2012-10-08T00:35:00.000Z",
        "missionPatchUrl": "https://images2.imgbox.com/0b/33/2eLGEejP_o.png"
    },
    {
        "withReddit": true,
        "articleUrl": "https://spaceflightnow.com/2015/02/12/space-weather-observatory-blasts-off-after-17-year-wait/",
        "flightNumber": "20",
        "reused": false,
        "rocketName": "Falcon 9",
        "missionName": "DSCOVR",
        "rocketType": "v1.1",
        "details": "First launch under USAF's OSP 3 launch contract. First SpaceX launch to put a satellite to an orbit with an orbital altitude many times the distance to the Moon: Sun-Earth libration point L1. The first stage made a test flight descent to an over-ocean landing within 10 m (33 ft) of its intended target.",
        "landSuccess": true,
        "id": "5651ac70-296f-4236-9463-01413c4a5d55",
        "launchDate": "2015-02-11T23:03:00.000Z",
        "missionPatchUrl": "https://images2.imgbox.com/63/c5/0OIpD59z_o.png"
    },
    {
        "withReddit": true,
        "articleUrl": "https://spaceflightnow.com/2018/10/08/spacex-aces-first-rocket-landing-in-california-after-launching-argentine-satellite/",
        "flightNumber": "69",
        "reused": true,
        "rocketName": "Falcon 9",
        "missionName": "SAOCOM 1A",
        "rocketType": "FT",
        "details": "SpaceX's seventeenth flight of 2018 was the first launch of the Saocom Earth observation satellite constellation of the Argentine Space Agency CONAE. The second launch of Saocom 1B will happen in 2019. This flight marked the first RTLS launch out of Vandenberg, with a landing on the concrete pad at SLC-4W, very close to the launch pad.",
        "landSuccess": true,
        "id": "23885bd9-1b49-419c-a127-6018d4f04b07",
        "launchDate": "2018-10-08T02:22:00.000Z",
        "missionPatchUrl": "https://images2.imgbox.com/ae/11/H85gskPQ_o.png"
    },
    {
        "withReddit": true,
        "articleUrl": "https://www.space.com/36852-spacex-launches-inmarsat-5-f4-satellite.html",
        "flightNumber": "40",
        "reused": false,
        "rocketName": "Falcon 9",
        "missionName": "Inmarsat-5 F4",
        "rocketType": "FT",
        "details": "At 6,070 kg this was the heaviest payload launched to GTO by a Falcon 9 rocket. The launch was originally scheduled for the Falcon Heavy, but performance improvements allowed the mission to be carried out by an expendable Falcon 9 instead.",
        "landSuccess": false,
        "id": "b0305329-1200-4d0a-a734-b5db989acc3b",
        "launchDate": "2017-05-15T23:21:00.000Z",
        "missionPatchUrl": "https://images2.imgbox.com/82/d6/SCoNa79H_o.png"
    },
    {
        "withReddit": false,
        "flightNumber": "91",
        "reused": true,
        "rocketName": "Falcon 9",
        "missionName": "CRS-20",
        "rocketType": "FT",
        "landSuccess": false,
        "id": "7eaba052-dca0-4c56-b304-f2b27323633d",
        "launchDate": "2020-03-02T06:45:00.000Z"
    },
    {
        "withReddit": true,
        "articleUrl": "https://spaceflightnow.com/2016/05/27/spacex-logs-successful-late-afternoon-launch-for-thaicom/",
        "flightNumber": "30",
        "reused": false,
        "rocketName": "Falcon 9",
        "missionName": "Thaicom 8",
        "rocketType": "FT",
        "details": "Manufactured by Orbital ATK, the 3,100-kilogram (6,800 lb) Thaicom 8 communications satellite will serve Thailand, India and Africa from the 78.5° East geostationary location. It is equipped with 24 active Ku-band transponders.",
        "landSuccess": true,
        "id": "7d5e82d9-9608-446d-9f9b-36cc6d9b8fbb",
        "launchDate": "2016-05-27T21:39:00.000Z",
        "missionPatchUrl": "https://images2.imgbox.com/d1/de/waYRCanq_o.png"
    },
    {
        "withReddit": false,
        "flightNumber": "101",
        "reused": false,
        "rocketName": "Falcon 9",
        "missionName": "GPS III SV04",
        "rocketType": "FT",
        "landSuccess": false,
        "id": "f71ebea6-b8a1-4958-ab1f-48b7bd87cb05",
        "launchDate": "2020-08-01T00:00:00.000Z"
    }
  ]
}`);

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
    // flexGrow: 2,
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

const formatDate = date => {
  const dt = new Date(date);
  return `${dt.getMonth() + 1}/${dt.getDate()}/${dt.getFullYear()}`;
};

const TableRow = ({ data }) => {
  const {
    missionPatchUrl,
    rocketName,
    rocketType,
    launchDate,
    details,
    flightNumber,
  } = data;

  return (
    <div style={styles.rowContainer}>
      <div style={{ ...styles.headCol, width: '5vw' }}>
        <img src={missionPatchUrl} alt="badge" height="40" />
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
        Article
      </div>
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
          <div style={{ ...styles.headCol, width: '5vw' }}>Badge</div>
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
        {jsonResponse.data.map(row => {
          return <TableRow key={row.id} data={row} />;
        })}
      </div>
    </div>
  );
};

export default LaunchTable;
