const express = require('express');
const router = express.Router();
const users_db = require('../data/users_db');

//get all users
router.get('/', (req, res) => {
    res.json(users_db);
});

//get user by id
router.get('/:id', (req, res) => {
    const selectedUser = users_db.find(user => user.id === parseInt(req.params.id));
    if (selectedUser) {
        res.json(selectedUser);
    } else {
        res.status(404).json({ message: 'The user with the specified ID does not exist.' });
    }
});
//add new user
router.post('/', (req, res) => {
    const newUser = {
        id: users_db.length + 1,
        username: req.body.username,
        password: req.body.password
    };
    if (newUser.username && newUser.password) {
        users_db.push(newUser);
        res.json(users_db);
    } else {
        res.status(400).json({ message: 'The username and password are required.' });
    }
});

//update user
router.patch('/:id', (req, res) => {
    const selectedUser = users_db.find(user => user.id === parseInt(req.params.id));
    if (selectedUser) {
        if (req.body.username) {
            selectedUser.username = req.body.username;
        }
        if (req.body.password) {
            selectedUser.password = req.body.password;
        }
        res.json(users_db);
    } else {
        res.status(404).json({ message: 'The user with the specified ID does not exist.' });
    }
});

//delete user
router.delete('/:id', (req, res) => {
    const selectedUser = users_db.find(user => user.id === parseInt(req.params.id));
    if (selectedUser) {
        users_db.splice(users_db.indexOf(selectedUser), 1);
        res.json(users_db);
    } else {
        res.status(404).json({ message: 'The user with the specified ID does not exist.' });
    }
});



module.exports = router;