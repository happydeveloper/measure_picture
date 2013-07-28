
	//객체지향적으로 변환 필요
	

	var flag = 0;
	// 클릭한 이후 두 점을 가져오는 함수
	var cr = [];
	

	//플래그를 셋팅한다.
	//칼리브레이션을 하고 있는 상태를 표시한다.
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

	//거리 계산 로직
	function distance_cal(x1, y1, x2, y2)
	{
		var result = Math.pow((x2-x1),2) + Math.pow((y2-y1),2);
		result = Math.sqrt(result); 	
		console.log("distence" + result);
	}

	//2560, 1920
	function Cal_ratio_img_win(actual_img_pixel_width, win_img_pixel_width)
	{
		return ratio_img_win = actual_img_pixel_width / win_img_pixel_width;
	}
	function wpxToipx(windows_pixcel_measure_distance, ratio_img_win){
		//actual image width pixel/canvas image width pixel
		result = this.ratio_img_win * windows_pixcel_measure_distance;
		document.getElementById("result_disply").innerHTML = "<p> 실제 사진 픽셀 거리는 :: "+ result + " 이다.</p>";
	}
     

     //실제 크기와 현재 이미지간에 비율을 구할 수 있다.
     //parameter 1 : 실제 측정 기준(자) 거리 
     //parameter 2 : 원도우 측정된 기준자 픽셀 거리
     //return : 실제 거리와 이미지간에 비율을 리턴
     function getRatio(actual_ruler_distance_val, windows_ruler_fixel_distance_val) {
		return ratio_actRul_winRul=actual_ruler_distance_val/windows_ruler_fixel_distance_val;
	}

	//실제 거리 구하기 = 원도우 필셀을 실제 거리로 환산
	//parameter 1 : 원도우 이미지와 실제 이미지이의 비율 
	//parameter 2 : 원도우에서 측정한 거리
	//return : 실제 거리
	function getWpxToApx(ratio_actRul_winRul, winPix ){
		return ratio_actRul_winRul * winPix;
	}
	




