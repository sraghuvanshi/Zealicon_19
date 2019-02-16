$(document).ready(function() {
    var colorOrig=$("#about1").css('fill');
    $("#about").hover(
    function() {
        //mouse over
        $("#about1").css('fill', '#f9bd18')
    }, function() {
        //mouse out
        $("#about1").css('fill', colorOrig)
    });

      var colorOrig2=$("#about2").css('stroke');
    $("#about").hover(
    function() {
        //mouse over
        $("#about2").css('stroke', '#f9bd18')
    }, function() {
        //mouse out
        $("#about2").css('stroke', colorOrig2)
    });

      var colorOrig=$("#about3").css('stroke');
    $("#about").hover(
    function() {
        //mouse over
        $("#about3").css('stroke', '#f9bd18')
    }, function() {
        //mouse out
        $("#about3").css('stroke', colorOrig)
    });
      var colorOrig=$("#about4").css('stroke');
    $("#about").hover(
    function() {
        //mouse over
        $("#about4").css('stroke', '#f9bd18')
    }, function() {
        //mouse out
        $("#about4").css('stroke', colorOrig)
    });
});
