import { states } from '@data/constants';
import { getStateData } from '@services/fetch';

export default async function state(req, res) {
  const state = req?.query?.state;

  // make sure state is valid
  if (!states.includes(state)) {
    res.status(400).json({ status: 400, error: 'State not found' });
    return;
  }

  // fetch state data
  const data = await getStateData(state);

  // return state data
  res.status(200).json(data);
}
