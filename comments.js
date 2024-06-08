// create web server
const express = require('express');
const app = express();
const port = 3000;
// create a route
app.get('/comments', (req, res) => {
  res.send('Comments route');
});
// run the server
app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`);
});