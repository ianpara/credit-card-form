$(function() {

    var owner = $('#owner');
    var cardNumber = $('#cardNumber');
    var cardNumberField = $('#card-number-field');
    var CVV = $("#cvv");
    var mastercard = $("#mastercard");
    var confirmButton = $('#confirm-purchase');
    var visa = $("#visa");
    var amex = $("#amex");
    var discover = $("#discover");

    cardNumber.payform('formatCardNumber');
    CVV.payform('formatCardCVC');


 //While typing fields are validated
    cardNumber.keyup(function() {


        //Card type function
        amex.removeClass('hidden');
        visa.removeClass('hidden');
        mastercard.removeClass('hidden');
        discover.removeClass('hidden');

        if ($.payform.validateCardNumber(cardNumber.val()) == false) {
            cardNumberField.addClass('has-error');
        } else {
            cardNumberField.removeClass('has-error');
            cardNumberField.addClass('has-success');
        }

        if ($.payform.parseCardType(cardNumber.val()) == 'visa') {
            mastercard.addClass('hidden');
            amex.addClass('hidden');
            discover.addClass('hidden');
        } else if ($.payform.parseCardType(cardNumber.val()) == 'amex') {
            mastercard.addClass('hidden');
            visa.addClass('hidden');
            discover.addClass('hidden');
        } else if ($.payform.parseCardType(cardNumber.val()) == 'mastercard') {
            amex.addClass('hidden');
            visa.addClass('hidden');
            discover.addClass('hidden');
        } else if ($.payform.parseCardType(cardNumber.val()) == 'discover') {
            amex.addClass('hidden');
            visa.addClass('hidden');
            mastercard.addClass('hidden');
        } else {
            amex.addClass('hidden');
            visa.addClass('hidden');
            mastercard.addClass('hidden');
            discover.addClass('hidden');
        }
    });


//Checks for errors on
    confirmButton.click(function(e) {

        e.preventDefault();

        var isCardValid = $.payform.validateCardNumber(cardNumber.val());
        var isCvvValid = $.payform.validateCardCVC(CVV.val());

        if(owner.val().length < 5){
            alert("Not a valid card holder.");
        } else if (!isCardValid) {
            alert("Not a valid card number.");
        } else if (!isCvvValid) {
            alert("Not a valid CVC.");
        } else {
            // Everything is correct. Add your form submission code here.
            alert("Everything is correct");
        }
    });
});
