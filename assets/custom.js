$('.js product-form__input input[name=Size]:checked').on('change', function() {
  alert($('input[name=Size]:checked').val());
});