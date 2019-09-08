lamp()
var body = document.body;
function lamp() {
    var lampSection = document.getElementsByClassName("lamp_js")[0],
        lampBlack = document.getElementsByClassName("lamp__img-lamp_black_js")[0],
        lampYellow = document.getElementsByClassName("lamp__img-lamp_yellow_js")[0],
        lampBlue = document.getElementsByClassName("lamp__img-lamp_blue_js")[0],
        lampTitle = document.getElementsByClassName("lamp__title_js")[0],

        color = [
            "rgba(0, 0, 0, 0.5)",        //(Black)  
            "rgba(239, 206, 74, 0.5)",   //(Yellow)  
            "rgba(66, 141, 255, 0.5)",   //(Blue)  
            "rgb(255, 255, 255)"         //White
        ],
        filterOpacity = [
            "opacity(0.5)",
            "opacity(1)"
        ],
        textTitle = [
            "наведите на лампочку",
            "навели на чёрную",
            "навели на жёлтую",
            "навели на синюю"
        ];

    // стили по дэфолту
    lampTitle.innerHTML = textTitle[0];
    lampSection.style.background = color[3];
    lampBlack.style.filter = filterOpacity[0];
    lampYellow.style.filter = filterOpacity[0];
    lampBlue.style.filter = filterOpacity[0];

    //Чёрная
    lampBlack.addEventListener("mouseover", function () {
        lampSection.style.background = color[0];
        lampBlack.style.filter = filterOpacity[1];
        lampTitle.innerHTML = textTitle[1];
    })
    lampBlack.addEventListener("mouseout", function () {
        lampSection.style.background = color[3];
        lampBlack.style.filter = filterOpacity[0];
        lampTitle.innerHTML = textTitle[0];

    })

    //Желтая
    lampYellow.addEventListener("mouseover", function () {
        lampSection.style.background = color[1];
        lampYellow.style.filter = filterOpacity[1];
        lampTitle.innerHTML = textTitle[2];
    })
    lampYellow.addEventListener("mouseout", function () {
        lampSection.style.background = color[3];
        lampYellow.style.filter = filterOpacity[0];
        lampTitle.innerHTML = textTitle[0];
    })

    //Синяя
    lampBlue.addEventListener("mouseover", function () {
        lampSection.style.background = color[2];
        lampBlue.style.filter = filterOpacity[1];
        lampTitle.innerHTML = textTitle[3];
    })
    lampBlue.addEventListener("mouseout", function () {
        lampSection.style.background = color[3];
        lampBlue.style.filter = filterOpacity[0];
        lampTitle.innerHTML = textTitle[0];
    })
}



