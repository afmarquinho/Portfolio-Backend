import { confirmationEmail } from "../helpers/email.js";
import Contact from "../models/Contact.js";

const contactEmail = async (req, res) => {
  try {
    const newEmail = new Contact(req.body);
    await newEmail.save();
    const { name, phone, email, subject, message } = newEmail;
    confirmationEmail({ name, phone, email, subject, message });
    res.status(201).json({
      msg: "Thanks for your message, I will contact you soon",
    });
  
  } catch (saveError) {
    console.error("Error al procesar el email", saveError);
    res.status(500).json({ msg: "Error al procesar el email" });
  }
};
export { contactEmail };
