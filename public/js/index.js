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
  

 /* function upsertAuthor(authorData) {
    $.post("/api/authors", authorData)
      .then(getAuthors);
  }*/
}