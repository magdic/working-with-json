function getUrlVariable(variable)
{
       var query = window.location.search.substring(1);
       var vars = query.split("&");
       for (var i=0;i<vars.length;i++) {
               var pair = vars[i].split("=");
               if(pair[0] == variable){return pair[1];}
       }
       return(false);
}
 var callUsername = getUrlVariable("taken");

(function() {

  var flickerAPI = "https://graph.facebook.com/"+callUsername; //this call has been deprecated
  $.getJSON( fbAPI, {
    format: "json"
  })
    .done(function( data ) {
        console.log(data);

        var userid = data.id;

        $('#fullname').text(data.name);
        $('#username').text(data.username);
        $('#idU').text(data.id);
        $('#gender').text(data.gender);
        $('#locale').text(data.locale);
        $('#about').text(data.about);

        var imgPaht = "https://graph.facebook.com/"+userid+"/picture?width=200&height=200";

        $('<img src="'+ imgPaht +'">').load(function() {
          $(this).appendTo('#images');
        })
    });
})();
