$(document).ready(function(){

	$(".button-collapse").sideNav();
	$('.scrollspy').scrollSpy();
	$('.slider').slider({full_width: true});
	$('.material-card').materialCard({
		  icon_close: 'fa-chevron-left',
		  icon_open: 'fa-thumbs-o-up',
		  icon_spin: 'fa-spin-fast',
		  card_activator: 'click' // or hover
	});
	$('.tooltipped').tooltip({delay: 50});
});