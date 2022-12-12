window.addEventListener('load', (event) => {
    console.log('DOM fully loaded and parsed');
var sizeRadio = jQuery('variant-radios').find('.js product-form__input input[name=Size]:checked').val();
console.log(sizeRadio)

});  
