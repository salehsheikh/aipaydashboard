import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
});

export const sendOtpEmail = async (email, otp) => {
  const mailOptions = {
    from: process.env.EMAIL_FROM,
    to: email,
    subject: "Password  OTP",
    html: `
      <div>
        <h3>Password Reset Request</h3>
        <p>Your OTP code is: <strong>${otp}</strong></p>
        <p>This code will expire in 5 minutes.</p>
      </div>
    `,
  };

  await transporter.sendMail(mailOptions);
};