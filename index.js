const express = require('express');
const app = express();
const tenantController = require('./src/controllers/auth/tenantController');
const { auth } = require('express-oauth2-jwt-bearer');

const checkJwt = auth({
  audience: 'http://localhost:3006/pos-system-admin/',
  issuerBaseURL: `https://dev-hk5hn21iuhqqo500.us.auth0.com/`,
  tokenSigningAlg: 'RS256'
});

var cors = require('cors')

app.use(cors())
app.use(checkJwt);

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

app.post('/createTenant', tenantController.createTenant);
app.post('/login', tenantController.login);
app.post('/qrcode', tenantController.createQRCode);
app.get('/verify_admin', tenantController.verifyAdmin);
app.get('/verify_customer', tenantController.verifyCustomer);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});