let container = document.querySelector('.container');
for (let i = 1; i <= 900; i++) {
    let dot = document.createElement('div');
    dot.classList.add('element');
    container.appendChild(dot);
}