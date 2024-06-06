const express = require('express');
const app = express();
const port = 3000; // You can use any port you like

// Serve a simple response or static files
app.get('/', (req, res) => {
  res.send('My name is Moteeullah Azmi!');
});

// Start the server
app.listen(port, '0.0.0.0', () => {
  console.log(`Server running at http://0.0.0.0:${port}/`);
});
