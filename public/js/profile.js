var storyIndex = 0;

//This section sets up the edit profile functions
$("#editProfile").on("click", function(){
	$(".profileText").prop("disabled", false);
  $("#editProfilePic").css("display", "block");
});

$("#profileButton").on("click", function(){
	$(".profileText").prop("disabled", true);
  $("#editProfilePic").css("display", "none");
})

//This section will populate profile data and user stories on document ready
var userID;

userID = localStorage.userID;


$( document ).ready(function() {
	getProfileData(userID);	
	getUserStories(userID);
});

function getProfileData(id){
	$.get("/api/user/id/" + id, function(data) {
      console.log(data);
      
      var userName = data.userName;
      var firstName = data.firstName;
      var lastName = data.lastName;
      var email = data.email;
      var bio = data.bio;
      var location = data.location;
      var storyCount = data.Stories.length;

      $("#firstName").val(firstName);
      $("#lastName").val(lastName);
      $("#userName").val(userName);
      $("#email").val(email);
      $("#bio").val(bio);
      $("#location").val(location);
      $("#storyCount").val(storyCount);

    });
}

function getUserStories(id){
	$.get("/api/user/id/" + id, function(data) {

      var storyCount = data.Stories.length;
      var selectorCount = 4;
      var count = 0;

      if(storyIndex >= storyCount){
        storyIndex = 0;
      }

      for(var i = storyIndex; i < storyCount && count < selectorCount; i++){
      	var storyID = data.Stories[i].id;
      	var bookImage = data.Stories[i].coverImage;
        var storyTitle = data.Stories[i].title;
        var firstName = data.firstName;
        var lastName = data.lastName;
        var author = firstName + " " + lastName;
        count++;

      	switch(count){
        	case 1:
    				$("#userStory1").attr("src", bookImage);
            $("#userStory1").attr("storyID", storyID);
            $("#userTitle1").html(storyTitle);
            $("#userAuthor1").html("By " + author);     			
        		break;
    			case 2:
    				$("#userStory2").attr("src", bookImage);
    				$("#userStory2").attr("storyID", storyID); 
    				$("#userTitle2").html(storyTitle);
            $("#userAuthor2").html("By " + author);
            break;
    			case 3:
    				$("#userStory3").attr("src", bookImage);
    				$("#userStory3").attr("storyID", storyID); 
    				$("#userTitle3").html(storyTitle);
            $("#userAuthor3").html("By " + author);
            break;
    			case 4:
    				$("#userStory4").attr("src", bookImage);
    				$("#userStory4").attr("storyID", storyID); 
    				$("#userTitle4").html(storyTitle);
            $("#userAuthor4").html("By " + author);
            break;
    			default:
    				console.log("Something went wrong in the switch/case statements.")
        	}
      }

      var remainingSelectors = selectorCount - count;

      if(count == 4){
        return;
      }
      
      for(var j = 0; j < remainingSelectors; j++){
        var storyID = data.Stories[j].id;
        var bookImage = data.Stories[j].coverImage;
        var storyTitle = data.Stories[j].title;
        var firstName = data.firstName;
        var lastName = data.lastName;
        var author = firstName + " " + lastName;
        count++;
        
        switch(count){
        case 1:
          $("#userStory1").attr("src", bookImage);
          $("#userStory1").attr("storyID", storyID);
          $("#userTitle1").html(storyTitle);
          $("#userAuthor1").html("By " + author);    
          break;
        case 2:
          $("#userStory2").attr("src", bookImage);
          $("#userStory2").attr("storyID", storyID);
          $("#userTitle2").html(storyTitle);
          $("#userAuthor2").html("By " + author); 
          break;
        case 3:
          $("#userStory3").attr("src", bookImage);
          $("#userStory3").attr("storyID", storyID);
          $("#userTitle3").html(storyTitle);
          $("#userAuthor3").html("By " + author); 
          break;
        case 4:
          $("#userStory4").attr("src", bookImage);
          $("#userStory4").attr("storyID", storyID);
          $("#userTitle4").html(storyTitle);
          $("#userAuthor4").html("By " + author); 
          break;
        default:
          console.log("Something went wrong in the switch/case statements.")
        }

      }
      

  	})
}

//This section will handle the left/right scroll functionality
$(".rightScroll").on("click", function(){
  event.preventDefault();

  console.log("button click worked");

  storyIndex++;
  console.log(storyIndex);
  console.log(userID);
  getUserStories(userID);
})

//This section will hold the update profile button functionality
$("#profileButton").on("click", function(){
  updateProfileData();
})

function updateProfileData(){
    
    var firstName = $("#firstName").val().trim();
    var lastName = $("#lastName").val().trim();
    var userName = $("#userName").val().trim();
    var email = $("#email").val().trim();
    var bio = $("#bio").val().trim();
    var location = $("#location").val().trim();
    
    var userData = {
      id: userID,
      firstName: firstName,
      lastName: lastName,
      userName : userName,
      email: email,
      bio: bio,
      location: location,
    };
  
    $.ajax({
      method: "PUT",
      url: "/api/user",
      data: userData,
    })
    .done(function() {
      console.log("User data updated")
    });
  
}





//This section will handle the edit profile picture button
