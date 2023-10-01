const express = require('express');
const app = express();
const port = 3000; // You can use any port number you prefer

app.use(express.static('your-project-folder')); // Replace 'your-project-folder' with the actual folder where your index.html and other files are located

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}/`);
});
