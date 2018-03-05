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
    $("span.user-name").text(function () {
      return $(this).text().replace("Robert Schwander", "Wise Leader");
    });
    $("span.ng-binding").text(function () {
      return $(this).text().replace("MyTime", "TPS Report");
    });
    $("html.date-calendar body tr.no-records-found td").prepend("<img src='http://protitude.com/officespace.jpg' />");
    $("input#mon1").val('8');
    $("input#tue1").val('4');
    $("input#wed1").val('8');
  });
}(jQuery));

