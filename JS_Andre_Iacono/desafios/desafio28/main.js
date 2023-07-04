const openModalButton = document.getElementById('openModal');
const modal = document.getElementById('modal');
const closeModalButton = document.getElementsByClassName('close')[0];

openModalButton.addEventListener('click', function() {
    modal.style.display = 'block'; // show the modal
});

