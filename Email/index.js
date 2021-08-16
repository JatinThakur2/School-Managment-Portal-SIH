function sendEmail() {
	Email.send({
	Host: "smtp.gmail.com",
	Username : "ssmpofficial@gmail.com",
	Password : "ssmp1234",
	To : 'jatinthakur3333@gmail.com',
	From : "ssmpofficial@gmail.com",
	Subject : "Email through smpt.js via html",
	Body : "This is a testing email. You can edit data on this link https://drive.google.com/drive/u/5/folders/13qtESnavpxvwCVKg1gafExl46Kx3wd9n .",
	// html : '<h1>Hi there </h1><p>This is the testing mail through html.</p>',
	}).then(
		message => alert("mail sent successfully")
	);
}