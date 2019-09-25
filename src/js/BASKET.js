




// function num(n, s) {
//     s = s | 2
//     return console.log(Math.pow(n, s));
// }
// num(3, 2)




// (function () {
//     var user = {
//         name: "qwe",
//         sName: "QWE"
//     }
//     console.log(user.name);

// })();

// (function () {
//     var user = {
//         name: "asd",
//         sName: "ASD"
//     }
//     console.log(user.name);

// })()

// var user = {
//     name: "asd",
//     sName: "ASD"
// }


// var name1 = (n, s = 2) => Math.pow(n, s);
// console.log(name1(2, 3));


// var user = {
//     name: "Name",
//     sName: "ASD",
//     getNameF: () => {
//         return this.name
//     },
//     getNameS: () => {
//         return this
//     },
//     getUserS: () => this

// }
// var user = {
//     name: "Name",
//     getNameF: function () {
//         return this.name;
//     },
//     getNameS: () => this.name,
//     getUserF: function () {
//         return this;
//     },
//     getUserS: () => this
// }

// console.log(user.getNameF());

// function getName() {
//     this.name
// }


// var shop1 = {
//     name: "awda",
//     getName: () => {
//         return this.name
//     },
//     getName: getName
// }
// // var shop2 = {
// //     name: "",
// //     getName: () => name
// // }

// var b = getName.bind(shop1.getName())
// console.log(shop1.getName());






// console.log(user.get());
// console.log(user2.get());

// function loadScript(src, callback) {
//     var script = document.createElement("script")
//     script.src = src
//     script.onload = () => callback(null);
//     script.onerror = () => callback({ message: "qwe", code: 404 });

//     document.head.append(script)
// }
// loadScript("./dz11.js", function (err,pespose) {
//     if (err) {
//         console.log("err");

//     }
//     else {
//         console.log(user);
//         console.log(user.name);

//     }

// });


// console.log(user.name);

// var loadScript = new Promise(function (resolve, reject) {
//     var script = document.createElement("script");
//     script.src = "./dz11.js";
//     script.onload = () => resolve(user);
//     script.onerror = () => reject({message: "не нашли файл", code: 404});
//     document.head.append(script);
// });

// loadScript
//     .then(secondPayload => console.log(secondPayload.name))
//     .catch(err => console.log(err))
//     .finally(()=> console.log("Промис отработал!"))



// var loadScript = function (src) {
//     return new Promise(function (resolve, reject) {
//         var script = document.createElement('script');
//         script.src = "./dz11.js"
//         script.onload = () => resolve("не отработал");
//         script.onerror = () => reject('error');
//         document.head.append(script);
//     });
// }
// loadScript('./dz11.js')
//     .then(payload => payload + "123")
//     .finally(() => console.log( user.name))
//     .catch(err => alert(err))


// var loadScript = new Promise(function (resolve, reject) {
//     var script = document.createElement("script");
//     script.src = "./test.js";
//     script.onload = () => resolve(user);
//     script.onerror = () => reject({ message: "не нашли файл", code: 404 });
//     document.head.append(script);
// });

// loadScript
//     .then(secondPayload => console.log(secondPayload.name))
//     .catch(err => console.log(err))
//     .finally(console.log(checkString("check")))


// var prom = function (src) {
//     return new Promise(function (resolve, reject) {
//         var script = document.createElement("script");
//         script.src = "./test.js";
//         script.onload = () => resolve(log)
//         script.onerror = () => reject(console.log("не нашли"))
//         document.head.append(script)
//     })
// } 





// var loadScript = function (src) {
//     return new Promise(function (resolve, reject) {
//       var script = document.createElement('script');
//       script.src = src;
//       script.onload = () => resolve(`файл "${src}`);
//       script.onerror = () => reject(err = { message: `файл "${src} не найден`, error: 404 });
//       document.head.append(script);
//     });
//   }

//   (function () {

//     loadScript(`./dz11.8.1.js`)
//       .then(secondValue => console.log(secondValue + " загружен"))
//       .catch(err => console.log(err))
//       .finally(() => console.log("Промис отработал"))

//     loadScript(`./dz11.8.2.js`)
//       .then(secondValue => console.log(secondValue + " загружен"))
//       .catch(err => console.log(err))
//       .finally(() => console.log("Промис отработал"))

//     loadScript(`./dz11.8.3.js`)
//       .then(secondValue => console.log(secondValue + " загружен"))
//       .catch(err => console.log(err))
//       .finally(() => console.log("Промис отработал"))

