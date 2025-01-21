const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello World!');
});

//Proper error handling
app.use((err, req, res, next) => {
  console.error(err.stack);
  if (process.env.NODE_ENV === 'production') {
    res.status(err.status || 500).send('Something went wrong.');
  } else {
    res.status(err.status || 500).send({ error: err.message, stack: err.stack });
  }
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});