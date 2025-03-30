$(".menu-btn").click(function () {
  $(this).toggleClass('active');
  $("#g-nav").toggleClass('panelactive');//
});

$("#g-nav a").click(function () {//ナビゲーションのリンクがクリックされたら
  $(".menu-btn").removeClass('active');//ボタンの activeクラスを除去し
  $("#g-nav").removeClass('panelactive');//ナビゲーションのpanelactiveクラスを除去し
});