//     loadScript(`./dz11.8.4.js`)
//       .then(secondValue => console.log(secondValue + " загружен"))
//       .catch(err => console.log(err))
//       .finally(() => console.log("Промис отработал"))
//   })   // item.style.position = "relative";
// inputRename.style.position = "absolute";
// inputReprice.style.position = "absolute";
// avatar.style.backgroundRepeat = "no-repeat";
// avatar.style.backgroundSize = "cover";












//    var user = {
//     name: "Стас",
//     sName: "Стасов",
//     description: "бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла ",
//     countComments: 11,
//     countLikes: 11,
//     countStars: 11,
//     imgUrl: "https://w-dog.ru/wallpapers/4/7/433052223846463.jpg"
//  }


//  var wrapCard = document.getElementsByClassName("wrap-card_js")[0]
//  var card = document.createElement("div")
//  var avatar = document.createElement("div")
//  var title = document.createElement("h2")
//  var text = document.createElement("p")
//  var footer = document.createElement("div")

//  var message = document.createElement("div")
//  var like = document.createElement("div")
//  var star1 = document.createElement("div")

//  card.classList.add("card-w")
//  avatar.classList.add("avatar-w")
//  title.classList.add("title-w")
//  text.classList.add("text-w")
//  footer.classList.add("footer")

//  title.innerHTML = "awdawdaw"
//  text.innerHTML = "awdawdaw"



//  message.classList.add("message1")
//  like.classList.add("like1")
//  star1.classList.add("star1")

//  wrapCard.insertAdjacentElement("beforeend", card)
//  card.insertAdjacentElement("beforeend", avatar)
//  card.insertAdjacentElement("beforeend", title)
//  card.insertAdjacentElement("beforeend", text)
//  card.insertAdjacentElement("beforeend", footer)

//  footer.insertAdjacentElement("beforeend", message)
//  footer.insertAdjacentElement("beforeend", like)
//  footer.insertAdjacentElement("beforeend", star1) 

// var loadScriptProm = function (src) {
//    return new Promise(function (resolve, reject) {
//       var script = document.createElement('script');
//       script.src = src;
//       script.onload = () => resolve(`файл загружен"${src}`, addTextReporting(`${src} загрузился`), showСounter());
//       script.onerror = () => reject(err = { message: `файл "${src} не найден`, error: 404 }, addTextReporting(`${src} не загрузился`));
//       document.head.append(script);
//    });
// }

// var loadScript = function (src) {
//    return new Promise(function (resolve, reject) {
//       var script = document.createElement("script");
//       script.src = src;
//       script.onload = () => resolve("user");
//       script.onerror = () => reject({ message: "не нашли файл", code: 404 });
//       document.head.append(script);
//    });
// }
// Promise.all([loadScript(`./tes.js`), loadScript(`./test.js`)])
//    .then(payload => { console.log("qwe") })
//    .catch(err => { console.error(err) })

// Promise.allSettload([loadScript(`./test.js`), loadScript(`./test1.js`)])
//    .then(payload => { console.log(payload) }) 
// var loadScript2 = async function () {
//    var script = document.createElement("script");
//    script.src = src;
//    script.onload = () => Promise.resolve("user");
//    script.onerror = () => Promise.resolve({ message: "не нашли файл", code: 404 });
//    document.head.append(script);


// }

// Promise.allSettload([loadScript2(`./test.js`), loadScript2(`./test.js`)])
//    .then(payload => { console.log(payload) })
//    .catch(err => { console.error(err) })

// async function load() {
//    return 1
// }
// load().then(payload => console.log(payload))
// console.log(load());
// function isNum(num) {
//    if (Number(num) === Number(num)) {
//       return true
//    }
//    else {
//       throw {
//          message: "передано не число"
//       }
//    }
// }





// async function we() {
//    var promise = new Promise(function (resolve, reject) {
//       setTimeout(() => reject(1), 5000)
//       setTimeout(() => resolve(1), 10000)
//    })
// }
// var value
// try {
//    console.log("true начал работать");
//    isNum(1)
//    console.log("true закончил работать");
//    // value = await promise
// } catch (error) {
//    console.log("ошибка");

// }


