const app = require('./server'); // Replace 'server' with the name of your main application file

const port = 3000; // Change this to the desired port number

app.listen(port, () => {
  console.log(`Server has started at http://localhost:${port}`);
});
