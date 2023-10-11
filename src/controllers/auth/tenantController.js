const jwt = require('jsonwebtoken');
const QRCode = require('qrcode');
require('dotenv').config();
const { v4: uuidv4 } = require('uuid');
const knex = require('../../services/database/knex.js');

// // Generate JWT
// const token = jwt.sign({ foo: 'bar' }, process.env.SECRET_KEY, { expiresIn: '1h' });

// // Generate QR code
// QRCode.toDataURL(`https://jsonggan.github.io/pos-system/?token=${token}`, function (err, url) {
// });

exports.createTenant = async (req, res) => {
  if (!req.body.email) {
    console.log(req.body)
    return res.status(400).send("Email is required");
  }

  if (!req.body.last_name) {
    return res.status(400).send("Last Name is required");
  }

  const whiteListedEmails = await knex('white_listed_email').pluck('email');

  if (!whiteListedEmails.includes(req.body.email)) {
    return res.status(400).send("Please access makan official website for more about email authentication!");
  }

  const existingEmails = await knex('tenant').pluck('email_address');

  if (existingEmails.includes(req.body.email)) {
    return res.status(400).send("You are only allowed to have one account");
  }

  try {
    let tenantId = uuidv4();
    await knex('tenant').insert({
      email_address: req.body.email,
      last_name: req.body.last_name,
      designation: req.body.designation,
      first_name: req.body.first_name,
      tenant_id: tenantId
    })

    const tenant = await knex('tenant').where('tenant_id', tenantId).first();
    res.status(200).send({ message: "Tenant created successfully", tenant });
  } catch (err) {
    console.log(err)
    return res.status(500).send("Error creating tenant, Please contact makan for existence");
  }
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
