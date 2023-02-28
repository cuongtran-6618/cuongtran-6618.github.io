export default function handler(req, res) {
  let nodemailer = require("nodemailer");
  const dotenv = require("dotenv");
  dotenv.config();

  const transporter = nodemailer.createTransport({
    service: process.env.SEND_MAIL_PROVIDER,
    port: 465,
    host: process.env.SEND_MAIL_PROVIDER_HOST,
    auth: {
      user: process.env.SEND_MAIL_PROVIDER_USERNAME,
      pass: process.env.SEND_MAIL_PROVIDER_PASSWORD,
    },
    secure: true,
  });

  const mailData = {
    from: process.env.SEND_MAIL_PROVIDER_USERNAME,
    to: "hello@felia.fi",
    subject: `Message From ${req.body.name}`,
    text:
      req.body.message +
      " | Sent from: " +
      req.body.email +
      " | tel: " +
      req.body.phone,
    html: `<div>${req.body.message}</div><p>Sent from:
    ${req.body.email}</p>`,
  };
  transporter.sendMail(mailData, function (err, info) {
    if (err) {
      res.status(500).send({ message: ` error: ${err}` });
    } else {
      res.status(200).send({ message: ` infor: ${info}` });
    }
  });
}
