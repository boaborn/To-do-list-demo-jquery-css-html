// check off specific todos by clicking
// “ctrl + alt + f” shortcut

/*
$("li").click(function() {
	$(this).toggleClass("completed");
});
*/

//add listener to ul instead li, to avoid no listener ondynamic li 
//when li clicked inside of ul, this code only run when li clicked
$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");
});

/*
$("span").click(function(event) {
	//this(span) parent(li) fadeout in 500ms then do function
	$(this).parent().fadeOut(500, function() {
		//after fadeout, this(li) gets removed
		$(this).remove();
	});
	event.stopPropagation(); //stop event bobing up
});
*/


// $("ul").on("click", "span", function(event) {
// 	//this(span) parent(li) fadeout in 500ms then do function
// 	$(this).parent().fadeOut(500, function() {
// 		//after fadeout, this(li) gets removed
// 		$(this).remove();
// 	});
// 	event.stopPropagation(); //stop event bobing up
// });
$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut(500,function(){
		$(this).remove();
	});
	event.stopPropagation();
});

$("input[type='text']").keypress(function(event) {
	if (event.which === 13) {
		//get this input value
		var todoText = $(this).val();
		//set input box is empty
		$(this).val("");
		//create a new li and add to ul
		$("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>")
	}

});

$(".fa-plus").click(function(){
	$("input[type='text']").fadeToggle();
});