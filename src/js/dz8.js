var body = document.body;

slider();
lamp();
date()
parallax()

function slider() {
   var sliderLine = document.getElementsByClassName("slider__line_js")[0],
      sliderСontrolLeft = document.getElementsByClassName("slider__control_js")[0],
      sliderСontrolRight = document.getElementsByClassName("slider__control_js")[1],
      sliderItem = document.querySelectorAll(".slider__item_js"),
      sliderBoxBullet = document.getElementsByClassName("slider__box-bullet_js")[0],
      // вспомогательные переменные
      quantityItem = sliderItem.length,
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
   // Ширина линии = количество 100* количество слайдов
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
         if (sliderLine.style.transform == `translateX(0%)`) {
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
   // Перебирает все були и красит их
   // В зависимости от позиции  слайда красит одну бульку в синий цвет

   function colorBullet() {
      for (let i = 0; i < quantityItem; i++) {
         if (coordinates == 0 - ((100 / quantityItem) * i)) {
            for (let i = 0; i < sliderBullet.length; i++) {
               sliderBullet[i].style.background = color[0];
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

      arBackground = [
         "rgba(196, 196, 196, 0)",
         "rgba(196, 196, 196, 0.7)"
      ];

   document.addEventListener("scroll", function (e) {
      imgParallax.style.transform = `translateY(${window.pageYOffset / 15}px)`;
   })

   parallaxOverlay.addEventListener("mouseover", () => {
      imgParallax.style.transform = "scale(1.1)";
      parallaxOverlay.style.background = arBackground[0];
   })

   parallaxOverlay.addEventListener("mouseout", () => {
      imgParallax.style.transform = "scale(1)";
      parallaxOverlay.style.background = arBackground[1];
   })

}


















