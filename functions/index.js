const functions = require("firebase-functions");

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

const nodemailer = require("nodemailer");
const cors = require("cors")({ origin: true });

const mailTransport = nodemailer.createTransport({
  service: "gmail",
  port: 465,
  auth: {
    user: "marratoon@gmail.com",
    pass: "P013y13a86591!",
  },
});

exports.sendEmailCF = functions.https.onRequest((req, res) => {
  const mailOptions = {
    from: `contactform@domain.com`,
    to: `myemail@domain.com`,
  };

  // in case you get CORS errors you need these 2 lines of code
  res.set("Access-Control-Allow-Origin", "*");
  res.set("Access-Control-Allow-Credentials", "true");

  cors(req, res, () => {
    mailOptions.subject = "Contact Form Message";
    mailOptions.html = `
    <p>Email: ${req.body.email}</p>
    <p>Name: ${req.body.name}</p>
    <p>Message: ${req.body.message}</p>
    `;
    return mailTransport
      .sendMail(mailOptions)
      .then(() => {
        return res.status(200).json({ success: true });
      })
      .catch((e) => {
        return res.status(400).json({ err: e });
      });
  });
});
