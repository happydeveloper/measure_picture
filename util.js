
	var flag = 0;
	// 클릭한 이후 두 점을 가져오는 함수
	var cr = [];
	function get_two_point() {
		console.log('entry funcion');
		switch(flag) 
		{
			case 0:
				flag = 1;
				console.log('flag value state : '+flag);
				alert('click start point of ruller on Canvas');
			break;
			
			case 1:
				flag = 0;
			break;
				
			default:
				alert('Error : code 001, unvalid fail');
		}
		console.log('end function');	
	}

	function trace(event)
	{
			if(event.currentTarget.addEventListener){
			// W3C DOM
			var x = event.pageX, y = event.pageY;
			console.log(x-event.currentTarget.offsetLeft);
			console.log(y-event.currentTarget.offsetTop);
			
			pos_x = x-event.currentTarget.offsetLeft;
			pos_y = y-event.currentTarget.offsetTop;
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
	//점 찌기
	function draw_point(Pcanvas, x, y, r)
	{
		var canvas = Pcanvas;
		var context = canvas.getContext("2d");
		
		context.beginPath();
		context.arc(x, y, r, 0, 2 * Math.PI, false);
		context.fillStyle = 'red';
		context.fill();
		context.lineWidth=1;
		context.strokeStyle = '#ffffff';
		context.stroke();
	}

	//라인 그려주는 함수
	function draw_path(Pcanvas, x, y,  x1,  y1) 
	{
		var ca = Pcanvas;
		var context = ca.getContext('2d');
		
		context.beginPath();
		context.moveTo(x, y);

		context.lineTo(x1, y1);

		context.lineWidth = 0.5;
		context.strokeStyle = 'red';
		context.stroke();
	}

	function distance_cal(x1, y1, x2, y2)
	{
		var result = Math.pow((x2-x1),2) + Math.pow((y2-y1),2);
		result = Math.sqrt(result); 	
		console.log("distence" + result);
	}
