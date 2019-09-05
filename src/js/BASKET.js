



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

