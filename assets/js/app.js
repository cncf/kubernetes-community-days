{{ $home := .IsHome }}

{{ if not $home }}
function anchorLinks() {
  const selectors = '.content h1, .content h2, .content h3, .content h4, .content h5, .content h6';

  anchors.options = {
    icon: '#'
  }

  anchors.add(selectors);
}
{{ end }}

function navbarBurgerToggle() {
  $(".navbar-burger").click(function() {
    $(".navbar-burger").toggleClass("is-active");
    $(".navbar-menu").toggleClass("is-active");
  });
}

function navbarLinks() {
  const host = window.location.hostname;

  $('a').each(function () {

    const link = undefined === $(this).attr('href') ? '' : $(this).attr('href');

    if (link && link.includes('//') && !link.includes(host)) {
      $(this).append('<sup><i class="fas fa-external-link-alt external-link"></i></sup>');
      $(this).attr('target', '_blank');
    }
  });
}


$(function() {
  navbarBurgerToggle();
  navbarLinks();
  {{ if not $home }}
  anchorLinks();
  {{ end }}
});
