function navbarBurgerToggle() {
  $(".navbar-burger").click(function() {
    $(".navbar-burger").toggleClass("is-active");
    $(".navbar-menu").toggleClass("is-active");
  });
}

function navbarLinks() {
  var comp = location.host;

  $('a').each(function () {
    var link = undefined === $(this).attr('href') ? '' : $(this).attr('href');

    if (link != '' && link.indexOf(comp) <= -1 && link.length > 0) {
      if ($(this).text().trim().length == 0 || link.indexOf('javascript(') > -1) {
        return;
      }
  
      if (link.charAt(0) != '/' && link.charAt(0) != '#') {
        console.log(link);

        $(this).append('<sup><i class="fas fa-external-link-alt external-link"></i></sup>');
        $(this).attr('target', '_blank');
      }
    }
  });
}


$(function() {
  navbarBurgerToggle();
  navbarLinks();
});
