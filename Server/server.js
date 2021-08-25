const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlEncoded({ extend: true }))

app.use(express.static('build'))

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Listening on PORT: ${PORT}`);
})