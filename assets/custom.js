jQuery(document).ready(function(){
  jQuery(document).on('change', '.js product-form__input input[name=Size]', function() {
    alert($('input[name=Size]:checked').val());
  });
});