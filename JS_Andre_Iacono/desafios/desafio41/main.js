let sizeW = Math.random() * 3;

function stripes() {
    let e = document.createElement('div');
    e.classList.add('lines');
    document.body.appendChild(e);
    e.style.left = Math.random() * innerWidth + 'px';
    e.style.width = sizeW + 'px';

    setTimeout(function() {
        document.body.removeChild(e)
    }, 2000)
}

setInterval(function() {
    stripes()
}, 20);