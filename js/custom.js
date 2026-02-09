
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
})(window.jQuery);
