import express from 'express';
import consign from 'consign';
import cors from 'cors';

const app = express();
app.use(cors());


consign({cwd: __dirname})
  .include('libs/config.js')
  .then('db.js')
  .then('libs/middlewares.js')
  .then('routes')
  .then('libs/boot.js')
  .into(app);