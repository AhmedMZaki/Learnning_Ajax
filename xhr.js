$(document).ready(function(){

  setTimeout(load_content, 2000);
  document.getElementById("discussions").addEventListener('change',get_replies);

  function load_content() {
    let request,results;
    let url = "http://localhost/Learnning_Ajax/new_content.php";
    let discussions = document.getElementById("discussions");

    if (window.XMLHttpRequest) {
      request = new XMLHttpRequest();
    } else {
      request = new ActiveXObject(Microsoft.XMLHTTP);
    }
  //  requestx.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
      request.open("GET",url,true);

      request.onreadystatechange = function() {
          if (request.readyState == 4 && request.status == 200) {
            results = JSON.parse(request.responseText);
            file_size = Object.keys(results).length;
            for (var i = 0; i < file_size; i++) {
              var option = document.createElement("option");
              option.value = results[i].id;
              option.innerHTML = results[i].title;
              document.getElementById("discussions").appendChild(option);
            }
      }
    };
      request.send();
  }

      function get_replies()
      {
        let discussions = document.getElementById("discussions");
        let id = discussions.options[discussions.selectedIndex].value;
        var requestx,resultsx;
        if (window.XMLHttpRequest) {
          requestx = new XMLHttpRequest();
        } else {
          requestx = new ActiveXObject(Microsoft.XMLHTTP);
        }

        var replies = document.getElementById("replies");
        var url = "http://localhost/Learnning_Ajax/new_content.php?id=" + id;
      //  requestx.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
          requestx.open("GET",url,true);

          requestx.onreadystatechange = function() {
          if (requestx.readyState == 4 && requestx.status == 200) {
            resultsx = JSON.parse(requestx.responseText);
           filex_size = Object.keys(resultsx).length;
          if (resultsx !=null ||resultsx != "") {
            replies.style.visibility = "visible";
            replies.addEventListener('change',show_replies);
            for (var i = 0; i < filex_size; i++) {
              let option = document.createElement("option");
              option.id = resultsx[i].id;
              option.title = resultsx[i].id;
              option.value = resultsx[i].content;
              option.innerHTML = resultsx[i].content;
              document.getElementById("replies").append(option);
            }
          }

            }
          };
          requestx.send();

      }


   function show_replies() {
     let replies = document.getElementById("replies");
     let text = replies.options[replies.selectedIndex].innerHTML;
     alert(text);
  }


});
