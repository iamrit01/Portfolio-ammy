$(window).scroll(function () {
  if ($(window).scrollTop() > 771 && $(window).scrollTop() < 1137) {
    $(".airplain_icon").css({
      top: $(window).scrollTop() - 781 + "px",
    });
  }

  if ($(window).scrollTop() > 1429 && $(window).scrollTop() < 1780) {
    $(".car_icon").css({
      top: $(window).scrollTop() - 1439 + "px",
    });
  }
});
