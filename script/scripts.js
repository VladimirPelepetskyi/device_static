var slidercontrol1 = document.querySelector(".slider-label-1");
var slidercontrol2 = document.querySelector(".slider-label-2");
var slidercontrol3 = document.querySelector(".slider-label-3");


var slide1 = document.querySelector(".slider-item-1");
var slide2 = document.querySelector(".slider-item-2");
var slide3 = document.querySelector(".slider-item-3");


slidercontrol1.addEventListener("click", function (evt) {
    evt.preventDefault();
    slide1.classList.remove("slider-item-none");
    slide1.classList.add("slider-item-show");
    slide2.classList.remove("slider-item-show");
    slide2.classList.add("slider-item-none");
    slide3.classList.remove("slider-item-show");
    slide3.classList.add("slider-item-none");

});


slidercontrol2.addEventListener("click", function (evt) {
    evt.preventDefault();
    slide1.classList.add("slider-item-none");
    slide1.classList.remove("slider-item-show");
    slide2.classList.add("slider-item-show");
    slide2.classList.remove("slider-item-none");
    slide3.classList.remove("slider-item-show");
    slide3.classList.add("slider-item-none");
});

slidercontrol3.addEventListener("click", function (evt) {
    evt.preventDefault();
    slide1.classList.add("slider-item-none");
    slide1.classList.remove("slider-item-show");
    slide2.classList.remove("slider-item-show");
    slide2.classList.add("slider-item-none");
    slide3.classList.add("slider-item-show");
    slide3.classList.remove("slider-item-none");
});


var linkdelivery = document.querySelector(".button-delivery");
var linkguarantee = document.querySelector(".button-guarantee");
var linkcredit = document.querySelector(".button-credit");

var delivery = document.querySelector(".services-item-delivery");
var guarantee = document.querySelector(".services-item-guarantee");
var credit = document.querySelector(".services-item-credit");


linkdelivery.addEventListener("click", function (evt) {
    evt.preventDefault();
    delivery.classList.add("services-item-show");
    delivery.classList.remove("services-item-none");
    guarantee.classList.remove("services-item-show");
    guarantee.classList.add("services-item-none");
    credit.classList.remove("services-item-show");
    credit.classList.add("services-item-none");

    linkdelivery.classList.add("button-services-active");
    linkguarantee.classList.remove("button-services-active");
    linkcredit.classList.remove("button-services-active");
});


linkguarantee.addEventListener("click", function (evt) {
    evt.preventDefault();
    delivery.classList.remove("services-item-show");
    delivery.classList.add("services-item-none");
    guarantee.classList.add("services-item-show");
    guarantee.classList.remove("services-item-none");
    credit.classList.remove("services-item-show");
    credit.classList.add("services-item-none");

    linkdelivery.classList.remove("button-services-active");
    linkguarantee.classList.add("button-services-active");
    linkcredit.classList.remove("button-services-active");
});



linkcredit.addEventListener("click", function (evt) {
    evt.preventDefault();
    delivery.classList.remove("services-item-show");
    delivery.classList.add("services-item-none");
    guarantee.classList.remove("services-item-show");
    guarantee.classList.add("services-item-none");
    credit.classList.add("services-item-show");
    credit.classList.remove("services-item-none");

    linkdelivery.classList.remove("button-services-active");
    linkguarantee.classList.remove("button-services-active");
    linkcredit.classList.add("button-services-active");
});


var linkwrite = document.querySelector(".button-writeus");

var closewrite = document.querySelector(".button-modal-close");


var writepopup = document.querySelector(".modal-write");



linkwrite.addEventListener("click", function (evt) {
    evt.preventDefault();
    writepopup.classList.add("modal-write-show");
});

closewrite.addEventListener("click", function (evt) {
    evt.preventDefault();
    writepopup.classList.remove("modal-write-show");
});

window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
        evt.preventDefault();
        if (writepopup.classList.contains("modal-write-show")) {
            writepopup.classList.remove("modal-write-show");
        }
    }
});

var linkmap = document.querySelector(".map-img");

var closemap = document.querySelector(".button-close-map");

var mappopup = document.querySelector(".modal-map");

linkmap.addEventListener("click", function (evt) {
    evt.preventDefault();
    mappopup.classList.add("modal-map-show");
});

closemap.addEventListener("click", function (evt) {
    evt.preventDefault();
    mappopup.classList.remove("modal-map-show");
});

window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
        evt.preventDefault();
        if (mappopup.classList.contains("modal-map-show")) {
            mappopup.classList.remove("modal-map-show");
        }
    }
});

var searchinput = document.querySelector(".search-input");
var buttonsearch = document.querySelector(".button-search");

var bhhody = document.querySelector("body");

searchinput.onfocus = function () {
    buttonsearch.classList.add("button-search-show");
};

bhhody.addEventListener ("click",  function (event) {
    console.log(event.target.className)
    if (event.target.parentElement.className !== "search-form") {
        buttonsearch.classList.remove("button-search-show");
    }

}
 ) ;