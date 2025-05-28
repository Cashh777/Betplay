
const icons = document.querySelectorAll('.item__icon');
icons.forEach(icon => {
    icon.addEventListener('click', function() {
        const parentItem = this.closest('.item');

        if (this.classList.contains('item__icon--active')) {
            this.classList.remove('item__icon--active');
            parentItem.querySelector('.item__content').classList.add('hidde');
        } else {
            this.classList.add('item__icon--active');
            parentItem.querySelector('.item__content').classList.remove('hidde');
        }
    });
});