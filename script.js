function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
// const nodemailer = require('nodemailer');

// exports.handler = async function(event, context) {
//   const { name, email, message } = JSON.parse(event.body);

//   const transporter = nodemailer.createTransport({
//     service: 'gmail',
//     auth: {
//       user: 'byreddynikhil29@gmail.com',
//       pass: '#Sreenath2971',
//     },
//   });

//   const mailOptions = {
//     from: email,
//     to: 'byreddynikhil29@gmail.com',
//     subject: `Contact Form Submission from ${name}`,
//     text: message,
//   };

//   try {
//     await transporter.sendMail(mailOptions);
//     return {
//       statusCode: 200,
//       body: JSON.stringify({ message: 'Message sent successfully!' }),
//     };
//   } catch (error) {
//     return {
//       statusCode: 500,
//       body: JSON.stringify({ error: error.toString() }),
//     };
//   }
// };


