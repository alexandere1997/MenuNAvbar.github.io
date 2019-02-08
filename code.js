$(document).ready(function () {
  $(".menu-toogle").click(function() {
    $(".menu-toogle").toggleClass('active');
    $("nav").toggleClass('active');
  });
});