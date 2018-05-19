(function($) {
  $(document).ready(function() {
    setTimeout(function() {
        $(document).trigger('afterready');
    }, 1000);
  });
  $(document).bind('afterready', function() {
    $("span.user-name").text(function () {
      return $(this).text().replace("Miles France", "Code Monkey");
    });
    $("span.sn-avatar-initials").text(function () {
      return $(this).text().replace("MF", "CM");
    });
    $("span.user-name").text(function () {
      return $(this).text().replace("Robert Schwander", "Wise Leader");
    });
    $("span.sn-avatar-initials").text(function () {
      return $(this).text().replace("BS", "WL");
    });
    $("span.ng-binding").text(function () {
      return $(this).text().replace("Pendulum", "TPS Report");
    });
    $("html.date-calendar body tr.no-records-found td").prepend("<img src='http://protitude.com/officespace.jpg' />");
    $("input#mon1").val('7.5');
    $("input#tue1").val('4');
    $("input#wed1").val('7.5');
    $("input#mon2").val('.5');
    $("input#wed2").val('.5');
    $( "button.btn-md" ).click(function() {
      $("input#mon2").val('.5');
      $("input#wed2").val('.5');
    });
  });
}(jQuery));

