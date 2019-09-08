dz9Task1()
dz9Task3()
checkTel()
dz9Animation()
function dz9Task1() {
   const containerCards = document.getElementsByClassName("users__container-card_js")[0];

   users = [{ "class": { "user": "users__card", "user1": "users__card_user1", "user2": "users__card_user2" }, "ageUser": { "user1": 25, "user2": 28 }, "textInfoUser": { "user1": "Тусит с друзьями", "user2": "Просто любит котиков" }, "avatarImg": ["./img/user1.jpg", "./img/user2.jpg"] }];
   var usersClone = users[0];
   // я не совсем понял как это должно выглядеть и просто преобразовал в строку и обратно в object 
   usersClone = JSON.stringify(usersClone);
   usersClone = JSON.parse(usersClone);

   createCardUder(1, containerCards);
   createCardUder(2, containerCards);

   /**
    * @description создаст карточку (w:300,h400) 
    * с аватаркой и информацией о пользователе,
    * пока можно создать карточку двум пользавателям ,
    * основные стили для карточки находятся в файле dz9.scss
    * 
    * @param  {number} номер пользователя (user)
    * @param  {var} тут нужно указать путь для карточек
    * 
    */

   function createCardUder(userNumber, where) {
      this.user = userNumber; // эксперемент 
      if (user === 1) {
         let newCard = document.createElement("div");
         newCard.classList.add(`${usersClone.class.user}`, `${usersClone.class.user1}`);
         where.insertAdjacentElement("beforeend", newCard);
         let avatarUser = document.createElement("div");
         let infoUser = document.createElement("p");
         let ageUser = document.createElement("p");
         avatarUser.style.background = `url("${usersClone.avatarImg[0]}")center/cover no-repeat`;
         avatarUser.style.height = "200px";
         ageUser.innerHTML = `${usersClone.ageUser.user1} лет`;
         infoUser.innerHTML = `${usersClone.textInfoUser.user1}`;
         newCard.insertAdjacentElement("beforeend", avatarUser);
         newCard.insertAdjacentElement("beforeend", infoUser);
         newCard.insertAdjacentElement("beforeend", ageUser);
      }
      else if (user === 2) {
         let newCard = document.createElement("div");
         newCard.classList.add(`${usersClone.class.user}`, `${usersClone.class.user2}`);
         where.insertAdjacentElement("beforeend", newCard);
         let avatarUser = document.createElement("div");
         let infoUser = document.createElement("p");
         let ageUser = document.createElement("p");
         avatarUser.style.background = `url("${usersClone.avatarImg[1]}")center/cover no-repeat`;
         avatarUser.style.height = "200px";
         ageUser.innerHTML = `${usersClone.ageUser.user2} лет`;
         infoUser.innerHTML = `${usersClone.textInfoUser.user2}`;
         newCard.insertAdjacentElement("beforeend", avatarUser);
         newCard.insertAdjacentElement("beforeend", infoUser);
         newCard.insertAdjacentElement("beforeend", ageUser);
      }
   }
}


function dz9Task3() {
   const input = document.getElementsByClassName("sum-number__input_js")[0],
      result = document.getElementsByClassName("sum-number__result_js")[0];
   var summ,
      cloneInputValue = "";

   /**
    * @description принимает массив чисел, 
    * цикл суммирует все числа в массиве,
    * возвращает сумму всех чисел в массиве
    * 
    * @param {object} arr  
    * 
    * @return {number} возвращает сумму всех чисел 
    */
   function sumNumberInput(arr) {
      for (var i = 0; i < arr.length; i++) {
         summ = summ + Number(arr[Number(i)]);
      }
      return summ;
   }

   input.addEventListener("keydown", function checkInput(e) {
      summ = 0;

      setTimeout(function () {
         if (checkInputStr(input) || checkInputSymbols(input)) {
            input.value = cloneInputValue;
         }
         else if (!checkInputStr(input) && !checkInputSymbols(input)) {
            var clone = `${input.value}`.match(/ *\d{1,}|-\d{1,}/gm);
            cloneInputValue = input.value;
            if (clone == Object(clone)) {
               sumNumberInput(clone);
               result.innerHTML = `Результат: ${summ}`;
            }
         }
      }, 1)
   })
}


