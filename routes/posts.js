const express = require('express');
const router = express.Router();
const Post = require('../models/post');

router.get('/', (req, res) => {
    res.send('haudy doo')
    post.save().then((data) => {
        res.send(req.json(data));
        console.log('word?')
    }).catch((err) => {
        console.log('error!!!!!!!!!!!!!!!!!!!!!!!!');
        console.log(err)
    })    
});
router.post('/', async (req, res) => {
    const post = new Post({
        title: req.body.title,
        description: req.body.description,
    });
    console.log(post);
    post.save().then((data) => {
        console.log(req.json(data));
        console.log('word?')
    }).catch((err) => {
        console.log('error!!!!!!!!!!!!!!!!!!!!!!!!');
        console.log(err)
    })

});

module.exports = router;