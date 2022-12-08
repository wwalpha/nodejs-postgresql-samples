import { Client } from 'pg';
import { Response } from 'express';

export const gets = async (res: Response) => {
  const client = new Client();
  await client.connect();

  const results = await client.query('SELECT * FROM film WHERE film_id = 1');

  await client.end();

  res.send(results.rows[0]);
};