// const btncon = document.getElementsByClassName("button-connection_js")[0]
// const input = document.getElementsByClassName("input-tex_js")[0]
// const input2 = document.getElementsByClassName("input-tex_js")[0]
// const btn = document.getElementsByClassName("btn_js")[0]
// btn.addEventListener("click", post)

// input2.addEventListener("keydown", async (e) => {
//     var request = await fetch("http://localhost/blog", {
//         method: "DELETE",
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({
//             _id: `${input2.value}`
//         }
//         )
//     })
//         .then(res => { return res.text() })
//         .then(res => console.log(res))
//         .catch(err => console.log(err))
// })


// async function post() {
//     var request = await fetch("http://localhost/blog", {
//         method: "POST",
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({
//             title: `${input.value}`, text: `${input2.value}`
//         }
//         )
//     })
//         .then(res => { return res.text() })
//         .then(res => console.log(res))
//         .catch(err => console.log(err))
// }

////*********** */
// var arr = [1, 22, 3, 4]
// class Task {
//     constructor(name) {
//         this.name = name
//     }
//     saiHy() {
//         console.log(`моё имя ${this.name}`)
//     }
//     search(arr, search) {
//         let position
//         let counter = 0
//         for (let i = 0; i < arr.length; i++) {
//             counter++
//             if (arr[i] == search) {
//                 console.log(counter);
//                 break
//             }

//         }
//     }
// }
// let clone = new Task("Vlad")
// clone.saiHy()
// clone.search(arr, 22)



// function slider() {
// const sliderLine = document.getElementsByClassName("slider__line_js")[0],
//     sliderСontrolLeft = document.getElementsByClassName("slider__control_js")[0],
//     sliderСontrolRight = document.getElementsByClassName("slider__control_js")[1],
//     sliderItem = document.querySelectorAll(".slider__item_js"),
//     sliderBoxBullet = document.getElementsByClassName("slider__box-bullet_js")[0];

// // вспомогательные переменные
// var quantityItem = sliderItem.length,
//     maxPosition = quantityItem,
//     position = 0,
//     coordinates = 0,
//     valueWidth = 100 / quantityItem,

//     color = [
//         "#9c9c9c", // Gray
//         "#3590cc", // Blue
//     ];


// // Стили по дэфолту

// // Создаём були, колечество булек = количество слайдов
// for (let index = 0; index < quantityItem; index++) {
//     let newBullet = document.createElement("div");
//     newBullet.classList.add("slider__bullet", "slider__bullet_js")
//     sliderBoxBullet.insertAdjacentElement("beforeend", newBullet);
// }
// const sliderBullet = document.querySelectorAll(".slider__bullet_js");



// // Перебираем все слайды и устонавливаем им ширину
// for (let i = 0; i < sliderItem.length; i++) {
//     sliderItem[i].style.width = `${valueWidth}%`;
// }
// // Ширина линии =  100 * количество слайдов
// sliderLine.style.width = `${100 * quantityItem}%`;

// sliderBullet[0].style.background = color[1];
// sliderСontrolLeft.style.opacity = "0.5";
// sliderСontrolLeft.style.cursor = "auto";

// sliderСontrolLeft.addEventListener("click", slideBack);
// sliderСontrolRight.addEventListener("click", slideForward);
// sliderLine.addEventListener("click", slideForward);

// body.addEventListener("keydown", (e) => {
//     if (e.keyCode == 39) {
//         slideForward();
//     }
//     else if (e.keyCode == 37) {
//         slideBack();
//     }
// })

// // Назад
// function slideBack() {
//     if (coordinates < 0) {
//         sliderLine.style.transform = `translateX(${coordinates + valueWidth}%)`;
//         coordinates = coordinates + valueWidth;

//         colorBullet();
//         if (sliderLine.style.transform == `translateX(0%)`) {
//             sliderСontrolLeft.style.opacity = "0.5";
//             sliderСontrolLeft.style.cursor = "auto";
//         }
//         return coordinates;
//     }
// }
// // Вперёд 
// function slideForward() {
//     if (maxPosition != position + 1) {
//         sliderLine.style.transform = `translateX(${coordinates - valueWidth}%)`;
//         position++;
//         coordinates = coordinates - valueWidth;
//         colorBullet();
//         sliderСontrolLeft.style.opacity = "1";
//         sliderСontrolLeft.style.cursor = "pointer";
//         return coordinates, position;
//     }
//     else {
//         sliderLine.style.transform = `translateX(0%)`;
//         coordinates = 0;
//         position = 0;
//         sliderСontrolLeft.style.opacity = "0.5";
//         sliderСontrolLeft.style.cursor = "auto";
//         colorBullet();
//         return coordinates, position;
//     }
// }
// Цвет були
// Перебирает все були и красит их
// В зависимости от позиции  слайда красит одну бульку в синий цвет

// function colorBullet() {
//     for (let i = 0; i < quantityItem; i++) {
//         if (coordinates == 0 - ((100 / quantityItem) * i)) {
//             for (let i = 0; i < sliderBullet.length; i++) {
//                 sliderBullet[i].style.background = color[0];
//             }
//             sliderBullet[i].style.background = color[1];
//             position = i;
//             return position;
//         }
//     }
// }

// // Перебирает все були и присваит им событие onclick
// // При нажатии на булю меняется позиция слайда
// for (let i = 0; i < quantityItem; i++) {
//     if (sliderBullet[i]) {
//         sliderBullet[i].onclick = function () {
//             sliderLine.style.transform = `translateX(${0 - ((100 / quantityItem) * i)}%)`;
//             coordinates = 0 - ((100 / quantityItem) * i);
//             sliderСontrolLeft.style.opacity = "1";
//             colorBullet();
//             return coordinates;
//         }
//     }
//     if (sliderBullet[0]) {
//         sliderBullet[0].onclick = function () {
//             sliderLine.style.transform = `translateX(${0 - ((100 / quantityItem) * 0)}%)`;
//             coordinates = 0 - ((100 / quantityItem) * 0);
//             sliderСontrolLeft.style.opacity = "0.5";
//             colorBullet();
//             return coordinates;
//         }
//     }
// }
// }



// function date() {
//    var dateResult = document.getElementsByClassName("date__result_js")[0],
//       dateInput = document.getElementsByClassName("date__input_js")[0],
//       idInterval;


//    dateInput.addEventListener("click", function clickInput() {
//       var cloneInputValue = "";
//       dateInput.value = "2020.10.10";

//       dateInput.addEventListener("keydown", function watchInput() {
//          //валидация инпута
//          setTimeout(function validInput() {
//             if (dateInput.value == " " || dateInput.value == "-") {
//                dateInput.value = cloneInputValue;
//             }
//             else if (dateInput.value != " " && dateInput.value != "-") {
//                cloneInputValue = dateInput.value;
//             }
//          }, 100)
//       })

//       body.onkeydown = function enterCompareDate(e) {
//          if (e.keyCode == 13) {
//             compareDate();
//          }
//       }
//       function compareDate() {
//          //если есть запущенный таймер - отменить и запустить новый с новыми данными
//          if (idInterval) {
//             clearInterval(idInterval);
//          }
//          // обработка полученных данных
//          var arrClone = dateInput.value;
//          arrClone = arrClone.split(".");
//          var arrDate = arrClone;
//          idInterval = setInterval(dateTimer, 1000);
//          dateTimer();

//          function dateTimer() {
//             var dateToday = new Date();
//             var number = 60;
//             var dateCurrent = new Date(`${arrDate[1]}/${arrDate[2]}/${arrDate[0]}`);
//             var clone = Math.ceil((dateCurrent - dateToday) / 1000);
//             var days = Math.floor(clone / (number * number * 24));
//             clone = clone % (number * number * 24);
//             var hours = Math.floor(clone / (number * number));
//             clone = clone % (number * number);
//             var minutes = Math.floor(clone / number);
//             clone = clone % number;
//             var second = clone;
//             //выводим результат если время не прошло
//             if (dateCurrent > dateToday) {
//                dateResult.innerHTML =
//                   days + " дней " +
//                   hours + " часов " +
//                   minutes + " минут " +
//                   second + " секунд ";
//                return idInterval;
//             }
//             //время прошло
//             else if (dateCurrent < dateToday) {
//                dateResult.innerHTML = "Время прошло как и 2007";
//                return idInterval;
//             }
//             // else {
//             //    //поругаться немного:)
//             //    dateResult.innerHTML = "";
//             //    var a = 0;
//             //    for (let i = 0; i < 6; i++) {
//             //       a = a + 500;
//             //       setTimeout(() => {
//             //          dateInput.classList.toggle("date__input_invalid_js");
//             //          return a;
//             //       }, a)
//             //    }
//             //    clearInterval(idInterval);
//             // }
//          }
//       }
//       // dateInput.removeEventListener("click", clickInput);
//    })
// }






