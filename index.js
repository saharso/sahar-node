const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('hello world');
});
app.get('/api/courses', (req, res) => {
    res.send([1, 2, 3, 4, 'haudy dooo']);
});

const port = process.env.PORT || 1010;
app.listen(port, ()=> console.log(`listening on port ${port}...`));