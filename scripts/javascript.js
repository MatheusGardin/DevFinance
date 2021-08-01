function toggle() {
    objModal = document.querySelector('.modal-overlay').classList
    objModal.contains('active') ? objModal.remove('active') : objModal.add('active')
}