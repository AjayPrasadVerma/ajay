
// window.addEventListener("wheel", function (event) {
//     if (event.deltaY < 0) {
//         $("#menu-bar").slideDown(1000);
//     }
//     else if (event.deltaY > 0) {

//         $("#menu-bar").slideUp(1000);
//     }
// });

if (window.innerWidth < 1208 && window.innerWidth > 790) {
    $("#right").animate({ left: '10px' }, 500);
    $("#left").animate({ left: '10px' }, 500);
}
else if (window.innerWidth < 790) {
    $("#right").animate({ left: '120px' }, 500);
    $("#left").animate({ left: '-110px' }, 500);
}

let currentYear = document.getElementById("year").innerHTML = new Date().getFullYear();
