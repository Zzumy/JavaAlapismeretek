window.addEventListener("load", init);

function init() {
    const articleElem = document.querySelectorAll("article");
    articleElem[0].innerHTML = "<div>Katt ide!</button>";

    const gombElem = document.querySelectorAll("article button");
    gombElem[0].addEventListener("click", function () {
        console.log("Kattintottál!");
    });

    const divElem = document.querySelectorAll("article div");
    divElem[0].addEventListener("mouseenter", function () {
        console.log("fölé vittem az elemet");
        divElem[0].style.border = "1px solid black";
    })
}

