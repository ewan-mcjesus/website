
function going_up() {
    document.body.scrollTop  = 0 ;
    document.documentElement.scrollTop = 0;

}
    var i =4;

function img_carousel()
{
    imagedata = ["../IMG/dog1.jpeg", "../IMG/dog2.jpeg", "../IMG/dog3.jpeg", "../IMG/dog4.jpeg","../IMG/dog5.jpeg"]
    i=(i+1)%5
    document.getElementById("img").src=imagedata[i];
}
///////sticky navbar
window.onscroll = function () { myFunction() };
var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;
function myFunction() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky")
    }
    else 
    {
        navbar.classList.remove("sticky");
    }
}