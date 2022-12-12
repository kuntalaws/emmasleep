
var sizeRadio = document.querySelector('.js product-form__input');
console.log(sizeRadio)
sizeRadio.addEventListener('change', function () {
  alert('aaaa')
  var checkedValues = document.querySelector('variant-radios .js product-form__input input[name=Size]:checked');
  alert(checkedValues);
});
