//This section holds the on-click function for the Sign-up Submit Button
$(".signupbtn").on("click", function(){
  postUserData();
});

function postUserData(){
  event.preventDefault();

  var userName = $("#userNameInput").val().trim();
  var firstName = $("#firstNameInput").val().trim();
  var lastName = $("#lastNameInput").val().trim();
  var email = $("#emailInput").val().trim();
  var password = $("#passwordInput").val().trim();

  if (!userName || !firstName || !lastName || !email || !password){
    console.log("Form is not fully filled out");
    return;
  };

  var userData = {
    userName : userName,
    firstName: firstName,
    lastName: lastName,
    email: email,
    password: password,
  };
  
  $.post("/api/user", userData)
    .then(function(){
      console.log("User data added");
      console.log(userData);
      localStorage.setItem("userName", userData.userName);
      window.location = "/profile";
    }
  )  
}

//This section holds the on-click function for the Login Submit Button
$("#loginButton").on("click", function(){
  checkUserData();
});

function checkUserData(){
  event.preventDefault();

  var userName = $("#userNameLogin").val().trim();
  var password = $("#passwordLogin").val().trim();
  console.log(userName);

  $.get("/api/user/username/" + userName, function(data) {
    console.log(data);

    if(data.password == password){
      console.log("Login successfull");
      localStorage.setItem("userID", data.id);
      window.location = "/profile";
    }
    else{
      console.log("Incorrect password");
    }
  });
}