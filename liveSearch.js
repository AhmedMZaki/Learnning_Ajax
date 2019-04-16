$("#search").keyup(function () {
  let searchField = $("#search").val();
  let myEXP = new RegExp(searchField,"i");
    $.getJSON('http://localhost/Learnning_Ajax/data.json',function(data){
      output = '<ul class="searchresults">';
      $.each(data,function(key,val){
        if ((val.name.search(myEXP)) != -1 || (val.bio.search(myEXP)) != -1) {
          output +='<li>';
          output += '<h2>'+val.name+'</h2>';
          output +='<img src="images/'+val.shortname+'_tn.jpg" alt="'+val.name+'">';
          output +='<p>'+val.bio+'</p>';
          output +='</li>';
        }

      });
      output += '</ul>';
      $("#update").html(output);



    });


});
