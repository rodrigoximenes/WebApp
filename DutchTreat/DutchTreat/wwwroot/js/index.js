$(document).ready(function () {
    console.log("ta procurando o que aqui");

    var theForm = $("#theForm");
    theForm.hide();

    var button = $("#buyButon");
    button.on("click", function () {
        console.log("Buying Item");
    })


    var productInfo = $(".product-props li");
    productInfo.on("click", function () {
        console.log("Você clicou em " + $(this).text());
    });



    var $loginToogle = $("#loginToggle");
    var $popupForm = $(".popup-form");

    $loginToogle.on("click", function () {
        $popupForm.fadeToggle(1000);
    });


});

