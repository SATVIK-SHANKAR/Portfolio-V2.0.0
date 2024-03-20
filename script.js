const form = document.querySelector("form");
const fullName = document.getElementById("Name");
const email = document.getElementById("Email");
const subject = document.getElementById("Subject");
const message = document.getElementById("message");

function sendEmail() {
    const bodyMessage = `Full Name: ${fullName.value}<br> Email: ${email.value}<br>Message: ${message.value}`;
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "satvik.shankar2003@gmail.com",
        Password : "2119A9AAF83703AFD1446B841D3BCC161C22",
        To : 'satvik.shankar2003@gmail.com',
        From : "satvik.shankar2003@gmail.com",
        Subject : subject.value,
        Body : bodyMessage
    }).then(
      message => {
        if(message === "OK"){
            Swal.fire({
                title: "Success!",
                text: "Message sent successfully!",
                icon: "success"
              });
        } 
      }
    );
}

form.addEventListener("submit", (e) =>{
    e.preventDefault();
    

    sendEmail();
})