const express = require('express');
const router = express.Router();
const posts_db = require('../data/posts_db');

//get all Posts
router.get('/', (req, res) => {
    res.json(posts_db);
});

//get Post by  id
router.get('/:id', (req, res) => {
    const selectedPost = posts_db.find(Post => Post.id === parseInt(req.params.id));
    if (selectedPost) {
        res.json(selectedPost);
    } else {
        res.status(404).json({ message: 'The Post with the specified ID does not exist.' });
    }
});
//add new Post
router.post('/', (req, res) => {
    const newPost = {
        id: posts_db.length + 1,
        title: req.body.title,
        body: req.body.body,
        userId: req.body.userId
    };
    if (newPost.Postname && newPost.password) {
        posts_db.push(newPost);
        res.json(posts_db);
    } else {
        res.status(400).json({ message: 'The Postname and password are required.' });
    }
});

//update Post
router.patch('/:id', (req, res) => {
    const selectedPost = posts_db.find(Post => Post.id === parseInt(req.params.id));
    if (selectedPost) {
        if (req.body.title) {
            selectedPost.title = req.body.title;
        }
        if (req.body.body) {
            selectedPost.body = req.body.body;
        }
        res.json(posts_db);
    } else {
        res.status(404).json({ message: 'The Post with the specified ID does not exist.' });
    }
});

//delete Post
router.delete('/:id', (req, res) => {
    const selectedPost = posts_db.find(Post => Post.id === parseInt(req.params.id));
    if (selectedPost) {
        posts_db.splice(posts_db.indexOf(selectedPost), 1);
        res.json(posts_db);
    } else {
        res.status(404).json({ message: 'The Post with the specified ID does not exist.' });
    }
});



module.exports = router;