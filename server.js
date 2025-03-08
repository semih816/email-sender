const nodemailer = require("nodemailer");
require("dotenv").config();

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL, // gönderici email adresi buraya
    pass: process.env.PASSWORD, // uygulama şifresi buraya
  },
});


const mailOptions = {
  from: process.env.EMAIL,
  to: "seninmailin@gmail.com", // alıcı mail adresi buraya
  subject: "Test E-postası",
  text: "Bu bir test e-postasıdır! Node.js ile gönderildi. 🚀",
};


transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.error("Hata oluştu: ", error);
  } else {
    console.log("E-posta gönderildi: " + info.response);
  }
});

// google hesap sekmesine gelin arama kutusuna "uygulama şifreleri yazın"
// ardından "uygulama şifreleri oluştur" butonuna tıklayın
// ardından uygulama adını yazın ve şifreyi kopyalayın
// ardından .env dosyasına yapıştırın ve kaydedin