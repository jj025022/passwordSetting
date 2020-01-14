$("#score").on("keyup change",function () {
    let score= $(this).val();
        let sl= score.length;

      if(sl<=0){
          $(".info").html("密碼強度： ");
          $(".info").css('color','#333333');
      }else if(sl>0 && sl<=6){
          $(".info").html("密碼強度：弱");
          $(".info").css('color','red');
      }else if(sl>6 && sl<=10){
          $(".info").html("密碼強度：中");
          $(".info").css('color','blue');
      }else if(sl>10){
          $(".info").html("密碼強度：強");
          $(".info").css('color','green');
      }    
});

  $("#pwd_btn").on('click',function(){
      if($('#score').attr('type') == 'password'){
          $('#score').attr('type','text')
          $(this).text('顯示密碼')
          $(this).css('background-color','#333333')
      }else{
          $('#score').attr('type','password')
          $(this).text('隱藏密碼')
          $(this).css('background-color','#cccccc')
      }
  })