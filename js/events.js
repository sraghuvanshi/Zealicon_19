window.onload= function(){
  var id =localStorage.getItem('id');
  console.log(id);
  if(id==1){
    document.getElementById("event_head").innerHTML="Coloralo"
  }
  if(id==2){
    document.getElementById("event_head").innerHTML="Mechavoltz"
  }
  if(id==3){
    document.getElementById("event_head").innerHTML="Play It On"
  }
  if(id==4){
    document.getElementById("event_head").innerHTML="Robotiles"
  }
  if(id==5){
    document.getElementById("event_head").innerHTML="Z-Wars"
  }
  if(id==6){
    document.getElementById("event_head").innerHTML="Coderz"
  }
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var data = JSON.parse(this.responseText);
      console.log(data);
      data.data.map(function(item){
        $("#side_event").append('<li><a onclick=get_description(this.id) id='+item.id+'>'+item.name+'</a></li>');
        // document.getElementById(item.id).onclick=get_description(item.id);
        // console.log(item.name);
      })
    }
  };
  console.log(id);
  xhttp.open("GET", "http://backoffice.zealicon.in/api/event/category/"+id, true);
  xhttp.send();
  }

  function get_description(id)
  {
  
    console.log(id);
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var data = JSON.parse(this.responseText);
      console.log(data.data);
      document.getElementById("description").innerHTML=data.data.description;
      
    }
  };
  xhttp.open("GET", "http://backoffice.zealicon.in/api/event/"+id, true);
  xhttp.send();
  }
