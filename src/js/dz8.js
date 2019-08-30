
var body = document.body;

slider();
lamp();
date()
parallax()

function slider() {
   var sliderLine = document.getElementsByClassName("slider__line_js")[0],
      sliderСontrolLeft = document.getElementsByClassName("slider__control_js")[0],
      sliderСontrolRight = document.getElementsByClassName("slider__control_js")[1],
      sliderBullet_1 = document.getElementsByClassName("slider__bullet_js")[0],
      sliderBullet_2 = document.getElementsByClassName("slider__bullet_js")[1],
      sliderBullet_3 = document.getElementsByClassName("slider__bullet_js")[2],

      // вспомогательные переменные
      position = 0,
      coordinates = 0,
      valueWidth = 33.333333333333336,
      maxValueWidth = -66.6666666666666,

      color = [
         "#9c9c9c", // Gray
         "#3590cc", // Blue
      ];

   // стили по дэфолту
   sliderBullet_1.style.background = color[1];
   sliderСontrolLeft.style.opacity = "0.5";
   sliderСontrolLeft.style.cursor = "auto";

   sliderСontrolLeft.addEventListener("click", slideBack);
   sliderСontrolRight.addEventListener("click", slideForward);
   sliderLine.addEventListener("click", slideForward)

   body.addEventListener("keydown", (e) => {
      if (e.keyCode == 39) {
         slideForward();
      }
      else if (e.keyCode == 37) {
         slideBack();
      }
   })

   // назад
   function slideBack() {
      if (coordinates < 0) {
         sliderLine.style.transform = `translateX(${coordinates + valueWidth}%)`;
         coordinates = coordinates + valueWidth;
         colorBullet();
         if (sliderLine.style.transform == `translateX(0%)`) {
            sliderСontrolLeft.style.opacity = "0.5";
            sliderСontrolLeft.style.cursor = "auto";
         }
         return coordinates, position;
      }
   }
   // вперёд 
   function slideForward() {
      if (coordinates >= maxValueWidth) {
         sliderLine.style.transform = `translateX(${coordinates - valueWidth}%)`;
         coordinates = coordinates - valueWidth;
         colorBullet();
         sliderСontrolLeft.style.opacity = "1";
         sliderСontrolLeft.style.cursor = "pointer";
         return coordinates;
      }
      else {
         sliderLine.style.transform = `translateX(0%)`;
         coordinates = 0;
         sliderСontrolLeft.style.opacity = "0.5";
         sliderСontrolLeft.style.cursor = "auto";
         colorBullet();
         return coordinates;
      }
   }
   // цвет були
   function colorBullet() {
      if (coordinates == 0) {
         sliderBullet_1.style.background = color[1];
         sliderBullet_2.style.background = color[0];
         sliderBullet_3.style.background = color[0];
      }
      else if (coordinates == -33.333333333333336) {
         sliderBullet_1.style.background = color[0];
         sliderBullet_2.style.background = color[1];
         sliderBullet_3.style.background = color[0];
      }
      else if (coordinates == -66.66666666666667) {
         sliderBullet_1.style.background = color[0];
         sliderBullet_2.style.background = color[0];
         sliderBullet_3.style.background = color[1];
      }
   }
}

//  лампочки   

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






function date() {
   var dateResult = document.getElementsByClassName("date__result_js")[0],
      dateInput = document.getElementsByClassName("date__input_js")[0],
      idInterval;


   dateInput.addEventListener("click", function clickInput() {
      var cloneInputValue = "";
      dateInput.value = "2020.10.10";

      dateInput.addEventListener("keydown", function watchInput() {
         //валидация инпута
         setTimeout(function validInput() {
            if (dateInput.value == " " || dateInput.value == "-") {
               dateInput.value = cloneInputValue;
            }
            else if (dateInput.value != " " && dateInput.value != "-") {
               cloneInputValue = dateInput.value;
            }
         }, 100)
      })

      body.onkeydown = function enterCompareDate(e) {
         if (e.keyCode == 13) {
            compareDate();
         }
      }
      function compareDate() {
         //если есть запущенный таймер - отменить и запустить новый с новыми данными
         if (idInterval) {
            clearInterval(idInterval);
         }
         // обработка полученных данных
         var arrClone = dateInput.value;
         arrClone = arrClone.split(".");
         var arrDate = arrClone;
         idInterval = setInterval(dateTimer, 1000);
         dateTimer();

         function dateTimer() {
            var dateToday = new Date();
            var number = 60;
            var dateCurrent = new Date(`${arrDate[1]}/${arrDate[2]}/${arrDate[0]}`);
            var clone = Math.ceil((dateCurrent - dateToday) / 1000);
            var days = Math.floor(clone / (number * number * 24));
            clone = clone % (number * number * 24);
            var hours = Math.floor(clone / (number * number));
            clone = clone % (number * number);
            var minutes = Math.floor(clone / number);
            clone = clone % number;
            var second = clone;
            //выводим результат если время не прошло
            if (dateCurrent > dateToday) {
               dateResult.innerHTML =
                  days + " дней " +
                  hours + " часов " +
                  minutes + " минут " +
                  second + " секунд ";
               return idInterval;
            }
            //время прошло
            else if (dateCurrent < dateToday) {
               dateResult.innerHTML = "Время прошло как и 2007";
               return idInterval;
            }
            else {
               //поругаться немного:)
               dateResult.innerHTML = "";
               var a = 0;
               for (let i = 0; i < 6; i++) {
                  a = a + 500;
                  setTimeout(() => {
                     dateInput.classList.toggle("date__input_invalid_js");
                     return a;
                  }, a)
               }
               clearInterval(idInterval);
            }
         }
      }
      dateInput.removeEventListener("click", clickInput);
   })
}



//////////////////////////////////////
//////////////////////////////////////
///////////////PARALLAX///////////////
//////////////////////////////////////
//////////////////////////////////////



function parallax() {

   var imgParallax = document.getElementsByClassName("parallax__img_js")[0],
      parallaxOverlay = document.getElementsByClassName("parallax__overlay_js")[0],
      position = 0,

      arBackground = [
         "rgba(196, 196, 196, 0)",
         "rgba(196, 196, 196, 0.7)"
      ];

   body.addEventListener("mousewheel", function (e) {
      if (e.wheelDelta == -120) {
         if (position != 80) {
            position = position + 10
            imgParallax.style.transform = `translateY(${position}px)`
            return position
         }
      }
      else if (e.wheelDelta == 120) {
         if (position != -60) {
            position = position - 10
            imgParallax.style.transform = `translateY(${position}px)`
            return position
         }
      }
   })

   parallaxOverlay.addEventListener("mouseover", () => {
      imgParallax.style.transition = "5s"
      imgParallax.style.transform = "scale(1.1)"
      parallaxOverlay.style.background = arBackground[0]
   })

   parallaxOverlay.addEventListener("mouseout", () => {
      imgParallax.style.transition = "1.5s"
      imgParallax.style.transform = "scale(1)"
      parallaxOverlay.style.background = arBackground[1]
   })

}