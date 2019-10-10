var express = require("express");
var app = express();
app.use(express.static(__dirname + '/public'));
var port = 5501;
app.listen(port, function () {
    console.log('Server listening on localhost:%s', port);
});

var curPlayersAmount = 0;

var lobby1 = {
    curPlayersAmount: 0
};

app.get("/", (req, res) => {
    lobby1.curPlayersAmount += 1;
    res.send(`
        <canvas id="game"></canvas>
        <script src="game.js" type="module"></script>
    `);
})

app.get("/lobby1", (req, res) => {
    res.send(JSON.stringify(lobby1));
})