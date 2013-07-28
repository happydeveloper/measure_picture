
function controller_img_tag() {
		//save measure_values
		var img = document.getElementById('measure_img');	
		
		img.addEventListener('click', trace, false);
}

function controller_btn_calibrate() {
	
		var calibarate = document.getElementById("calibrate_ruler");
		calibarate.addEventListener('click', get_two_point, false);
}

function controller_canvas_tag(){

              var canvas = document.getElementById('myCanvas');
 	      var context = canvas.getContext('2d');
	      var x = 0;
	      var y = 0;
	      var width = "377";
	      var height = "280";
	      var imageObj = new Image();

	      imageObj.onload = function() {
	      context.drawImage(imageObj, x, y, width, height);
	      };
      	     imageObj.src = 'FTO_AL2O3_TiCl_m003.jpg';
		
	     canvas.addEventListener('click', trace, false);
}
