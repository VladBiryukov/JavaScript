// var dateSlider = document.getElementsByClassName("slider__date_js")[0]
// var date = new Date()
// var input_Y = document.getElementsByClassName("slider__input_js")[0]
// var input_M = document.getElementsByClassName("slider__input_js")[1]
// var input_D = document.getElementsByClassName("slider__input_js")[2]
// var button = document.getElementsByClassName("slider__button_js")[0]
// var result = document.getElementsByClassName("slider__result_js")[0]
// var days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
// var body = document.body;

// body.addEventListener("keydown", (e) => {
//     console.log(e.keyCode);

// })
// console.log(date);
// dateSlider.innerHTML = date;
// button.addEventListener("click", function name() {
//     dateSlider.innerHTML = new Date(input_Y.value, input_M.value, input_D.value);
//     var ret = new Date()
//     result.innerHTML = days[ret.getDay()]
// })



// var buttonSlider_1 = document.getElementsByClassName("slider__button_js")[0];
// var buttonSlider_2 = document.getElementsByClassName("slider__button_js")[1];
// var sliderLine = document.getElementsByClassName("slider__line_js")[0];
// var a = 0;
// var b;
// var body = document.body;
// var position = 0;
// function sideRLef() {
//     sliderLine.style.left = `${position + 100}px`;
//     position = +100;
//     return position;
// }
// function sideRig() {
//     sliderLine.style.left = `${a - 100}px`;
//     position = a;
//     a -= 100;
//     return position;
// }
// // buttonSlider_2.onclick = sideRig;

// body.addEventListener("keydown", function (e) {
//     console.log(e.keyCode);
//     if (e.keyCode == 37) {
//         sideRig();
//     }
//     else if (e.keyCode == 39) {
//         sideRLef();
//     }
// })





// buttonSlider_2.addEventListener("click", () => {
//     sliderLine.style.left = `${position - 100}px`;

//     position -= 100
//     return position
// })