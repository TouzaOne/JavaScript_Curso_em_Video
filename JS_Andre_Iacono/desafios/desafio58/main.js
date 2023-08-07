let label = document.querySelector('label');

label.innerHTML = label.innerText.split('').map((letters, i)=> `<span style='transition-delay: ${i*30}ms'>${letters}</span>`).join('');