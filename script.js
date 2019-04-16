

  let request;
  if (window.XMLHttpRequest) {
    request = new XMLHttpRequest();
  } else {
    request = new ActiveXObject(Microsoft.XMLHTTP);
  }
  request.open('GET','response.json',false);
  request.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
         var flights = JSON.parse(request.responseText);
         var outputs = "<ul>";
         for(var key in flights)
         {
           outputs += "<li> flight number---->"+" "+flights[key].flightNumber+"---/---"+"status"+"--->"+flights[key].status+""+"</li>";
         }
         outputs +="</ul>";
         document.getElementById('update').innerHTML = outputs;
         console.log(flights);
         }
      };

    request.send();
