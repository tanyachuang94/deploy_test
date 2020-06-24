var express = require('express');
var app = express();
app.use (express.static('public'));

app.get('/', function (req, res) {
  res.send('Hello');
});

app.get('/hello', function (req, res) {
    res.send(JSON.stringify('Hello!!!!'));
  });

// app.get('/lottery',(req, res) => {
//     const number = Math.floor(Math.random()*50)+1;
//     console.log(number)
//     res.send(number)
// })

app.listen(3000, () => {
	console.log('running on localhost:3000')
})