let text = document.querySelector('.text');
text.innerHTML = text.innerHTML.split('').map((letters, i) => `<span>${letters}</span>`).join('');