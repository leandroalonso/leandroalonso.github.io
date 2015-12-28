document.getElementById('menu-toggle').addEventListener('click', function() {
  if (this.className == 'close') {
    this.className = '';
    document.getElementById('menu').style.visibility = 'hidden'
    document.getElementById('menu').style.opacity = '0'
  } else {
    this.className = 'close';
    document.getElementById('menu').style.visibility = 'visible'
    document.getElementById('menu').style.opacity = '1'
  }
}, false);
