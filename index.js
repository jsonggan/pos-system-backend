const express = require('express');
const app = express();
const testingRouter = require('./src/routes/testing');

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

// Define your routes here
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Start the server
app.use("/programming-languages", testingRouter);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});