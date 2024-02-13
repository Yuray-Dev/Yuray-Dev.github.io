document.addEventListener("DOMContentLoaded", function () {
    const backgrounds = [
        "img/bg1.webp",
        "img/bg2.webp",
        "img/bg3.webp",
        "img/bg4.webp",
        "img/bg5.webp",
        "img/bg6.webp",
        "img/bg7.webp"
    ];

    const randomIndex = Math.floor(Math.random() * backgrounds.length);
    const randomBackground = backgrounds[randomIndex];

    document.querySelector(".background").style.backgroundImage = `url(${randomBackground})`;
});
