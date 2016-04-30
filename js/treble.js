/**
  CMU Treblemakers Website
  Copyright Derek Brown 2016
  All Rights Reserved
**/

/* CONTACT */
jQuery(document).ready(function($){
  $("#treble-contact-button").on("click",function(e){
      e.preventDefault();
      var arr = {
                    name: $("#name").val(),
                    email: $("#email").val(),
                    message: $("#message").val()
                };
      jQuery.post("contact.php",arr,function(data){
        if (data == "<MSG>SUCCESS</MSG>"){
          $("#contact .response").html('<div class="alert alert-success" role="alert"><b>Success!</b> You will hear back from us shortly.</div>');
        }
        else{
          $("#contact .response").html('<div class="alert alert-danger" role="alert"><b>Error.</b> Contact the webmaster at contact@cmutreblemakers.com</div>');
        }
      });
  });
});
