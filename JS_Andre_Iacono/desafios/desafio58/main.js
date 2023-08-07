let label = document.querySelector('label');

label.innerHTML = label.innerText.split('').map((letters, i)=> `<span>${letters}</span>`).join('');