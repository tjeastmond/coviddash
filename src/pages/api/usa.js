import { getUsaData } from '@services/fetch';

export default async function usa(_, res) {
  const data = await getUsaData();
  res.status(200).json(data);
}
