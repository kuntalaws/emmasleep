
var sizeRadio = document.querySelector('variant-radios .js product-form__input input[name=Size]');
sizeRadio.addEventListener('change', function () {
  alert('aaaa')
  var checkedValues = document.querySelector('variant-radios .js product-form__input input[name=Size]:checked');
  alert(checkedValues);
});
