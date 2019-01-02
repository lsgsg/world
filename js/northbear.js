
$(document).ready(function(e) {
    



//메뉴 영역을 변수에 저장
	var nav=$('nav');
	//article영역을 box변수에 저장
	var box=$('article');
	//윈도우(브라우저)의 가로길이를 width변수에 저장
	var currentArticle=""; //resise 변수
	var width=$(window).width();
	//이벤트 맨 위에 변수 설정하면 모든 이벤트 안에서 이 변수 사용가능 , 각 article의 인덱스 번호를 저장할 변수 선언
	var num=0;
	//마우스 휠의 방향을 저장하는 변수
	var dir="up";
	//메뉴를 클릭하면 해당 article영역이 나옴
	nav.find('a').click(function(e){
		e.preventDefault();
		//클릭한 메뉴의 부모객체(li)의 인덱스번호를 변수에 저장
		num=$(this).parent().index();//인덱스번호가 0~나올수 있는 건 ul의 자식객체로서 좌르륵 있는 li만 가능함
		//각 article의 왼쪽 위치값을 left_pos에 저장
		
		var left_pos=num*width;
		//section이동
		$('section').stop().animate({
				'left':-left_pos
			},500,'easeInOutExpo');
			
			navFix(num);//메뉴고정


		});
		
										
		
		$(document).on('DOMMouseScroll mousewheel', function(e){
			if(e.originalEvent.detail >0 || e.originalEvent.wheelDelta < 0){
				dir="down";
				}else{dir="up";}
				/*num=-1;*/
				//article영역의 개수만큼 반복
				box.each(function(){
					
					if(num<0 && ($(this).offset().left>$(window).scrollLeft())){
						
						currentArticle=$(this);
						num=$(this).index();
						}
				});
						//마우스 휠을 위로 굴리면
						if(dir=="up" && num>0){num--;}
						//마우스 휠을 아래로 굴리면
						if(dir=="down" && num<box.length+1){num++;
							if(num>=box.length){ num=box.length-1;}
						}
						
								var left_pos=num*width;
								//section이동
								$('section').stop().animate({
										'left':-left_pos},500,'easeInOutExpo');
										
						//메뉴고정
						navFix(num);								
				$(window).resize(function(){					
				width=$(window).width();
				box.css('width',width);
				
				  if(currentArticle.offset().left >$(window).scrollLeft()){
					  $('section').stop().animate({
						  'left':num*width
						  },1000,'easeInOutExpo');
					  }
				});
				
			});// JavaScript Document
			
			});//ready end
			
			function navFix(num){
	var magic_left=0;
	var magic_width=0;
	$('nav ul li').each(function(){
		if(num==$(this).index()){$('nav ul li a').removeClass('active');
										 $(this).find('a').addClass('active');
										 magic_left=$(this).position().left;
										 magic_width=$(this).width();
										 
										 
										 }
		});
	};