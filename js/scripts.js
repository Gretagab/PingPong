$(document).ready(function() {
  $("#submit").click(function() {
    var destination = $("#paris");
    if ($("#temperature1").prop('checked')) {
      destination = $("#namibia");
    } if ($("#fancy").prop('checked') && $("#familiar").prop('checked')) {
      destination = $("#westcoast");

    } else if ($("#plane-food").prop('checked')) {
      destination = $("#westcoast");
    }

    alert(destination.text());
  });
})
