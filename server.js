const express = require('express');
const app = express();
const PORT = 3300;

app.get('/', (req, res) => res.send('Hello World'));

app.listen(PORT, () => console.log(`App is listening at http://localhoast:${PORT}`))

