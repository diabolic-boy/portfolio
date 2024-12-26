const express = require("express");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const cors = require("cors");

const app = express();
const PORT = 5000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Email configuration
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "daibolicboy07@gmail.com", // Replace with your email
    pass: "daibolic@12345", // Replace with your email password or app password
  },
});

app.post("/send-email", (req, res) => {
  const { fullName, email, message } = req.body;

  const mailOptions = {
    from: email,
    to: "daibolicboy07@gmail.com", // Replace with your email
    subject: `Contact Form Submission from ${fullName}`,
    text: `You have a new message from ${fullName} (${email}):\n\n${message}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Error sending email:", error);
      res.status(500).send("Error sending email");
    } else {
      console.log("Email sent:", info.response);
      res.status(200).send("Email sent successfully");
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
