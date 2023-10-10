const jwt = require('jsonwebtoken');
const QRCode = require('qrcode');
require('dotenv').config();
const { v4: uuidv4 } = require('uuid');
let tenantId = uuidv4(); // This will generate a unique tenant ID

// Generate JWT
const token = jwt.sign({ foo: 'bar' }, process.env.SECRET_KEY, { expiresIn: '1h' });

// Generate QR code
QRCode.toDataURL(`https://jsonggan.github.io/pos-system/?token=${token}`, function (err, url) {
});

exports.createTenant = async (req, res) => {
  // console.log(req.headers.authorization);
  // console.log(req.body.email);
  const token = req.headers.authorization;
  console.log(JSON.parse(Buffer.from(token.split('.')[1], 'base64').toString()));
  res.send("correct path")
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
