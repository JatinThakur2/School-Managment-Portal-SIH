const resetForm = document.querySelector("#reset-form");
var modal = document.getElementById("myModal");
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close-1")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

resetForm.addEventListener("submit", (e) => {
  const email = resetForm["reset-email"].value;
  e.preventDefault();
  if (email != "") {
    auth
      .sendPasswordResetEmail(email)
      .then(function () {
        document.getElementById(
          "error"
        ).innerHTML = `Email has been sent to you registered email address i.e. ${email}, Please check and follow the instructions in the email..`;
        modal.style.display = "block";
      })
      .catch(function (error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);
        window.alert("Message : " + errorMessage);
      });
  } else {
    window.alert("Please write your email first.");
  }
});
