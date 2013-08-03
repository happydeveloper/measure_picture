
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
		//두점간에 기준점을 측정한다.
			case 0:
				flag = 1;
				console.log('flag value state : '+flag);
				alert('click start point of ruller on Canvas');
			break;
			
			case 1:
				flag = 0;
			break;
		//측정한다.

			
			default:
				alert('Error : code 001, unvalid fail');
		}
		console.log('end function');	
	}

	//두 점간에 실제 점을 표시하도록 
	function get_two_point_actual() {
		console.log('entry function - get_two_point_actual');
		switch(flag)
		{
			case 2:
				flag = 3;
			break;
			case 3: 
				flag = 4;
			break;

			default:
				console.log('Error : code 002, uninvalid faile');
		}
		console.log('end function');
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
		var display_base = document.getElementById("ruller_base");
		display_base.value = result;

	
 		ratio_imgRul_winRul = Cal_ratio_img_win(2560, result);
	}

	//2560, 1920
	function Cal_ratio_img_win(actual_img_pixel_width, win_img_pixel_width)
	{
		document.getElementById("ruller_ration").value = actual_img_pixel_width / win_img_pixel_width;
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
	




