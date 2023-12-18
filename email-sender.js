// File: email-sender.js
const nodemailer = require('nodemailer');

// Create a transporter using SMTP
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'najla.badraouy@gmail.com', // Replace with your Gmail email address
    pass: 'Najlamatthew1', // Replace with your Gmail password
  },
});

// Email options
const mailOptions = {
  from: 'your-email@gmail.com',
  to: 'najla.badraouy@gmail.com', // Replace with your email address
  subject: 'Test Email',
  text: 'This is a test email from Node.js using nodemailer.',
};

// Send email
transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.error('Error sending email:', error);
  } else {
    console.log('Email sent:', info.response);
  }
});
