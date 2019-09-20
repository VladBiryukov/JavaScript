




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

 




























