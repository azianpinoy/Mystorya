//This section sets up the edit story functions
$("#editStory").on("click", function(){
	$(".storyText").prop("disabled", false);
});

$("#storyButton").on("click", function(){
	$(".storyText").prop("disabled", true);
})

//populate story data
var userID;

userID = 1;


$( document ).ready(function() {
	getstoryData(userID);	
	getUserStories(userID);
});

//handles opening a story

/*$(".bookImage").on("click", function(){
  console.log("Click worked");
  var storyID = this.attr("id");
  localStorage.setItem("storyIDCookie", storyID);
  console.log(storyID);
})*/

$(".overlay").on("click", function(){
    var storyID = $(this).siblings(".bookImage").attr("id");
    localStorage.setItem("storyIDCookie", storyID);
    console.log(storyID);  
  };
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

//edit story
function postStoryInput(){
  event.preventDefault();

  var userInput = {
    title: data.title,
    body: data.body,
    image: data.image,
    video: data.video,
  };

      var title = data.title;
      var body = data.body;
      var image = data.image;
      var video = data.video;
      var userID = data.userID


  if (!title || !body){
    console.log("*Title and body are required");
    return;
  };
  
  $.post("/api/story", storyInput).then(
        console.log("Story Input added");
  )  
}