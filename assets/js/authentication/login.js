var togglePassword = document.getElementById("toggle-password");

if (togglePassword) {
  togglePassword.addEventListener("click", function () {
    var x = document.getElementById("login-password");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  });
}

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

//auth changes
auth.onAuthStateChanged((user) => {
  if (user) {
    if (user.email == "ssmpadmin@gmail.com") {
      window.location = "Admin-Dashboard.html";
    } else if (user.email == "rajeev.gupta@mmumullana.org") {
      window.location = "Block-Admin-dash.html";
    } else if (user.email == "neelamoberoi1030@mmumullana.org") {
      window.location = "District-Admin-dash.html";
    } else {
      window.location = "school-admin.html";
    }
  }
});

//login
const loginForm = document.querySelector("#login-form");
loginForm.addEventListener("submit", (e) => {
  e.preventDefault();

  //get user info
  const email = loginForm["login-email"].value;
  const password = loginForm["login-password"].value;

  auth
    .signInWithEmailAndPassword(email, password)
    .then((cred) => {
      console.log("Logged In successfully");
      loginForm.reset();
      modal.style.display = "none";
      document.getElementById("error").innerHTML = "";
    })
    .catch((err) => {
      document.getElementById("error").innerHTML = err.message;
      modal.style.display = "block";
    });
});
