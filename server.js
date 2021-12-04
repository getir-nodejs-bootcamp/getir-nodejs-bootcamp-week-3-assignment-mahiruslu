require('dotenv').config();

const express = require('express');
const app = express();
// const db = require('./data/db');
const logger = require('./middleware/logger');

app.use(logger);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.listen(process.env.PORT, console.log(`Server is running on port ${process.env.PORT}`))


const userRouter = require('./routes/users');

app.use('/users', userRouter);
