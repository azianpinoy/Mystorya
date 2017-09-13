//This section sets up the edit story functions
$("#editStory").on("click", function(){
	$(".storyText").prop("disabled", false);
});

$("#storyButton").on("click", function(){
	$(".storyText").prop("disabled", true);
})

//This section will populate story data
var userID;

userID = 1;


$( document ).ready(function() {
	getstoryData(userID);	
	getUserStories(userID);
});

function getStoryData(id){
	$.get("/api/user/" + id, function(data) {
      console.log(data);
      
      var title = data.title;
      var body = data.body;
      var image = data.image;
      var video = data.video;
      var userID = data.userID

      $("#title").val(title);
      $("#body").val(body);
      $("#image").val(image);
      $("#video").val(video);
      $("#userID").val(userID);
    });
}

function getUserStories(id){
	$.get("/api/user/" + id, function(data) {
      console.log(data);

      var storyCount = data.Stories.length;
      var selectorCount = 4;

      for(var i = 0; i < storyCount && i < selectorCount; i++){
      	var storyID = data.Stories[i].id;
      	var bookImage = data.Stories[i].image;

      	switch(i){
      		case 0:
				$("#userStory1").attr("src", bookImage);
				$("#userStory1").attr("id", storyID);      			
      			break;
  			case 1:
  				$("#userStory2").attr("src", bookImage);
  				$("#userStory2").attr("id", storyID); 
  				break;
  			case 2:
  				$("#userStory3").attr("src", bookImage);
  				$("#userStory3").attr("id", storyID); 
  				break;
  			case 3:
  				$("#userStory4").attr("src", bookImage);
  				$("#userStory4").attr("id", storyID); 
  				break;
  			default:
  				console.log("Something went wrong in the switch/case statements.")
      	}
      }
  	})
}

//handles opening a story

$(".bookImage").on("click", function(){
	console.log("Click worked");
	var storyID = this.attr("id");
	localStorage.setItem("storyIDCookie", storyID);
})