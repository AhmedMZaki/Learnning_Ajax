

  $.getJSON('http://localhost/Learnning_Ajax/response.json',function(data){
    let output = "<ul>";
    
    $.each(data,function(key,val){
     output += "<li>"+val.flightNumber+"</li>";
    });
    output +="</ul>";

    $("#update").append(output);
  });
