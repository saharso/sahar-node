const express = require('express');
const app = express();
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

const port = process.env.PORT || 1010;
app.listen(port, ()=> console.log(`listening on port ${port}...`));