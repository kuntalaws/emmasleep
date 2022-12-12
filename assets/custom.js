
var sizeRadio = document.querySelector('.js product-form__input input[name=Size]');
sizeRadio.addEventListener('change', function () {
  var checkedValues = document.querySelector('.js product-form__input input[name=Size]:checked');
  alert(checkedValues);
});
