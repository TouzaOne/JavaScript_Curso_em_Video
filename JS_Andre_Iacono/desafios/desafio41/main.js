

function stripes() {
    let sizeW = Math.random() * 5;
    let e = document.createElement('div');
    e.classList.add('lines');
    document.body.appendChild(e);
    e.style.left = Math.random() * innerWidth + 'px';
    e.style.width = 1 + sizeW + 'px';

    setTimeout(function() {
        document.body.removeChild(e)
    }, 2000)
}

setInterval(function() {
    stripes()
}, 20);