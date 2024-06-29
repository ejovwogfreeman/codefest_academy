import emailjs from "emailjs-com";

const sendEmail = (formData) => {
  const serviceId = import.meta.env.VITE_SERVICE_ID;
  const templateId = import.meta.env.VITE_TEMPLATE_ID1;
  const publicKey = import.meta.env.VITE_PUBLIC_KEY;

  emailjs
    .send(serviceId, templateId, formData, publicKey)
    .then((response) => {
      console.log("Email sent successfully!");
    })
    .catch((error) => {
      console.error("Error sending email:", error);
    });
};

export default sendEmail;
