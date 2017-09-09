console.log('hey')
//var divToManipulate = document.getElementById('myDiv');
//divToManipulate.innerHTML = "Goodbye world!";

var $myDiv = $('#myDiv');
$myDiv.html("Goodbye world!");
$('#container').append("<p>").append("Hello simple insertion using jQuery chaining");
$("#myDiv").css("color", "red");
$('#myClass').append('<p>').append('masarfazarpamidor');
$(".myClass").css("color", "blue");
$('#myDiv').addClass('large-purple-text');