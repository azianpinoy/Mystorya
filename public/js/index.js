$(".signupbtn").on("click", function(){
  postUserData();
})

function postUserData(){
  event.preventDefault();

  var firstName = $("#firstNameInput").val().trim();
  var lastName = $("#lastNameInput").val().trim();
  var email = $("#emailInput").val().trim();
  var password = $("#passwordInput").val().trim();

  if (!firstName || !lastName || !email || !password){
    console.log("Form is not fully filled out");
    return;
  }
  
  console.log("Test");

  var userData = {
    firstName: firstName,
    lastName: lastName,
    email: email,
    password: password;
  }
  
  $.post("/api/user", userData)
      .then(
        console.log("User data added");
     /*   $.get("/api/user", function(data) {
          console.log(data)*/
        }
      );
  }
}