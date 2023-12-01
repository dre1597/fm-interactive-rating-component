const $btnRating = document.querySelectorAll('.btn-rating');

$btnRating.forEach((btn) => {
  btn.addEventListener('click', () => {
    btn.classList.toggle('selected');
  });
});
