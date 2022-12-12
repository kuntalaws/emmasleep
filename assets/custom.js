jQuery(document).ready(function(){
  $('.js product-form__input input').on('change', function() {
    alert($('input[name=Size]:checked').val());
  });
});