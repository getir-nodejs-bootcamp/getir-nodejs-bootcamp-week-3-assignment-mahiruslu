const express = require('express');
const router = express.Router();
const posts_db = require('../data/posts_db');
const hs = require("http-status")
const jwt = require('jsonwebtoken');

router.route('/')
    .get((req, res) => {
        jwt.sign({
            user: "admin"
        }, 'secretkey', (err, token) => {
            res.json({
                token
            })
        })
    })
    



module.exports = router;