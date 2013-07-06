 $(document).ready(function() {
   // do stuff when DOM is ready
	$(".megaten-infopage").hide();
	$("#top").show();
	$("table.megaten-links td").click(function(event) {
	   var divName = $(this).find('a').attr('href').substring(1);
	   $(".megaten-infopage").hide();
	   $("#" + divName).show();
	});
 });