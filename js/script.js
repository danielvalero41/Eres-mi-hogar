$(document).ready(function() {

		$('#libro').booklet({
			width:700,
			height:580,
			closed:true,
			covers:true,
			hoverWidth:80,
			pagePadding:0,

			auto:false,
			delay:2500
		});

		$('#anterior').click(function () {
			
			$('#libro').booklet("prev");

		});

		$('#siguiente').click(function () {
			
			$('#libro').booklet("next");

		});

		$('#boton').click(function () {
			
			$('#libro').booklet("gotopage",$('#campo').val());

		})

});
