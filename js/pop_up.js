document.addEventListener('DOMContentLoaded', function() {
    const popup = document.getElementById('popup');
    const closeBtn = document.getElementById('closeBtn');
    const flippingText = document.querySelector('.flipping-text');

    function showPopup() {
        popup.style.display = 'block';
    }

    function hidePopup() {
        popup.style.display = 'none';
    }

    setInterval(showPopup, 10000);

    closeBtn.addEventListener('click', hidePopup);

    setInterval(() => {
        flippingText.classList.toggle('flip');
      }, 4000);
});
