require('dotenv').config();

const express = require('express');
const app = express();
// const db = require('./data/db');
const logger = require('./middleware/logger');

const { loginRoutes, postsRoutes } = require("./routes");

app.use(logger);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.listen(process.env.PORT, ()=>{    
    console.log(`Server is running on port ${process.env.PORT}`)
    app.use("/users",loginRoutes);
    app.use("/posts",postsRoutes);
});

