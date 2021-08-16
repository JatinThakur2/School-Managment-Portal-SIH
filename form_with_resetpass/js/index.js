var firebaseConfig = {
    apiKey: "AIzaSyCGnS-YLBl5eqdbepF9n0xfP1w2RcqZ9qk",
    authDomain: "ssmp-a8fac.firebaseapp.com",
    databaseURL: "https://ssmp-a8fac.firebaseio.com",
    projectId: "ssmp-a8fac",
    storageBucket: "ssmp-a8fac.appspot.com",
    messagingSenderId: "834563105579",
    appId: "1:834563105579:web:2f3446537ac21a95e4db6e"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  firebase.auth.Auth.Persistence.LOCAL;

  $("#btn-login").click(function(){
      var email = $("#email").val();
      var password = $("#password").val();

      if(email != "" && password != ""){
        var result = firebase.auth().signInWithEmailAndPassword(email,password);
        result.catch(function(error){
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(errorCode);
            console.log(errorMessage);
            window.alert("Message : "+errorMessage);
        });
      }
      else{
          window.alert("Please fill out all fields.")
      }
  });

  $("#btn-signup").click(function(){
    var email = $("#email").val();
    var password = $("#password").val();
    var cpassword = $("#confirmpassword").val();

    if(email != "" && password != "" && cpassword != ""){
     if(password==cpassword){
        var result = firebase.auth().createUserWithEmailAndPassword(email,password);
        result.catch(function(error){
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(errorCode);
            console.log(errorMessage);
            window.alert("Message : "+errorMessage);
        });
     }
     else{
        window.alert("Password do not match with confirm password.")
     }
    }
    else{
        
    }
});

$("#btn-resetpassword").click(function(){
    var auth = firebase.auth();
    var email = $("#email").val();
    if(email != ""){
        auth.sendPasswordResetEmail(email).then(function(){
            window.alert("Email has been sent to you, Please check and Verify.");
        })
        .catch(function(error){
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(errorCode);
            console.log(errorMessage);
            window.alert("Message : "+errorMessage);
        });
    }
    else{
        window.alert("Please write your email first.")
    }
 });

  $("#btn-logout").click(function(){
   firebase.auth().signOut();
});