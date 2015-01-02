$(document).ready(function(){

	var url = window.location.href;

	$('#navlist a').removeClass('currentlyActive');

	$('#navlist a').each(function(){
		if (url === "/" + this.href + "/"){
			$(this).addClass('currentlyActive');
		}
	});

});