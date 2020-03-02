function anchorLinks() {
  if ($('.content')) {
    const selectors = '.content h1, .content h2, .content h3, .content h4, .content h5, .content h6';

    anchors.options = {
      icon: '#'
    }
  
    anchors.add(selectors);
  }
}

function navbarBurgerToggle() {
  $(".navbar-burger").click(function() {
    $(".navbar-burger").toggleClass("is-active");
    $(".navbar-menu").toggleClass("is-active");
  });
}

$(function() {
  anchorLinks();
  navbarBurgerToggle();
});
