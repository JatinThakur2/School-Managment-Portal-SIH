//Logout
const logout = document.querySelector("#logout");
logout.addEventListener("click", (e) => {
  e.preventDefault();
  auth.signOut();
  window.location = "login.html";
});

var teacherDatabaseReference = db.ref("teachers");
const name = document.getElementById("teacher-name");

teacherDatabaseReference.on("child_added", function (tchdata) {
  name.innerHTML = tchdata.val().teacherName;
});
