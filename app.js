import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';

import usersRouter from './routes/users.js';
import models from './models.js'
import apiv1Router from './routes/apiv1.js'

import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


// middleware to add mongoose models to req
app.use((req, res, next) => {
    req.models = models
    next()
})

app.use('/api/v1', apiv1Router)

// app.use('/users', usersRouter);

export default app;
