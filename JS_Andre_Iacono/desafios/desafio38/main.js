let box = document.querySelector('.box');
box.addEventListener('mousemove', (e) => {
    let x = e.offsetX
    let y = e.offsetY
    let BoxWidth = box.clientWidth
    let BoxHeight = box.clientHeight
    let moveX = (x - BoxWidth)
    let moveY = (y - BoxHeight)
    box.style.transform = `translateX(${moveX}px)`;
})