const express = require('express');
const app = express();
const router = express.Router();
const tenantRoute = require('./src/routes/tenantRoute');

var cors = require('cors')
app.use(cors())

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.get('/', (req, res) => {
  res.send('Welcome to Makan!');
});

// route that only allow owner access
router.use("/owner", tenantRoute);

app.use(router);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});