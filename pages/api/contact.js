export default function handler(req, res) {
  let nodemailer = require("nodemailer");
  const dotenv = require("dotenv");
  dotenv.config();

  console.log(req.body);

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

  let $html = `<div>${req.body.message}</div><p>Sent from email: ${req.body.email}</p><p>Sent from telphone: ${req.body.phone}</p>`;
  console.log($html);
  const mailData = {
    from: process.env.SEND_MAIL_PROVIDER_USERNAME,
    to: "hello@felia.fi",
    subject: `A new contact message from ${req.body.name}`,
    text: `${req.body.message} | Sent from: ${req.body.message}  | tel: ${req.body.phone}`,
    html: $html,
  };

  transporter.sendMail(mailData, function (err, info) {
    if (err) {
      res.status(500).send({ message: ` error: ${err}` });
    } else {
      res.status(200).send({ message: ` infor: ${info}` });
    }
  });
}
