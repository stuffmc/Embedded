$(function(){
	$('.download a:first').before('<video controls="" width="100%"><source src="'+$(".download a").attr("href")+'" type="video/mp4"></video><br />');
});