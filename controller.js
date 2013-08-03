function trace(event){
			if(event.currentTarget.addEventListener){
			// W3C DOM
			var x = event.pageX, y = event.pageY;
			console.log(x-event.currentTarget.offsetLeft);
			console.log(y-event.currentTarget.offsetTop);
			
			pos_x = x-event.currentTarget.offsetLeft;
			pos_y = y-event.currentTarget.offsetTop;
			
//로직의 분리 필요
			var result = document.getElementById('result');

			if(flag == 1){
				if(cr.length == 2)
				{
					cr = []; //array flush
					controller_canvas_tag();
					setTimeout(function() {
						console.log("delay 200ms");
					var canvas = document.getElementById("myCanvas");
					//draw_path(canvas, 0, 0, pos_x, pos_y); 
					draw_point(canvas, pos_x, pos_y, 2);	
					}, 200);
				}

				cr.push({x : pos_x, y:pos_y});

				if(event.currentTarget.id == "myCanvas"){
					
					var canvas = document.getElementById("myCanvas");
					//두 점이 찍히면 그 때 점을 그은
					if(cr.length == 2)
						draw_path(canvas, cr[0].x, cr[0].y, cr[1].x, cr[1].y); 

					draw_point(canvas, pos_x, pos_y, 2);
					
					
				}
				else
				{//IE7이하에서 처리 로직

				}		
				
				if(cr.length == 2) {
					console.log(cr[0]);
					console.log(cr[1]);
					distance_cal(cr[0].x, cr[0].y, cr[1].x, cr[1].y);
				}
			}

			coordinates.push({ x : pos_x ,y : pos_y});
			
			result.innerHTML = "";
			coordinates.forEach(function(coordinate){
				result.innerHTML += "<p> x 좌표 : "+coordinate.x +" y 좌표 : " +coordinate.y +"</p>"; 
			});
		if(event.currentTarget.id == "myCanvas"){
			var canvas = document.getElementById("myCanvas");
			//draw_path(canvas, 0, 0, pos_x, pos_y); 
				}
			}
			else
			{//IE7이하에서 처리 로직

			}
	}


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
      	  imageObj.src = './img/FTO_AL2O3_TiCl_m003.jpg';
		
	     canvas.addEventListener('click', trace, false);
}
