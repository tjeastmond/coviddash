import { states } from '@data/constants';

export default async function statesApi(_, res) {
  res.status(200).json(states);
}
