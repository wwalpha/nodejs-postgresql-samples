import { Client } from 'pg';
import { Response } from 'express';

const client = new Client();

export const gets = async (res: Response) => {
  await client.connect();

  const results = await client.query('SELECT * FROM film WHERE film_id = 1');

  await client.end();

  res.send(results.rows[0]);
};
