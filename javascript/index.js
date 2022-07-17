$(window).scroll(function () {
  if ($(window).scrollTop() > 771 && $(window).scrollTop() < 1137) {
    console.log("testing inside top", $(window).scrollTop());
    $(".airplain_icon").css({
      top: $(window).scrollTop() - 781 + "px",
      // "margin-top": $(window).scrollTop() + "px",
      // "margin-left": $(window).scrollLeft() + "px",
    });
  }
  console.log("testing height", $(window).height());
});
