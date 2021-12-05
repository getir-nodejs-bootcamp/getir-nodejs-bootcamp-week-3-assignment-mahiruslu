require('dotenv').config();

const express = require('express');
const app = express();
// const db = require('./data/db');
const logger = require('./middleware/logger');
const verifyToken = require('./middleware/verifyToken');

const { loginRoutes, postsRoutes } = require("./routes");

app.use(logger);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.listen(process.env.PORT, ()=>{    
    console.log(`Server is running on port ${process.env.PORT}`)
    app.use("/login", loginRoutes);
    app.use("/posts", verifyToken, postsRoutes);
});

