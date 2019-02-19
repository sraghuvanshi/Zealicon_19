window.onload = function(){
 var isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
    if(!isChrome){
      $('#iframeAudio').remove()
    }
  else{
     $('#playAudio').remove() /
  }
}


 window.onload= myRotation(); 
  function myRotation() {
    setTimeout(function(){
      var element = document.getElementById("animation");
      element.classList.remove("image");
    }, 2000);
  }
 $(document).ready(function() {
  //about
  var colorOrig=$("#about1").css('fill');
  $("#about").hover(
    function() {
        //mouse over
        $("#about").css('cursor', 'hand')
        $("#about1").css('fill', '#f9bd18')
        $("#about2").css('stroke', '#f9bd18')
        $("#about3").css('stroke', '#f9bd18')
        $("#about4").css('stroke', '#f9bd18')
      }, function() {
        //mouse out
        $("#about1").css('fill', colorOrig)
        $("#about2").css('stroke', colorOrig)
        $("#about3").css('stroke', colorOrig)
        $("#about4").css('stroke', colorOrig)
      });
    //team
    var colorOrig=$("#team1").css('fill');
    $("#team").hover(
      function() {
        //mouse over
        $("#team").css('cursor', 'hand')
        $("#team1").css('fill', '#f9bd18')
        $("#team2").css('stroke', '#f9bd18')
        $("#team3").css('stroke', '#f9bd18')
        $("#team4").css('stroke', '#f9bd18')
      }, function() {
        //mouse out
        $("#team1").css('fill', colorOrig)
        $("#team2").css('stroke', colorOrig)
        $("#team3").css('stroke', colorOrig)
        $("#team4").css('stroke', colorOrig)
      });

    //events
    var colorOrig=$("#events1").css('fill');
    $("#events").hover(
      function() {
        //mouse over
        $("#events").css('cursor', 'hand')
        $("#events1").css('fill', '#f9bd18')
        $("#events2").css('stroke', '#f9bd18')
        $("#events3").css('stroke', '#f9bd18')
        $("#events4").css('stroke', '#f9bd18')
      }, function() {
        //mouse out
        $("#events1").css('fill', colorOrig)
        $("#events2").css('stroke', colorOrig)
        $("#events3").css('stroke', colorOrig)
        $("#events4").css('stroke', colorOrig)
      });

    // //register
    // var colorOrig=$("#register1").css('fill');
    // $("#register").hover(
    //   function() {
    //     //mouse over
    //     $("#register").css('cursor', 'hand')
    //     $("#register1").css('fill', '#f9bd18')
    //     $("#register2").css('stroke', '#f9bd18')
    //     $("#register3").css('stroke', '#f9bd18')
    //     $("#register4").css('stroke', '#f9bd18')
    //   }, function() {
    //     //mouse out
    //     $("#register1").css('fill', colorOrig)
    //     $("#register2").css('stroke', colorOrig)
    //     $("#register3").css('stroke', colorOrig)
    //     $("#register4").css('stroke', colorOrig)
    //   });

    //Reach
    var colorOrig=$("#team1").css('fill');
    $("#reach").hover(
      function() {
        //mouse over
        $("#reach").css('cursor', 'hand')
        $("#reach1").css('fill', '#f9bd18')
        $("#reach2").css('stroke', '#f9bd18')
        $("#reach3").css('stroke', '#f9bd18')
        $("#reach4").css('stroke', '#f9bd18')
      }, function() {
        //mouse out
        $("#reach1").css('fill', colorOrig)
        $("#reach2").css('stroke', colorOrig)
        $("#reach3").css('stroke', colorOrig)
        $("#reach4").css('stroke', colorOrig)
      });
//Sponsors
var colorOrig=$("#team1").css('fill');
$("#sponsors").hover(
  function() {
        //mouse over
        $("#sponsors").css('cursor', 'hand')
        $("#sponsors1").css('fill', '#f9bd18')
        $("#sponsors2").css('stroke', '#f9bd18')
        $("#sponsors3").css('stroke', '#f9bd18')
        $("#sponsors4").css('stroke', '#f9bd18')
      }, function() {
        //mouse out
        $("#sponsors1").css('fill', colorOrig)
        $("#sponsors2").css('stroke', colorOrig)
        $("#sponsors3").css('stroke', colorOrig)
        $("#sponsors4").css('stroke', colorOrig)
      });
});
function mute() {
        if ($('#audio')[0].muted) {
            $('#audio')[0].muted = false;
            $(".sound_image").attr("src", "img/music-on.svg");
        } else {
            $('#audio')[0].muted = true;
            $(".sound_image").attr("src", "img/music-off.svg");
        }
    }
 function eventpage(){
        window.location="/events"
      }
function myFunction() {
  // Get the snackbar DIV
  var x = document.getElementById("snackbar");

  // Add the "show" class to DIV
  x.className = "show";

  // After 3 seconds, remove the show class from DIV
  setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
}


