jQuery(document).ready(function(){
  $('.js product-form__input input[name=Size]').on('change', function() {
    alert($('input[name=Size]:checked').val());
  });
});