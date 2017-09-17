var userID = 1; //change later to get userID 
//This section will make the update story button function
$("#overlay").on("click", function(){
  $(this).prev();  
    console.log("onclick overlay $this.prev() successful");
    getStoryData();
    /*updateStoryData();*/
   
});

function getStoryData(id){
  $.get("/api/user/" + storyID, function(data) {
      console.log(data);
      
      var storyID = data.storyID;
      var title = data.title;
      var body = data.body;
      var author = data.userID
      var storyCount = data.Stories.length;

      $("#storyID").val(storyID);
      $("#title").val(title);
      $("#body").val(body);
      $("#author").val(userID);
      $("#storyCount").val(storyCount);

    });
}

function updateStoryData(){
    
    var userId = userID;
    var title = $("#newTitle").val();
    var body = $("#newBody").val();
/*    var coverImage = $("#coverImage").val()
    var image = $("#image").val()
    var video = $("#video").val().trim();*/
    
    var storyData = {
      UserId: userId,
      title: title,
      body: body,
      viewCount: 0,

    };
  console.log(storyData);

$.post("/api/storyID", storyData)
.then(function(){
	console.log(storyData);
	console.log("post successful");
	localStorage.setItem("storyID", 1);
	window.location = "/read";
}
	)
  
}