function loadDoc() {

            var xhttp;
          if (window.XMLHttpRequest) {
          // code for modern browsers
          xhttp = new XMLHttpRequest();
          } else {
          //
          xhttp = new ActiveXObject("Microsoft.XMLHTTP");
          }

        xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
         document.getElementById("demo").innerHTML = this.responseText;
        }
        };
        xhttp.open("GET", "Posts.json", true);
        xhttp.send();
}
