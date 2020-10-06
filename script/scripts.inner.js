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