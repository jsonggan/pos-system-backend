const jwt = require('jsonwebtoken');
const QRCode = require('qrcode');
require('dotenv').config();
const { v4: uuidv4 } = require('uuid');
let tenantId = uuidv4(); // This will generate a unique tenant ID

// Generate JWT
const token = jwt.sign({ foo: 'bar' }, process.env.SECRET_KEY, { expiresIn: '1h' });

// Generate QR code
QRCode.toDataURL(`https://jsonggan.github.io/pos-system/?token=${token}`, function (err, url) {
  console.log(url);
});

exports.createTenant = async (req, res) => {
  // Implement your function here
};

exports.login = async (req, res) => {
  // Implement your function here
};

exports.createQRCode = async (req, res) => {
  // Implement your function here
};

exports.verifyAdmin = async (req, res) => {
  // Implement your function here
};

exports.verifyCustomer = async (req, res) => {
  // Implement your function here
};
