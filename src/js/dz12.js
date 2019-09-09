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




var user = {
   name: "Стас",
   sName: "Стасов",
   description: "бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла ",
   countComments: 11,
   countLikes: 11,
   countStars: 11,
   imgUrl: "https://w-dog.ru/wallpapers/4/7/433052223846463.jpg"
}


var wrapCard = document.getElementsByClassName("wrap-card_js")[0]
var card = document.createElement("div")
var avatar = document.createElement("div")
var title = document.createElement("h2")
var text = document.createElement("p")
var footer = document.createElement("div")

var message = document.createElement("div")
var like = document.createElement("div")
var star1 = document.createElement("div")

card.classList.add("card-w")
avatar.classList.add("avatar-w")
title.classList.add("title-w")
text.classList.add("text-w")
footer.classList.add("footer")

title.innerHTML = "awdawdaw"
text.innerHTML = "awdawdaw"

// avatar.style.background = `url(${})`



message.classList.add("message1")
like.classList.add("like1")
star1.classList.add("star1")

wrapCard.insertAdjacentElement("beforeend", card)
card.insertAdjacentElement("beforeend", avatar)
card.insertAdjacentElement("beforeend", title)
card.insertAdjacentElement("beforeend", text)
card.insertAdjacentElement("beforeend", footer)

footer.insertAdjacentElement("beforeend", message)
footer.insertAdjacentElement("beforeend", like)
footer.insertAdjacentElement("beforeend", star1) 
