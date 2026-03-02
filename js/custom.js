(function ($) {
  "use strict";

  // NAVBAR
  $(".navbar-nav .nav-link").click(function () {
    $(".navbar-collapse").collapse("hide");
  });

  // Handle navbar toggle with Bootstrap collapse events
  $("#navbarNav").on("show.bs.collapse", function () {
    // Menu is opening - only hide logo, don't move anything
    $(".navbar-brand").addClass("hide-logo");
  });

  $("#navbarNav").on("hidden.bs.collapse", function () {
    // Menu is closed - show logo again
    $(".navbar-brand").removeClass("hide-logo");
  });

  function evaluateMenuImageQuality(img) {
    var wrap = img.closest(".menu-image-wrap");
    if (!wrap || !img.naturalWidth || !img.naturalHeight) return;

    var wrapWidth = wrap.clientWidth;
    var wrapHeight = wrap.clientHeight;
    if (!wrapWidth || !wrapHeight) return;
    var isLowRes =
      img.naturalWidth < wrapWidth || img.naturalHeight < wrapHeight;

    img.classList.toggle("menu-image-low-res", isLowRes);
    wrap.classList.toggle("menu-image-wrap-low-res", isLowRes);
  }

  function initMenuImageFallback() {
    var menuImages = document.querySelectorAll(".menu-image-wrap .menu-image");
    if (!menuImages.length) return;

    function refreshAll() {
      menuImages.forEach(function (img) {
        evaluateMenuImageQuality(img);
      });
    }

    menuImages.forEach(function (img) {
      if (img.complete) {
        evaluateMenuImageQuality(img);
      } else {
        img.addEventListener("load", function () {
          evaluateMenuImageQuality(img);
        });
      }
    });

    window.addEventListener("load", refreshAll);
    window.addEventListener("resize", refreshAll);
  }

  initMenuImageFallback();
})(window.jQuery);
