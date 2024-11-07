document.addEventListener('DOMContentLoaded', function() {
  const openButton = document.getElementById('popup-open');
  const popup = document.getElementById('popup-wrapper');
  const closeButton = document.getElementById('popup-close');

  openButton.addEventListener('click', () => {
    popup.classList.add('active');
  });

  closeButton.addEventListener('click', () => {
    popup.classList.remove('active');
  });
});
