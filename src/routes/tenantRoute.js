const express = require('express');
const router = express.Router();
const tenantController = require('../controllers/auth/tenantController');
const { auth } = require('express-oauth2-jwt-bearer');

const checkJwt = auth({
  audience: 'http://localhost:3006/pos-system-admin/',
  issuerBaseURL: `https://dev-hk5hn21iuhqqo500.us.auth0.com/`,
  tokenSigningAlg: 'RS256'
});

// route to create a tenant
router.route('/createTenant').post(checkJwt, tenantController.createTenant);

module.exports = router;