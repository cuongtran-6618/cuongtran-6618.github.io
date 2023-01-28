const sgMail = require("@sendgrid/mail");
import { loadEnvConfig } from "@next/env";

export default function handler(req, res) {
  console.log(req.body);
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
  const msg = {
    to: "mailtocuong@gmail.com", // Change to your recipient
    from: req.body.email, // Change to your verified sender
    subject: "Sending with SendGrid is Fun",
    text: req.body.message,
    html: "<strong>and easy to do anywhere, even with Node.js</strong>",
  };
  sgMail
    .send(msg)
    .then(() => {
      console.log("Email sent");
      res.send(200);
    })
    .catch((error) => {
      console.error(error);
    });
}
