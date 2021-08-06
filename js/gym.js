
$(function() {

  $(window).scroll(function () {
    $(".point,.effect-fade").each(function () {
      var elemPos = $(this).offset().top;                               //要素の位置を取得
      var scroll = $(window).scrollTop();                               //スクロール位置を取得
      var windowHeight = $(window).height();                            //画面幅を取得（画面の下側に入ったときに動作させるため)
      if (scroll > elemPos - windowHeight) {
        $(this).addClass("effect-scroll");
      }
    });
  });
  jQuery(window).scroll();


  $(".navIcon").click(function() {
    if($(this).hasClass("open") == false) {　　　　　　　　　//もしopenclassが付いてなかったら
      $(this).attr("src","gympic/Navclose.png");　　　　　　//attrでclose画像へ切替
    }else {　　　　　　　　　　　　　　　　　　　　　　　　　　//そうじゃない時は
      $(this).attr("src","gympic/Navopen.png");    　　　　//attrでopen画像へ切替
    }
    $(this).toggleClass("open");                          //.navIconに.open追加・削除
    $("#globalNav").toggleClass("sideOpen");　　　　　　　 //#globalNavに.sdeOpen追加・削除

  });


  $("#globalNav li,.navIcon").hover(function(){
    over_flg = true;
  }, function(){
    over_flg = false;
  });

  $('body').click(function() {
    if (over_flg == false) {
      $(".navIcon").attr("src","gympic/Navopen.png");
      $(".navIcon").removeClass("open");
      $("#globalNav").removeClass("sideOpen");
    }
  });


  $(window).on("resize", function() {
    var w = $(window).width();
    if(w > 769) {　　　　　　　　　　　　　　　　　　　　　　　　　　　//画面幅769pxより大きい時
      $(".navIcon").attr("src","gympic/Navopen.png");　　　　　　　//open画像へ切替
      $(".navIcon").removeClass("open");　　　　　　　　　　　　　　//.open削除
      $("#globalNav").removeClass("sideOpen");　　　　　　　　　　 //.sideOpen削除
    }
  });

});
