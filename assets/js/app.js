function anchorLinks() {
  const content = document.getElementsByClassName(".content");

  if (content) {
    const selectors = '.content h1, .content h2, .content h3, .content h4, .content h5, .content h6';

    anchors.options = {
      icon: '#'
    }
  
    anchors.add(selectors);
  }
}

document.addEventListener('DOMContentLoaded', (e) => {
  anchorLinks();
});
