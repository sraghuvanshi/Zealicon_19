 window.onload= myRotation(); 
  function myRotation() {
    setTimeout(function(){
      var element = document.getElementById("animation");
      element.classList.remove("image");
    }, 2000);
  }
// $(document).ready(function(){
//         $('#audio')[0].play();
//     });
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

    //register
    var colorOrig=$("#register1").css('fill');
    $("#register").hover(
      function() {
        //mouse over
        $("#register").css('cursor', 'hand')
        $("#register1").css('fill', '#f9bd18')
        $("#register2").css('stroke', '#f9bd18')
        $("#register3").css('stroke', '#f9bd18')
        $("#register4").css('stroke', '#f9bd18')
      }, function() {
        //mouse out
        $("#register1").css('fill', colorOrig)
        $("#register2").css('stroke', colorOrig)
        $("#register3").css('stroke', colorOrig)
        $("#register4").css('stroke', colorOrig)
      });

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
            $(".sound_image").attr("src", "../img/music-on.svg");
        } else {
            $('#audio')[0].muted = true;
            $(".sound_image").attr("src", "../img/music-off.svg");
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
function myFunction2() {
  //  var x = document.getElementById("snackbar2");

  // // Add the "show" class to DIV
  // x.className = "show";

  // // After 3 seconds, remove the show class from DIV
  // setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
  window.location="http://register.zealicon.in"
}


var check = function() {
  if (document.getElementById('psd').value ==
    document.getElementById('cnfpsd').value) {
    document.getElementById('message').style.color = 'green';
    document.getElementById('message').innerHTML = 'Matching';
  } else {
    document.getElementById('message').style.color = 'red';
    document.getElementById('message').innerHTML = 'Not matching';
  }
}
var loginResponse = function(){
    var data = JSON.parse(this.response);
    if((data.response == '200_1') || (data.response == 'Already logged in.')){
        window.location.href = 'http://register.zealicon.in/campusambassador';
    }
    else if((data.response == '200_2') || (data.response == 'Already logged in.')){
      window.location.href = 'http://register.zealicon.in/zealicon';
    }
}
// var signupResponse = function(){
//     var data = JSON.parse(this.response);
//     if(data.response == 'user created'){
//         window.location.href = 'http://register.zealicon.in/login';
//     }
//     console.log(data);
// }
var loginSubmit = function(){
    var data =  JSON.stringify({username:document.getElementById('loginUsername').value,password:document.getElementById('loginPassword').value,token:'zealog476'});
    var http = new XMLHttpRequest();
    http.withCredentials = true;
    http.open('POST', 'http://register.zealicon.in/login', true);
    http.addEventListener('load',loginResponse);
    http.send(data);
}
// var signupSubmit = function(){
//     var data =  JSON.stringify({first_name:document.getElementById('firstName').value,last_name:document.getElementById('lastName').value,email:document.getElementById('email').value,username:document.getElementById('username').value,password:document.getElementById('psd').value,college:document.getElementById('college').value,contact:document.getElementById('phoneNumber').value,token:'signpo354'});
//     var http = new XMLHttpRequest();
//     http.withCredentials = true;
//     http.open('POST', 'http://register.zealicon.in/signup', true);
//     http.addEventListener('load',signupResponse);
//     http.send(data);
// }
