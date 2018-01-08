$(function(){
	$('.btn_menu').on('click',function(){
		$('.darkWrap').addClass('cover');
		$('.sideMenu').animate({left:'0'});	
	})
	$('.btnClose').on('click',function(){
		$('.cover').removeClass('cover');
		$('.sideMenu').animate({left:'-63%'})
	})


	$('#id_help').click(function(){
		$(this).next('ul').slideToggle('500');
	})
	$('.sideMenu>ul>li>a').not('#id_help').click(function(){
		$('.cover').removeClass('cover');
		$('.sideMenu').animate({left:'-63%'})
	})
	
	//거래내역 및 상세 화면
	 $('.all .select').on('click',function(){
	 	$(this).toggleClass('down');	
	 	$(this).next('ul').slideToggle();
	 })	 

	 //코인보내기
	// $('#send_coin .account .selectbox .first ').click(function(){
	// 	$(this).toggleClass('down');
	//  	$('#send_coin .account .selectbox li').not(this).slideToggle();
 // 	});
 // 	$('#send_coin .fee .selectbox .first').click(function(){
 // 		$(this).toggleClass('down');
	//  	$('#send_coin .fee .selectbox li').not(this).slideToggle();
	//  });

 	//코인받기
 	$('#receive_coin .account .first').click(function(){
	 	$('#receive_coin .account .selectbox').slideToggle();
	 	$(this).toggleClass('down');
	 });

 	//코인보내기
 	 $('#send_coin .account .first').click(function(){
	  	$('#send_coin .account .selectbox').slideToggle();
	  	$(this).toggleClass('down');
	  });

 	 $('#send_coin .fee .first').click(function(){
	  	$('#send_coin .fee .selectbox').slideToggle();
	  	$(this).toggleClass('down');
	  });
 	

 	

	
	
});