function checkTel() {
   const input = document.getElementsByClassName("number-tel__input_js")[0],
      result = document.getElementsByClassName("number-tel__tesult_js")[0];
   var regExpMTC = RegExp(/^(8)(910|987|915|916|919)[\d{7}]{6}\d$|^\+(7)(910|987|915|916|919)[\d{7}]{6}\d$/),
      regExpMegafon = RegExp(/^(8)(929|925|926)[\d{7}]{6}\d$|^\+(7)(929|925|926)[\d{7}]{6}\d$/),
      regExpBeeline = RegExp(/^(8)(903|905|906|909|961|962|963|964|695)[\d{7}]{6}\d$|^\+(7)(903|905|906|909|961|962|963|964|695)[\d{7}]{6}\d$/),
      regExpSymbols = RegExp(/ *[.|<|>|?|;|:|"|'|`|!|@|#|$|%|^|&|*|(|)|~|_|-|{|}|=|-|,]/);

   /**
    * 
    * @param { String }   принимает название оператора в ""
    * @param { String }   принимает строку которую нужно проверить, начинает проверку с начала строки
    * @return false||true в зависимости есть ли совпадение с номером оператора 
    */
   function chechMobileOperator(operator, element) {
      if (operator == "megafon") {
         if (regExpMegafon.test(element)) return true;
         else return false;
      }
      else if (operator == "MTC") {
         if (regExpMTC.test(element)) return true;
         else return false;
      }
      else if (operator == "beeline") {
         if (regExpBeeline.test(element)) return true;
         else return false;
      }

   }
   function inputInvalid(input) {
      input.style.border = "2px solid red"
   }
   function inputValid(input) {
      input.style.border = "2px solid gray"
   }
   input.addEventListener("keydown", function (e) {
      setTimeout(
         function checkInput() {

            // if (checkInputStr(input) || regExpSymbols.test(input.value) || /^[\d-\d]{12,}$| |^\+[\d-\d]{12,}$/.test(input.value)) {
            //    input.value = ""
            // }
            if (/^ /.test(input.value)) {
               input.value = ""
            }
            if (checkInputStr(input)) {
               inputInvalid(input)
            }
            if (!checkInputStr(input)) {
               inputValid(input)
            }
            if (e.keyCode == 13) {
               if (checkInputStr(input)) {
                  inputInvalid(input)
               }
               else if (chechMobileOperator("megafon", input.value)) {
                  result.innerHTML = "Сотовый оператор: Мегафон";
                  inputValid(input)
               }
               else if (chechMobileOperator("MTC", input.value)) {
                  result.innerHTML = "Сотовый оператор: MTC";
                  inputValid(input)
               }
               else if (chechMobileOperator("beeline", input.value)) {
                  result.innerHTML = "Сотовый оператор: Beeline";
                  inputValid(input)
               }
               else {
                  result.innerHTML = "Сотовый оператор: не определён";
                  inputValid(input)
               }
            }
            // }



         }
         , 1)
   })
}



function dz9Animation() {
   const input = document.getElementsByClassName("sum-number-v-2__input_js")[0],
      result = document.getElementsByClassName("sum-number-v-2__result_js")[0];

   var summ,
      cloneInputValue = "",
      arrNumber = [];


   function sumNumberInput(arr) {
      for (var i = 0; i < arr.length; i++) {
         summ = summ + Number(arr[Number(i)]);

      }
      return summ;
   }

   input.addEventListener("keydown", function checkInput(e) {
      setTimeout(function () {
         summ = 0;
         if (checkInputStr(input) || checkInputSymbols(input) || / /.test(input.value) || !/^\d+$/.test(input.value)) {
            input.value = cloneInputValue;
         }
         else if (!checkInputStr(input) && !checkInputSymbols(input) && /^\d+$/.test(input.value)) {
            cloneInputValue = input.value;
            if (e.keyCode == 13) {
               arrNumber.push(input.value);
               sumNumberInput(arrNumber);
               let numberAnimation = document.createElement("div");
               numberAnimation.innerHTML = `${arrNumber[arrNumber.length - 1]}`;
               numberAnimation.style.paddingTop = "20px";
               numberAnimation.style.opacity = `0.8`;
               result.innerHTML = `Результат: ${summ}`;
               input.value = "";
               cloneInputValue = "";
               result.insertAdjacentElement("beforeend", numberAnimation);
               let y = 0;
               let idInterval = setInterval(() => {
                  numberAnimation.style.transform = `translate(78px,${y--}px)`;
               }, 7)
               setTimeout(() => {
                  clearInterval(idInterval);
                  numberAnimation.remove();
               }, 300)
            }
         }
      }, 0)
   })
}