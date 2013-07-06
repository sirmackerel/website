 $(document).ready(function() {
   // do stuff when DOM is ready
	$(".balloon-sub").hide();
	$("#home").show();
	$(".balloon-links > li > a").click(function(event) {
     var divName = $(this).attr('href').substring(1);
	 $(".balloon-sub").hide();
	 $("#" + divName).show();
   });
 });