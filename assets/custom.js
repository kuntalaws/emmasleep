jQuery(document).ready(function(){
  jQuery(document).on('change', '.js product-form__input', function() {
    alert($('input[name=Size]:checked').val());
  });
});