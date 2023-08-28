import nodemailer from "nodemailer";
export const confirmationEmail = async (datos) => {
  try {
    const { name, phone, email, subject, message } = datos;

    const transport = nodemailer.createTransport({
      service: "Gmail", // Puedes cambiarlo por tu proveedor de correo
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.PASSWORD_GMAIL,
      },
    });
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: "fernandez9029@gmail.com",
      subject: "Alguien te quiere contactar!!!",
      html: ` <p> ¡Alguien revisó tu portafolio y te quiere contactar, recuerda llamar cuanto antes </p>
      <p className="bg-primary">Nombre: ${name}.</p>       
               <p>Telefóno: ${phone}.</p>
               <p>email: ${email}.</p>
               <p>Subject: ${subject}.</p>
               <p>Mensaje: ${message}.</p>           
             `,
    };
    await transport.sendMail(mailOptions);
    
  } catch (error) {
    console.log("Error al enviar el correo: ", error);
  }
};
// TODO: ARREGLAR PERMITEIR DATOS DUPLICADOS
