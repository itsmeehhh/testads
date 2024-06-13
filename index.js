const express = require('express');
const app = express();
const port = process.env.PORT || 8080;

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/test/index.html');
});

app.listen(port, () => {
  console.log('Server listening on port ${port}');
});