$(document).ready(() => {
  //    Start Header Section
  //    Start Banner Section
  $(".carousel").carousel({
    interval: 3000,
  });
  //    End Banner Section
  //    End Header Section

  //   Start Info Section

  $(window).scroll(function () {
    let getscrollpoint = $(this).scrollTop();
    console.log(getscrollpoint);

    if (getscrollpoint >= 300) {
      $(".infotexts").addClass("fromlefts");
      $(".infopics").addClass("fromrights");
    } else {
      $(".infotexts").removeClass("fromlefts");
      $(".infopics").removeClass("fromrights");
    }
  });

  //   End Info Section

  // Start Premises Section
  $("#lightslider").lightSlider({
    auto: true,
    pauseOnHover: true,
    item: 4,
    loop: true,
    slideMove: 1,
    speed: 600,
  });
  // End Premises Section

  // Start Pricing Section
  $(window).scroll(function () {
    let getscroll = $(this).scrollTop();
    console.log(getscroll);

    if (getscroll >= 2442) {
      $(".cardone").addClass("movelefts");
      $(".cardtwo").addClass("movebottoms");
      $(".cardthree").addClass("moverights");
    } else {
      $(".cardone").removeClass("movelefts");
      $(".cardtwo").removeClass("movebottoms");
      $(".cardthree").removeClass("moverights");
    }
  });
  // End Pricing Section

  // Start Join Us Section
  $("#accordion").accordion();
  // End Join Us Section

  // Start Footer Section
  $("#getyear").text(new Date().getUTCFullYear());
  // End Footer Section

  // Start Progress
  $(window).scroll(function () {
    var getprogress = $("#progresses");
    var getprogressval = $("#progressvalues");

    var getscrolltop = $(this).scrollTop();
    // console.log(getscrolltop);

    var getscrollheight = $(document).height();
    var getclientheight = $(window).height();
    var calcheight = getscrollheight - getclientheight;
    var getfinalheight = Math.round((getscrolltop * 100) / calcheight);

    getprogressval.text(`${getfinalheight}%`);

    getprogress.css({
      background: `conic-gradient(steelblue ${getfinalheight}%, #eee ${getfinalheight}%)`,
    });
  });
  // End Progress
});
