const sgMail = require("@sendgrid/mail");

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendWelcomeEmail = (email, name) => {
  sgMail.send({
    from: "iris.aphylla.13@gmail.com",
    to: email,
    subject: "Thanks for joining us",
    text: `Welcome to the app, ${name}. Let me know how you get along with the app`
  });
};

const sendCancellationEmail = (email, name) => {
  sgMail.send({
    from: "iris.aphylla.13@gmail.com",
    to: email,
    subject: "Cancellation",
    text: `Good bye ${name}. Sorry to know that you have cancelled our service. Could you please give us the reason so we can improve our service?`
  });
};

module.exports = { sendWelcomeEmail, sendCancellationEmail };
