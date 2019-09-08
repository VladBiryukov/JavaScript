var body = document.body;
slider()
function slider() {
    const sliderLine = document.getElementsByClassName("slider__line_js")[0],
        sliderСontrolLeft = document.getElementsByClassName("slider__control_js")[0],
        sliderСontrolRight = document.getElementsByClassName("slider__control_js")[1],
        sliderItem = document.querySelectorAll(".slider__item_js"),
        sliderBoxBullet = document.getElementsByClassName("slider__box-bullet_js")[0];

    // вспомогательные переменные
    var quantityItem = sliderItem.length,
        maxPosition = quantityItem,
        position = 0,
        coordinates = 0,
        valueWidth = 100 / quantityItem,
        maxValueWidth = 0 - ((100 / quantityItem) * 2),

        color = [
            "#9c9c9c", // Gray
            "#3590cc", // Blue
        ];


    // Стили по дэфолту

    // Создаём були, колечество булек = количество слайдов
    for (let index = 0; index < quantityItem; index++) {
        let newBullet = document.createElement("div");
        newBullet.classList.add("slider__bullet", "slider__bullet_js")
        sliderBoxBullet.insertAdjacentElement("beforeend", newBullet);
    }
    const sliderBullet = document.querySelectorAll(".slider__bullet_js");



    // Перебираем все слайды и устонавливаем им ширину
    for (let i = 0; i < sliderItem.length; i++) {
        sliderItem[i].style.width = `${valueWidth}%`;
    }
    // Ширина линии =  100 * количество слайдов
    sliderLine.style.width = `${100 * quantityItem}%`;

    sliderBullet[0].style.background = color[1];
    sliderСontrolLeft.style.opacity = "0.5";
    sliderСontrolLeft.style.cursor = "auto";

    sliderСontrolLeft.addEventListener("click", slideBack);
    sliderСontrolRight.addEventListener("click", slideForward);
    sliderLine.addEventListener("click", slideForward);

    body.addEventListener("keydown", (e) => {
        if (e.keyCode == 39) {
            slideForward();
        }
        else if (e.keyCode == 37) {
            slideBack();
        }
    })

    // Назад
    function slideBack() {
        if (coordinates < 0) {
            sliderLine.style.transform = `translateX(${coordinates + valueWidth}%)`;
            coordinates = coordinates + valueWidth;

            colorBullet();
            if (position == 0) {
                sliderСontrolLeft.style.opacity = "0.5";
                sliderСontrolLeft.style.cursor = "auto";
            }
            return coordinates;
        }
    }
    // Вперёд 
    function slideForward() {
        if (maxPosition != position + 1) {
            sliderLine.style.transform = `translateX(${coordinates - valueWidth}%)`;
            position++;
            coordinates = coordinates - valueWidth;
            colorBullet();
            sliderСontrolLeft.style.opacity = "1";
            sliderСontrolLeft.style.cursor = "pointer";
            return coordinates, position;
        }
        else {
            sliderLine.style.transform = `translateX(0%)`;
            coordinates = 0;
            position = 0;
            sliderСontrolLeft.style.opacity = "0.5";
            sliderСontrolLeft.style.cursor = "auto";
            colorBullet();
            return coordinates, position;
        }
    }
    // Цвет були
    // Перебирает все були  подбирает соответствующий цвет если условие не совпадает
    // В зависимости от позиции  слайда красит одну бульку в синий цвет

    function colorBullet() {
        for (let i = 0; i < quantityItem; i++) {
            if (coordinates == 0 - ((100 / quantityItem) * i)) {
                for (let i = 0; i < sliderBullet.length; i++) {
                    if (sliderBullet[i].style.background != color[0]) {
                        sliderBullet[i].style.background = color[0];
                    }
                }
                sliderBullet[i].style.background = color[1];
                position = i;
                return position;
            }
        }
    }

    // Перебирает все були и присваит им событие onclick
    // При нажатии на булю меняется позиция слайда
    for (let i = 0; i < quantityItem; i++) {
        if (sliderBullet[i]) {
            sliderBullet[i].onclick = function () {
                sliderLine.style.transform = `translateX(${0 - ((100 / quantityItem) * i)}%)`;
                coordinates = 0 - ((100 / quantityItem) * i);
                sliderСontrolLeft.style.opacity = "1";
                colorBullet();
                return coordinates;
            }
        }

        if (sliderBullet[0]) {
            sliderBullet[0].onclick = function () {
                sliderLine.style.transform = `translateX(${0 - ((100 / quantityItem) * 0)}%)`;
                coordinates = 0 - ((100 / quantityItem) * 0);
                sliderСontrolLeft.style.opacity = "0.5";
                colorBullet();
                return coordinates;
            }
        }
    }
}