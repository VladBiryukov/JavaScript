



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




































