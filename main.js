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
	//Audio Controls

	var churilmudi = new Audio("songs/audio/Vaibhavam_Ninte_Churul_Mudiyil_-_Teekaapi_Offic.mp3");
	$('#churilmudiyilPlayButton').click(function(){
		churilmudi.play();
		$('#startTime').html('0.00');
		$('#endTime').html(String(Math.round((churilmudi.duration/60)*100)/100));
		$('#churilmudiProgress').attr('style','width:'+'0'+'%');
		setInterval(function(){
			var pro = (churilmudi.currentTime/churilmudi.duration)*100;
			$('#churilmudiProgress').attr('style','width:'+pro+'%');
			console.log(pro)
		}
		,500);
	});
	$('#churilmudiyilPauseButton').click(function(){
		churilmudi.pause();
		
	});
});