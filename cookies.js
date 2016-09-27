// Goal:

// To demonstrate understanding of setting and retrieving cookie data.

// Assignment:

// Imagine you're running a confectionary that serves 3 types of (edible) cookies: sugar, chocolate, and lemon. This confectionary serves these cookies as values stored inside of a browser cookie, which is far less satisfying, but the users of the confectionary still find value in it for some reason. Like most startups, we'll find the customers and profit later!

// Create a simple front-end website where users can decide how many cookies that they'd like to eat of each flavor. Once they indicate this, which could be by clicking on an item on screen or by submitted a form, store this value inside of several browser cookies, which specify the type of confectionary cookies as the key and the amount of confectionary cookies eaten so far as a value.

// Grading criteria:

// Thoughtful styling added
// Interactive and fun for the user to use
// A user should be able to:
// Grab a cookie flavor, which increments their cookie count by one
// Come back to the page and see how many cookies they've grabbed so far
// Clear their cookie count completely in case they're feeling guilty
// Complete = Meets ALL grading criteria points above.

// Incomplete = Does not meet all grading criteria points above. Needs improvement or missing submission.

// Cookies.set("Snack","Goldfish");
// console.log( Cookies.get("Snack") );

$(document).ready(function(){

	var total1 = Cookies.get("sugarcookies")
		if (total1 == null) {
			total1 = 0;
			console.log(total1)
		} 

	var total2 = Cookies.get("chocolatecookies")
		if (total2 == null) {
			total2 = 0;
			console.log(total1)
		} 

	var total3 = Cookies.get("lemoncookies")
		if (total3 == null) {
			total3 = 0;
			console.log(total1)
		} 

$("#sugar").click(function(){
	total1 = parseInt(total1, 10) + 1;
	console.log(total1);
	Cookies.set("sugarcookies" , total1);
});

$("#clearsugar").click(function(){
	Cookies.expire("sugarcookies");
	console.log("I'm so pumped")

});

$("#chocolate").click(function(){
	total2 = parseInt(total2, 10) + 1;
	console.log(total2);
	Cookies.set("chocolatecookies", total2);
});

$("#clearchocolate").click(function(){
	Cookies.expire("chocolatecookies");
	console.log("I'm so pumped")

});

$("#lemon").click(function(){
	total3 = parseInt(total3, 10) + 1;
	console.log(total3);
	Cookies.set("lemoncookies" , total3);
});

$("#clearlemon").click(function(){
	Cookies.expire("lemoncookies");
	console.log("I'm so pumped")

});

//Animations 

// var rotation = 0;

// jQuery.fn.rotate = function(degrees) {
//     $("#monstersugar").css({'-webkit-transform' : 'rotate('+ degrees +'deg)',

// };

// $('.rotate').click(function() {
//     rotation += 5;
//     $("#monstersugar").rotate(rotation);
// });
});




