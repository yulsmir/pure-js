var express = require('express');
var path = require('path');
var app = express();
var port = process.env.PORT || 8090;

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, req.path));
});

app.listen(port, () => console.log(`App listening on port ${port}`));