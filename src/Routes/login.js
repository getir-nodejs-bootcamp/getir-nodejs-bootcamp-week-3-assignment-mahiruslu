const express = require('express');
const router = express.Router();
const posts_db = require('../data/posts_db');
const hs = require("http-status")


router.route('/')
    .get((req, res) => {
        res.status(hs.OK).send('login');
    })



module.exports = router;