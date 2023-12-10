let div = document.querySelector(".picture");

div.addEventListener("mouseover", () => {
    div.style.backgroundImage = 'url("assets/pic2.jpg")';
});
div.addEventListener("mouseleave", () => {
    div.style.backgroundImage = 'url("assets/pic.jpg")';
});
