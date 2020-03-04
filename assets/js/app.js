function anchorLinks() {
  if ($('.content').length > 0) {
    const selectors = '.content h1, .content h2, .content h3, .content h4, .content h5, .content h6';

    anchors.options = {
      icon: '#'
    }
  
    anchors.add(selectors);
  }
}

function navbarBurger() {
  const burger = $(".navbar-burger"),
    menu = $(".navbar-menu");

  burger.click(() => {
    [burger, menu].forEach((el) => el.toggleClass('is-active'));
  });
}

function dropdownToggle() {
  const drop = $('.dropdown');

  if (drop) {
    drop.click(function() {
      $(this).toggleClass('is-active');
    });
  }
}

function calculateMaxWidth() {
  return $(window).width() - $('.navbar-brand').width() - $('.navbar-end').width();
}

function showHamburger() {
  return ($('.navbar-start').width() > calculateMaxWidth());
}

function toggleHamburger() {
  if (showHamburger()) {
    $('#event-dropdown').toggleClass('is-active');
    $('.navbar-start').hide();
  }
}

function menuDetect() {
  toggleHamburger();

  $(window).resize(function() {
    toggleHamburger();
  });
}

$(function() {
  anchorLinks();
  navbarBurger();
  dropdownToggle();
  menuDetect();
});
