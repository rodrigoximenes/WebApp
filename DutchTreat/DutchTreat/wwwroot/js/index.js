console.log("ta procurando o que aqui");

var theForm = document.getElementById("theForm");
theForm.hidden = true;

var button = document.getElementById("buyButon");
button.addEventListener("click", function () {
    console.log("Buying Item");
})


var productInfo = document.getElementsByClassName("product-props");
var listItem = productInfo.item[0].children;


