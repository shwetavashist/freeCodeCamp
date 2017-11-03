$(document).ready(function() {
   $("#target1").css("color", "red");
    $("#target1").prop("disabled", true);
    $("#target4").remove();
$("#target5").clone().appendTo("#left-well");
$("#target1").parent().css("background-color","red");
  });