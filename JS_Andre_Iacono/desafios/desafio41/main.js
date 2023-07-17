function stripes() {
    let e = document.createElement('div');
    e.classList.add('lines');
    document.body.appendChild(e);
    e.style.left = Math.random() * innerWidth + 'px';

    setTimeout(function() {
        document.body.removeChild(e)
    }, 2000)
}

