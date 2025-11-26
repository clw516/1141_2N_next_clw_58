import express from 'express';
import cors from 'cors';

const app = express();

import db from './utils/database.js';

app.use(cors());

app.use('/api/blog_xx', async (req, res, next) => {
  const results = await db.query(`select * from blog_xx`);
  console.log('results', JSON.stringify(results.rows));
  res.json(results.rows);
});

app.use('/api/tour_xx/featured', async (req, res, next) => {
  const results = await db.query(`select * from tour_xx where featured = true`);
  console.log('results', JSON.stringify(results.rows));
  res.json(results.rows);
});

app.use('/api/shop_xx/womens', async (req, res, next) => {
  const results = await db.query(
    `select * from shop_xx where category = 'womens'`
  );
  console.log('results', JSON.stringify(results.rows));
  res.json(results.rows);
});

app.use('/', (req, res, next) => {
  res.send('Hsingtai Chung, 123456789');
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server running on port ${port} `);
});
