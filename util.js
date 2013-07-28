
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

			coordinates.push({ x : pos_x ,y : pos_y});
			
			result.innerHTML = "";
			coordinates.forEach(function(coordinate){
				result.innerHTML += "<p> x 좌표 : "+coordinate.x +" y 좌표 : " +coordinate.y +"</p>"; 
			});
		if(event.currentTarget.id == "myCanvas"){
			var canvas = document.getElementById("myCanvas");
			draw_path(canvas, 0, 0, pos_x, pos_y); 
				}
			}
			else
			{//IE7이하에서 처리 로직

			}
	}

	//라인 그려주는 함수
	function draw_path(Pcanvas, x, y,  x1,  y1) 
	{
		var ca = Pcanvas;
		var context = ca.getContext('2d');
		
		context.beginPath();
		context.moveTo(x, y);

		context.lineTo(x1, y1);

		context.lineWidth = 5;
		context.strokeStyle = 'red';
		context.stroke();
	}
