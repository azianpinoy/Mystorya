$("#editProfile").on("click", function(){
	$(".profileText").prop("disabled", false);
});

$("#profileButton").on("click", function(){
	$(".profileText").prop("disabled", true);
})

var userID;

userID = 1;

/*This section will populate profile data*/
$( document ).ready(function() {
	getProfileData(userID);	
});

function getProfileData(id){
	$.get("/api/user/" + id, function(data) {
      console.log(data);
    });
}