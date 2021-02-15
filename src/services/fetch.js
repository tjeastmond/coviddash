import axios from 'axios';

const BASE_ENDPOINT = 'https://disease.sh/v3/covid-19/';
const USA_ENDPOINT = `${BASE_ENDPOINT}countries/usa?strict=true`;
const USA_HISTORICAL_ENDPOINT = `${BASE_ENDPOINT}historical/usa?lastdays=30`;
const STATE_ENDPOINT = `${BASE_ENDPOINT}states/`;

// add error checking
async function get(endpoint) {
  try {
    const res = await axios.get(endpoint);
    return res.data;
  } catch (err) {
    return {
      statusCode: 500,
      msg: 'Error fetching data, please try again later',
      err,
    };
  }
}

async function fetchUsaData() {
  return await get(USA_ENDPOINT);
}

async function fetchUsaHistoricalData() {
  return await get(USA_HISTORICAL_ENDPOINT);
}

export async function getUsaData() {
  return await Promise.all([fetchUsaData(), fetchUsaHistoricalData()]).then(
    values => {
      const data = values[0];

      // removing recovered since it is always empty
      const { recovered, ...historical } = values[1].timeline;
      data.timeline = historical;

      return data;
    },
  );
}

export async function getStateData(state) {
  return await get(`${STATE_ENDPOINT}${encodeURI(state)}`);
}

export function getStateCounties(state) {}

export function getCountyData(state, county) {}
