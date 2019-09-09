date();
var body = document.body;
function date() {
   var dateResult = document.getElementsByClassName("date__result_js")[0],
      dateInput = document.getElementsByClassName("date__input_js")[0],
      idInterval,
      dateBlock = document.getElementsByClassName(" date__block_js")[0];


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