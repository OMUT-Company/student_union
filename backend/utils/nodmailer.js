const nodemailer = require("nodemailer");

const sendMail = ({ name, surname, email }) => {
  try {
    const { REACT_APP_EMAIL, REACT_APP_EMAIL_PASS } = process.env;
    const transporter = nodemailer.createTransport({
      host: "smtp-mail.outlook.com",
      port: 587,
      auth: {
        user: REACT_APP_EMAIL,
        pass: REACT_APP_EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: REACT_APP_EMAIL,
      to: email,
      subject: "Account Verification Link",
      text: `Dear ${name} ${surname}, your offer has been accepted, we will contact you soon. Thank you for applying and trusting us․Best regards, Omut team!!!`,
    };

    transporter.sendMail(mailOptions, function (err) {
      if (err) {
        throw err;
      }

      return res.status(200).send({
        message: "A verification email has been sent to " + user.email,
      });
    });
  } catch (err) {
    console.log(err);
  }
};

module.exports = { sendMail };
