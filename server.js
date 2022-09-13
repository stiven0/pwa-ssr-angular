const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(__dirname+'/dist/pwa-ssr-angular-heroku'));

app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname+'/dist/pwa-ssr-angular-heroku/index.html'));
});

app.listen(process.env.PORT || 8080);