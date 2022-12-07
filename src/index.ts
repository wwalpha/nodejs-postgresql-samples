import express from 'express';
import { gets } from './queries';

const app = express();

app.get('/v1/health', (_, res) => res.send('backend'));

app.get('/v1/query', async (_, res) => {
  await gets(res);
});

app.listen(process.env['EXPOSE_PORT'] || 8080, () => {
  console.log('started...');
});
