let marker = document.querySelector('#indicator');
let nav = document.querySelector('nav');
let item = document.querySelectorAll('nav a');

nav.onclick = function() {
    marker.classList.toggle('change');
}

function indicator(e) {
    marker.style.left = e.offsetLeft + 'px';
    marker.style.width = e.offsetWidth + 'px';
    marker.style.display = 'block';
}
