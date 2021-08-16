const form = document.getElementById("query-form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var subject = document.getElementById("subject").value;
  var message = document.getElementById("message").value;

  Email.send({
    Host: "smtp.gmail.com",
    Username: "teamadrenaline6@gmail.com",
    Password: "team@adrenaline",
    To: "dayanidhi.singh.sd@mmumullana.org",
    From: email,
    Subject: subject,
    Body: `This is the query mail from ${name} <br> ${message}`,
  }).then((message) => {
    alert("Your Query has been successfully sent to the Authorities.");
    form.reset();
  });
});
