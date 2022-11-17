const contactForm = document.getElementById("contact-form");
const succesAlert = document.querySelector("#st-alert");

(function () {
  emailjs.init("Hr4OQd2ji2m_zYlUH");
})();

function sendEmail() {
  const senderName = contactForm[0].value;
  const senderEmail = contactForm[1].value;
  const msgSubject = contactForm[2].value;
  const msgContent = contactForm[3].value;

  const templateParams = {
    senderName,
    senderEmail,
    msgSubject,
    msgContent,
  };

  // Sending the form by email
  if (senderName != "" && senderEmail != "" && msgContent != "")
    emailjs
      .send("service_kov6bvv", "template_3mo25b9", templateParams)
      .then(() => {
        contactForm[0].value = "";
        contactForm[1].value = "";
        contactForm[2].value = "";
        contactForm[3].value = "";

        console.log("Message sent sucessfully");
      });
}
