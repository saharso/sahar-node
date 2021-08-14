const Joi = require('joi');
const express = require('express'); 
const mongoose = require('mongoose');
require('dotenv/config');


const app = express();
app.use(express.json());

const courses = [
    {id: 1, name: 'course 1'},
    {id: 2, name: 'course 2'},
    {id: 3, name: 'course 3'},
]
app.get('/', (req, res) => {
    res.send('hello world');
});
app.get('/api/courses', (req, res) => {
    res.send(courses);
});
app.get('/api/courses/:id', (req, res) => {
    const course = courses.find(e => e.id === +req.params.id);
    if(! course) res.status(404).send(`Course ${req.params.id} not found`);
    res.send(course);
});
app.post('/api/courses', (req, res) => {
    const course = {};
    course.id = courses.length + 1;
    console.log(req);
    course.name = req.body.name;
    courses.push(course);
    res.send(course);
});

mongoose.connect(process.env.DB_CONNECTION, { useUnifiedTopology: true }, (e)=>{
    console.log('CONNECTED');
})

const port = process.env.PORT || 1010;
app.listen(port, ()=> console.log(`listening on port ${port}...`));