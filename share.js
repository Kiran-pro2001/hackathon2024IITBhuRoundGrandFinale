document.addEventListener('DOMContentLoaded', () => {
    const fontSizeButtons = document.querySelectorAll('#fontSize button');
    const colorButtons = document.querySelectorAll('#color button');
    const backgroundButtons = document.querySelectorAll('#background button');

    fontSizeButtons.forEach(button => {
        button.addEventListener('click', () => {
            document.body.style.fontSize = button.dataset.size === 'small' ? '12px' :
                                           button.dataset.size === 'medium' ? '16px' : '20px';
            fontSizeButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
        });
    });

    colorButtons.forEach(button => {
        button.addEventListener('click', () => {
            document.body.style.color = button.dataset.color;
            colorButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
        });
    });

    backgroundButtons.forEach(button => {
        button.addEventListener('click', () => {
            document.body.style.backgroundColor = button.dataset.bg === 'light' ? '#ffffff' :
                                                  button.dataset.bg === 'dim' ? '#555555' : '#000000';
            document.body.style.color = button.dataset.bg === 'light' ? '#000000' : '#ffffff';
            backgroundButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
        });
    });
});
