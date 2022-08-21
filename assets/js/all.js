"use strict";

jQuery(function () {
  $('.ham-icon').on('click', function (e) {
    e.preventDefault();
    $('.dropdown').toggleClass('active');
  });
  AOS.init();
});
//# sourceMappingURL=all.js.map
