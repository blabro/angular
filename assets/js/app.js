$( document ).ready(function() {
  $(window).on('load scroll', function () {
    let scrolled = $(this).scrollTop();
    $('#myVideo').css('transform', 'translate3d(0, ' + -(scrolled * 0.6) + 'px, 0)');
    $('#header').css({
      'transform': 'translate3d(0, ' + -(scrolled * 0.2) + 'px, 0)', // parallax (20% scroll rate)
      'opacity': 1 - scrolled / 400 // fade out at 400px from top
    });
  });


  $(window).scroll(function () {
  let s = $(window).scrollTop(),
        d = $(document).height(),
        c = $(window).height();
        scrollPercent = (s / (d-c)) * 100;
   $("#progressbar").attr('value', scrollPercent).css({'opacity': 0.8});
    
  });

  $("a[routerLink='home']").click(function() {
    $("img").addClass('animated hinge slow');
    setTimeout(function () {
      location.reload();
    }, 2000);
    //$("html, body").animate({ scrollTop: 0 }, "slow");
  });
  $("a[routerLink='footer']").click(function() {
    $("html, body").animate({ scrollTop: $(document).height() }, "slow");
  });

  animatescrollandbounceInUp("a[routerLink='contact']", ".contact");
  animatescrollandbounceInUp("a[routerLink='experience']", ".experience");
  animatescrollandbounceInUp("a[routerLink='studies']", ".studies");
  animatescrollandbounceInUp("a[routerLink='skills']", ".skills");
  animatescrollandbounceInUp("a[routerLink='hobbies']", ".hobbies");
});

function animatescrollandbounceInUp(hrefName, className) {
  $(hrefName).click(function() {
    $("html, body").animate({ scrollTop: $(className).position().top }, "slow");
    setTimeout(function () {
      $(className).addClass('animated bounceInUp');
    }, 200);
    //$(className).removeClass('animated bounceInUp');
  });
};

//let loadingTimeout;

function animateLoading() {
  loadingTimeout = setTimeout(showPage, 500);
}

function showPage() {
  $("html, body").animate({ scrollTop: 0 }, "slow");
  document.getElementById("loadersmall").style.display = "none";
  document.getElementById("overlay").style.display = "block";
}
