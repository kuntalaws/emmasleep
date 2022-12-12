jQuery(document).ready(function(){
  jQuery(document).on('click', '.js product-form__input', function() {
    alert($('input[name=Size]:checked').val());
  });
});