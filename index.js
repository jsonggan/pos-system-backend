const express = require('express');
const app = express();
const tenantController = require('./src/controllers/auth/tenantController');

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

app.post('/tenant', tenantController.createTenant);
app.post('/login', tenantController.login);
app.post('/qrcode', tenantController.createQRCode);
app.get('/verify_admin', tenantController.verifyAdmin);
app.get('/verify_customer', tenantController.verifyCustomer);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});