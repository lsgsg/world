$(document).ready(function(e) {



				
				

$('#area3hv1').hover(function(){
	$('#area3hv2').css({'opacity':1})
	});
$('#area3hv1').mouseleave(function(){
	$('#area3hv2').css({'opacity':0})
	});
	
$('#area2hv1').hover(function(){
	$('#area2hv2').css({'opacity':1})
	});
$('#area2hv1').mouseleave(function(){
	$('#area2hv2').css({'opacity':0})
	});

$('#area1hv1').hover(function(){
	$('#area1hv2').css({'opacity':1})
	});
$('#area1hv1').mouseleave(function(){
	$('#area1hv2').css({'opacity':0})
	});
	
	
 var angleone = 0;
setInterval(function(){
      angleone+=3;
     $("#area2>ul>li:nth-child(4)").rotate(angleone);
	 
},80)// 돌고래 회전

$("#area2>ul>li:nth-child(3)").css({transform:'scaleX(-1)'},500);


function foo() {
  
  setTimeout(foo, 15000);
  		

	

                var smogNum3 = 0;
				var interval3 = setInterval(function () {
				$("#area3>ul>li:nth-child(3)").find("img").attr('src', 'img/sgsmog' + (smogNum3+1) + '.png');
				smogNum3++
				if(smogNum3>=26){clearInterval(interval3)};
				},350) //스모그 커지는 애니메이션

};
foo();

function hell() {
  
  setTimeout(hell, 7000);
		$('#area1>ul>li:nth-child(4)').animate({width:'11.8vw',height:'7.75vh'},3000,function(){
				
				$(this).animate({width:'23.541666666666668vw',height:'15.5vh'},3000)
					});
};
hell(); //헬리콥터 움직임




function foo1() {
  
  setTimeout(foo1, 2000);

				$('#area1>ul>li:nth-child(5)').animate({top:'53vh'},1000,function(){
					$(this).animate({opacity:0},500,function(){
						$(this).animate({top:'40vh'},5,function(){
							$(this).animate({opacity:1})
							})
						})
	              
						
	
	})
};
foo1(); //미사일 움직임



		function foo3() {
  
  setTimeout(foo3, 12000);
	
			$('#area2>ul>li:nth-child(2)').animate({left:'40vw'},3000,function(){
				
				$('#area2>ul>li:nth-child(2)').css({transform:'scaleX(-1)'})
				$(this).animate({left:'54vw'},3000,function(){
					
					$(this).css({transform:'scaleX(1)'})
					$(this).animate({left:'40vw'},3000,function(){
						$(this).css({transform:'scaleX(-1)'})
						$(this).animate({left:'54vw'},3000,function(){
							$(this).css({transform:'scaleX(1)'})
							$(this).animate({left:'40vw'},3000,function(){
							$(this).css({transform:'scaleX(-1)'})
								
								})
							})
						})
					
					})
				});	
				
				
				$('#area2>ul>li:nth-child(6)').animate({left:'30vw'},3000,function(){
				
				
				$(this).animate({left:'44vw'},3000,function(){
					
				
					$(this).animate({left:'30vw'},3000,function(){
						
						$(this).animate({left:'44vw'},3000,function(){
							
							$(this).animate({left:'30vw'},3000,function(){

								
								})
							})
						})
					
					})
				});	 //북국곰 말풍선 움직임
					$("#arrow2").animate({left:'40vw'},3000,function(){
				
				
				$(this).animate({left:'60vw'},3000,function(){
					
				
					$(this).animate({left:'40vw'},3000,function(){
						
						$(this).animate({left:'60vw'},3000,function(){
							
							$(this).animate({left:'40vw'},3000,function(){

								
								})
							})
						})
					
					})
				});	 //북국곰 화살표 움직임
  
  };
foo3(); //북극곰 움직임


function foo2() {
  
  setTimeout(foo2, 1000);
	
			$('#area2>ul>li:nth-child(3)').animate({left:'52vw'},1000,function(){
				
				$('#area2>ul>li:nth-child(3)').css({transform:'scaleX(-1)'})
				$(this).animate({left:'53vw'},1000,function(){
					
					$(this).css({transform:'scaleX(1)'})
					$(this).animate({left:'52vw'},1000,function(){
						$(this).css({transform:'scaleX(-1)'})
						$(this).animate({left:'53vw'},1000,function(){
							$(this).css({transform:'scaleX(1)'})
							$(this).animate({left:'52vw'},1000,function(){

								
								})
							})
						})
					
					})
				});	
  
  };
  
foo2(); //물개 움직임


function foo4() {
  
  setTimeout(foo4, 25000);
	
			$('#area1>ul>li:nth-child(10)').animate({top:'15vh',left:'1vw'},5000,function(){
				$('#area1>ul>li:nth-child(10)').css({transform:'scaleY(-1)'})
				
				$(this).animate({top:'70vh',left:'2vw'},5000,function(){
					
					$(this).css({transform:'scaleY(1)'})
					$(this).animate({top:'15vh',left:'1vw'},5000,function(){
						$(this).css({transform:'scaleY(-1)'})
						$(this).animate({top:'70vh',left:'2vw'},5000,function(){
							$(this).css({transform:'scaleY(1)'})
							$(this).animate({top:'15vh',left:'1vw'},5000)
							})
						})
					
					})
				});	
				
				
				$('#area1>ul>li:nth-child(11)').animate({top:'5vh',left:'2vw'},5000,function(){
				
				
				$(this).animate({top:'60vh',left:'3vw'},5000,function(){
					
				
					$(this).animate({top:'5vh',left:'2vw'},5000,function(){
						
						$(this).animate({top:'60vh',left:'3vw'},5000,function(){
							
							$(this).animate({top:'5vh',left:'2vw'},5000,function(){

								
								})
							})
						})
					
					})
				});	 //난민 말풍선 움직임

			$("#arrow1").animate({top:'5vh',left:'2vw'},5000,function(){
				
				
				$(this).animate({top:'60vh',left:'3vw'},5000,function(){
					
				
					$(this).animate({top:'5vh',left:'2vw'},5000,function(){
						
						$(this).animate({top:'60vh',left:'3vw'},5000,function(){
							
							$(this).animate({top:'5vh',left:'2vw'},5000,function(){

								
								})
							})
						})
					
					})
				});	 //난민화살표
				
  
  };
foo4(); //난민배 움직임

function foo5() {
  
  setTimeout(foo5, 1500);

$('#penguin1').animate({top:'83vh'},function(){
	$(this).animate({top:'86vh'},100,'easeOutBounce')
	})
$('#penguin2').delay(300).animate({top:'83vh'},function(){
	$(this).animate({top:'86vh'},100,'easeOutBounce')
	})
$('#penguin3').delay(600).animate({top:'83vh'},function(){
	$(this).animate({top:'86vh'},100,'easeOutBounce')
	})	

  };
foo5(); //펭귄 움직임


  

function foo6() {
	setTimeout(foo6,26000)
$('#whale').css({'transform':'scaleX(-1)'})
$('#whale').animate({left:'10vw'},8000,function(){
	$(this).css({'transform':'scaleX(1)'})
	$(this).animate({left:'70vw'},8000,function(){
		$(this).css({'transform':'scaleX(-1)'})
		$(this).animate({left:'10vw'},8000)
		})
	})
};
foo6();//고래 움직임

  
  $('#texteft1').animate({top:'45.6vh'},function(){
	  $(this).animate({top:'48.6vh'},1000,'easeOutBounce')
	  });
  $('#texteft2').delay(300).animate({top:'44.7vh'},function(){
	  $(this).animate({top:'47.7vh'},1000,'easeOutBounce')
	  });
 
  $('#texteft4').delay(1500).animate({top:'42.2vh'},function(){
	  $(this).animate({top:'46.2vh'},1000,'easeOutBounce')
	  });
  $('#texteft5').delay(1800).animate({top:'42.6vh'},function(){
	  $(this).animate({top:'45.6vh'},1000,'easeOutBounce')
	  });

    $('#texteft8').delay(3000).animate({top:'58.1vh'},function(){
	  $(this).animate({top:'61.1vh'},1000,'easeOutBounce')
	  });
  $('#texteft9').delay(3300).animate({top:'57.6vh'},function(){
	  $(this).animate({top:'60.6vh'},1000,'easeOutBounce')
	  });
   $('#texteft10').delay(3600).animate({top:'58.4vh'},function(){
	  $(this).animate({top:'61.4vh'},1000,'easeOutBounce')
	  });
  $('#texteft11').delay(3900).animate({top:'63.3vh'},function(){
	  $(this).animate({top:'66.3vh'},1000,'easeOutBounce')
	  });
    $('#texteft12').delay(4200).animate({top:'58.4vh'},function(){
	  $(this).animate({top:'61.4vh'},1000,'easeOutBounce')
	  });
   $('#texteft7').delay(4600).animate({top:'47.4vh'},function(){
	  $(this).animate({top:'50.4vh'},1000,'easeOutBounce')
	  }); // 글씨 효과
	  



});