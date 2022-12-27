const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "hotmail",
  auth: {
    user: "amaclonenode@outlook.com",
    pass: "amazonclone123",
  },
});

const options = {
  from: "amaclonenode@outlook.com",
  to: "krrishhere9@gmail.com",
  subject: "Sending email with node js",
  text: "Hey its krish here!",
};

transporter.sendMail(options, function (err, info) {
  if (err) {
    console.log(err);
    return;
  }
  console.log("Sent : " + info.response);
});
