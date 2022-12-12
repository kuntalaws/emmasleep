jQuery(document).ready(function(){
  jQuery(document).on('click', '.product__text', function() {
    alert($('input[name=Size]:checked').val());
  });
});