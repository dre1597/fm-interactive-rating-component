const $ratingBtn = document.querySelectorAll('.btn-rating');
const $submitBtn = document.querySelector('.submit');

$ratingBtn.forEach((btn) => {
  btn.addEventListener('click', () => {
    $ratingBtn.forEach((btn) => {
      btn.classList.remove('selected');
    });
    btn.classList.add('selected');
  });
});

$submitBtn.addEventListener('click', () => {
  const selectedRating = Array.from($ratingBtn).find((btn) => btn.classList.contains('selected'));

  if (selectedRating) {
    document.querySelector('.selection span').textContent = selectedRating.textContent;
    document.querySelector('.thank-you').classList.remove('hidden');
    document.querySelector('.rating-card').classList.add('hidden');
  }
});
