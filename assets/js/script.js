const contactForm = document.getElementById('contact-form')
const succesAlert = document.querySelector('#st-alert')

function sendEmail() {
    const senderName = contactForm[0].value
    const senderEmail = contactForm[1].value
    const msgSubject = contactForm[2].value
    const msgContent = contactForm[3].value
    
    // Sending the form by email
    if (senderName != '' && senderEmail != '' && msgContent != '')
    Email.send({
        Host : "smtp.elasticemail.com",
        Port : 2525,
        Username : "skybet229@gmail.com",
        Password : "C117DBF7C058BF45B988F518F358129EF7ED",
        To : 'elegis.sossou@yahoo.com',
        From : 'skybet229@gmail.com',
        Subject : "New message from your Portfolio contact form",
        Body : `From: ${senderName}
        Email: ${senderEmail}
        Subject: ${msgSubject}
        Message: ${msgContent}`
    }).then(() => {
        contactForm[0].value = ''
        contactForm[1].value = ''
        contactForm[2].value = ''
        contactForm[3].value = ''
    }
    );
}