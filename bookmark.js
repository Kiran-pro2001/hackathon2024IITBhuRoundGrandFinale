
// Upon clicking it will Bookmark


document.addEventListener('DOMContentLoaded', function () {
    const bookmarkIcons = document.querySelectorAll('.bookmark');
    
    bookmarkIcons.forEach(icon => {
        icon.addEventListener('click', function () {
            icon.classList.toggle('black');
        });
    });
});
