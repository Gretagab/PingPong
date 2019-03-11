$(document).ready(function() {
  $("form.form-inline").submit(function(event) {
    event.preventDefault();
    var number = parseInt($("input.inputNumber").val());
    var result = pingPong(number);
    $("#result").text(result);
  });
});

var pingPong = function(number) {
  if (number % 15 === 0) {
    return "pingpong";
  }

  if (number % 5 === 0) {
    return "pong";
  }

  if (number % 3 === 0) {
    return "ping";
  }

  var result = '';
  for (var index=1; index <= number; index++) {
    result += index + ",";
  }
  return result;

};
