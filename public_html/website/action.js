 $(document).ready(function() {
   // do stuff when DOM is ready
	$(".megaten-infopage").hide();
	$("#top").show();
	$(".megaten-links > li > a").click(function(event) {
     var divName = $(this).attr('href').substring(1);
	 $(".megaten-infopage").hide();
	 $("#" + divName).show();
   });
 });