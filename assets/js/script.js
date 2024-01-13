
//selecting all required elements
var filteritem = document.querySelector(".items"),
    filterimg = document.querySelectorAll(".image");


//once window load
window.onload = function () {
    filteritem.onclick = function (selectedItem) {
        if (selectedItem.target.classList.contains("item")) {
            filteritem.querySelector(".active").classList.remove("active");
            selectedItem.target.classList.add("active");
            let filtername = selectedItem.target.getAttribute("data-name");
            filterimg.forEach(function (image) {
                var filterimage = image.getAttribute("data-name");
                if (filterimage == filtername || filtername == "all") {
                    image.classList.add("show");
                } else {
                    image.classList.add("hide");
                    image.classList.remove("show");
                }

            });
        }
    }
}

// Menu-Btn Script

var menuBtn = document.querySelector('.hamburger');
var mobile_menu = document.querySelector('nav ul ');
menuBtn.addEventListener('click', function () {
    menuBtn.classList.toggle('active')
    mobile_menu.classList.toggle('isactive')
});

// Adding classes on CLICKED item to active

$(document).ready(function () {
    $(document).on('click', '.item', function () {
        $(this).addClass('menuactive').siblings().removeClass('menuactive')
    })

});



// preloader logic

function preloader() {
    document.querySelector("#preloader").style.display = "none";

}

window.addEventListener("load", function () {
    setTimeout(preloader, 2000)
})




























