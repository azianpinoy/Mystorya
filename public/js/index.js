$(".signupbtn").on("click", function(){
  postUserData();
});

function postUserData(){
  event.preventDefault();

  var firstName = $("#firstNameInput").val().trim();
  var lastName = $("#lastNameInput").val().trim();
  var email = $("#emailInput").val().trim();
  var password = $("#passwordInput").val().trim();

  if (!firstName || !lastName || !email || !password){
    console.log("Form is not fully filled out");
    return;
  };

  var userData = {
    firstName: firstName,
    lastName: lastName,
    email: email,
    password: password,
  };
  
  $.post("/api/user", userData).then(
        console.log("User data added");
  )  
}