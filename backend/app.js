var express = require('express');
var cors = require('cors');

const app = express();
const port = 3000;


var listPersons = [];

app.use(express.json());
app.use(cors());

app.post('/persons', (req, res) => {
    var body = req.body;
    listPersons.push(body);
    res.json({list: listPersons});
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
});