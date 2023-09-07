let container = document.querySelector('.container');
for (let i = 1; i <= 900; i++) {
    let dot = document.createElement('div');
    dot.classList.add('element');
    container.appendChild(dot);
}

let grid = [30,30];

let dotAll = document.querySelectorAll('.element');
let animation = anime.timeline({
    targets: dotAll,
    easing: 'easeInOutExpo',
    loop: true,
})

animation
.add({
    rotate: function() {
        return anime.random(-360,360)}
})