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

if(localStorage.userName){
  var userName = localStorage.userName;
  localStorage.clear();
  $.get("/api/user/username/" + userName, function(data){
    console.log(data);
    userID = data.id
    console.log(userID);
    getProfileData(userID); 
    getUserStories(userID);
  })
}
else{
   userID = localStorage.userID;
   localStorage.clear();
   getProfileData(userID);  
   getUserStories(userID);
}

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

      if(storyIndex < 0){
        storyIndex = storyCount - 1;
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

$(".leftScroll").on("click", function(){
  event.preventDefault();

  console.log("button click worked");

  storyIndex--;
  console.log(storyIndex);
  console.log(userID);
  getUserStories(userID);
})

//This section populates the story book images and text for NEW
var newOne = {
  id: 7,
  coverImage: "img/newstory1.png",
  title: "The Messi Story",
  author: "By New Stories",
};
var newTwo = {
  id: 8,
  coverImage: "img/newstory2.png",
  title: "A Surfer's Life",
  author: "By New Stories",
};
var newThree = {
  id: 9,
  coverImage: "img/newstory3.jpg",
  title: "A New World",
  author: "By New Stories",
};
var newFour = {
  id: 10,
  coverImage: "img/newstory4.jpg",
  title: "Prime Time",
  author: "By New Stories",
};

var newArray = [newOne, newTwo, newThree, newFour];


var newStoryIndex = 0;
var newStoryCount = newArray.length;
var selectorCount = 4;
var newCount = 0;

populateNew();

function populateNew(){

  if(newStoryIndex >= newStoryCount){
    newStoryIndex = 0;
  }

  if(newStoryIndex < 0){
    newStoryIndex = newStoryCount - 1;
  }

  for(var i = newStoryIndex; i < newStoryCount && newCount < selectorCount; i++){
    var storyID = newArray[i].id;
    var bookImage = newArray[i].coverImage;
    var storyTitle = newArray[i].title;
    var author = newArray[i].author;
    newCount++;

    switch(newCount){
      case 1:
        $("#newImage1").attr("src", bookImage);
        $("#newImage1").attr("storyID", storyID);
        $("#newTitle1").html(storyTitle);
        $("#newAuthor1").html(author);           
        break;
      case 2:
        $("#newImage2").attr("src", bookImage);
        $("#newImage2").attr("storyID", storyID);
        $("#newTitle2").html(storyTitle);
        $("#newAuthor2").html(author); 
        break;
      case 3:
        $("#newImage3").attr("src", bookImage);
        $("#newImage3").attr("storyID", storyID);
        $("#newTitle3").html(storyTitle);
        $("#newAuthor3").html(author); 
        break;
      case 4:
        $("#newImage4").attr("src", bookImage);
        $("#newImage4").attr("storyID", storyID);
        $("#newTitle4").html(storyTitle);
        $("#newAuthor4").html(author); 
        break;
      default:
        console.log("Something went wrong in the switch/case statements.")
      }
  }

  var remainingSelectors = selectorCount - newCount;

  if(newCount == 4){
    return;
  }

  for(var j = 0; j < remainingSelectors; j++){
    var storyID = newArray[j].id;
    var bookImage = newArray[j].coverImage;
    var storyTitle = newArray[j].title;
    var author = newArray[j].author;
    newCount++;
    
    switch(newCount){
      case 1:
        $("#newImage1").attr("src", bookImage);
        $("#newImage1").attr("storyID", storyID);
        $("#newTitle1").html(storyTitle);
        $("#newAuthor1").html(author);           
        break;
      case 2:
        $("#newImage2").attr("src", bookImage);
        $("#newImage2").attr("storyID", storyID);
        $("#newTitle2").html(storyTitle);
        $("#newAuthor2").html(author); 
        break;
      case 3:
        $("#newImage3").attr("src", bookImage);
        $("#newImage3").attr("storyID", storyID);
        $("#newTitle3").html(storyTitle);
        $("#newAuthor3").html(author); 
        break;
      case 4:
        $("#newImage4").attr("src", bookImage);
        $("#newImage4").attr("storyID", storyID);
        $("#newTitle4").html(storyTitle);
        $("#newAuthor4").html(author); 
        break;
      default:
        console.log("Something went wrong in the switch/case statements.")
      }
  }
}

//This section handles the right/left scroll functions for NEW
$("#newRightScroll").on("click", function(){
  newStoryIndex++;
  newCount = 0;
  populateNew();
})

$("#newLeftScroll").on("click", function(){
  newStoryIndex--;
  newCount = 0;
  populateNew();
})

//This section populates the story book images and text for POPULAR
var popOne = {
  id: 11,
  coverImage: "img/popstory1.jpg",
  title: "A Trip to Remember",
  author: "By Popular Stories",
};
var popTwo = {
  id: 12,
  coverImage: "img/popstory2.jpg",
  title: "Mysterious Rock",
  author: "By Popular Stories",
};
var popThree = {
  id: 13,
  coverImage: "img/popstory3.jpg",
  title: "Brothers",
  author: "By Popular Stories",
};
var popFour = {
  id: 14,
  coverImage: "img/popstory4.jpg",
  title: "The Best Ever",
  author: "By Popular Stories",
};

var popArray = [popOne, popTwo, popThree, popFour];


var popStoryIndex = 0;
var popStoryCount = popArray.length;
var selectorCount = 4;
var popCount = 0;

populatePop();

function populatePop(){

  if(popStoryIndex >= popStoryCount){
    popStoryIndex = 0;
  }

  if(popStoryIndex < 0){
    popStoryIndex = popStoryCount - 1;
  }

  for(var i = popStoryIndex; i < popStoryCount && popCount < selectorCount; i++){
    var storyID = popArray[i].id;
    var bookImage = popArray[i].coverImage;
    var storyTitle = popArray[i].title;
    var author = popArray[i].author;
    popCount++;

    switch(popCount){
      case 1:
        $("#popularImage1").attr("src", bookImage);
        $("#popularImage1").attr("storyID", storyID);
        $("#popularTitle1").html(storyTitle);
        $("#popularAuthor1").html(author);           
        break;
      case 2:
        $("#popularImage2").attr("src", bookImage);
        $("#popularImage2").attr("storyID", storyID);
        $("#popularTitle2").html(storyTitle);
        $("#popularAuthor2").html(author); 
        break;
      case 3:
        $("#popularImage3").attr("src", bookImage);
        $("#popularImage3").attr("storyID", storyID);
        $("#popularTitle3").html(storyTitle);
        $("#popularAuthor3").html(author); 
        break;
      case 4:
        $("#popularImage4").attr("src", bookImage);
        $("#popularImage4").attr("storyID", storyID);
        $("#popularTitle4").html(storyTitle);
        $("#popularAuthor4").html(author); 
        break;
      default:
        console.log("Something went wrong in the switch/case statements.")
      }
  }

  var remainingSelectors = selectorCount - popCount;

  if(popCount == 4){
    return;
  }

  for(var j = 0; j < remainingSelectors; j++){
    var storyID = popArray[j].id;
    var bookImage = popArray[j].coverImage;
    var storyTitle = popArray[j].title;
    var author = popArray[j].author;
    popCount++;
    
    switch(popCount){
      case 1:
        $("#popularImage1").attr("src", bookImage);
        $("#popularImage1").attr("storyID", storyID);
        $("#popularTitle1").html(storyTitle);
        $("#popularAuthor1").html(author);           
        break;
      case 2:
        $("#popularImage2").attr("src", bookImage);
        $("#popularImage2").attr("storyID", storyID);
        $("#popularTitle2").html(storyTitle);
        $("#popularAuthor2").html(author); 
        break;
      case 3:
        $("#popularImage3").attr("src", bookImage);
        $("#popularImage3").attr("storyID", storyID);
        $("#popularTitle3").html(storyTitle);
        $("#popularAuthor3").html(author); 
        break;
      case 4:
        $("#popularImage4").attr("src", bookImage);
        $("#popularImage4").attr("storyID", storyID);
        $("#popularTitle4").html(storyTitle);
        $("#popularAuthor4").html(author); 
        break;
      default:
        console.log("Something went wrong in the switch/case statements.")
      }
  }
}

//This section handles the right/left scroll functions for POPULAR
$("#popRightScroll").on("click", function(){
  popStoryIndex++;
  popCount = 0;
  populatePop();
})

$("#popLeftScroll").on("click", function(){
  popStoryIndex--;
  popCount = 0;
  populatePop();
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

//This section will handle the newStoryButton

$("#newStoryButton").on("click", function(){
  localStorage.setItem("userID", userID);
  window.location = "/new";
})

//This section handles the clicking of a story Book

$(".overlay").on("click", function(){
  console.log("click worked");

  var imageDiv = $(this).prev();
  console.log(imageDiv);

  var storyID = imageDiv.attr("storyID");
  console.log(storyID);

  localStorage.setItem("storyID", storyID);

})


//This section will handle the edit profile picture button
