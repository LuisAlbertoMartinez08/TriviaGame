var time = 90;
var counter;
var answer = [];

$(document).ready(function(){

//Global Variables
//----------------------------------------------





//timer functions
//------------------------------------------------

function setTimer(){

counter = setInterval(timer, 1000);

}

function timer(){
	time-- ;
	$("#timer").text("Time Remaining " + time);

	if (time == 0){ 
    clearInterval(counter);
	};

}



setTimer();

//

});

$("#startbutton").on("click", function(){
	$("#startScreen").hide();
	$("#game").show();
});
$(".question input").on("change", function(){
	answer[0]= $("input[name=q1]:checked",".question").val();
	answer[1]= $("input[name=q2]:checked",".question").val();
	answer[2]= $("input[name=q3]:checked",".question").val();
	answer[3]= $("input[name=q4]:checked",".question").val();
	answer[4]= $("input[name=q5]:checked",".question").val();
	console.log(answer);
});


$("#submit").on("click", function(){
	console.log(answer);
});