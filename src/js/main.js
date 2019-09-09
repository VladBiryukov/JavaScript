const headerNav = document.querySelectorAll(".header__link_js");
const star = document.querySelectorAll(".header__rating-star_js");

let positionSite = 0; 
var arrStarState = [
    'url("./img/star-white.png") 0 0/contain no-repeat',
    'url("./img/star-gold.png") 0 0/contain no-repeat',
]

// ищет позицию среди страниц, подсвечтвает ссылку[номер позиции]
for (let i = 0; i < headerNav.length; i++) {
    if (document.URL == `https://biryukov-vlad.github.io/lesson-${i + 1}.html` ||
        document.URL == `http://localhost:3000/lesson-${i + 1}.html`) {
        headerNav[i].classList = "header__link_active-site_js";
        positionSite = i;
    }
}

if (!localStorage.getItem("test")) {
    var clone = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    localStorage.setItem("test", JSON.stringify(clone));
    console.log(localStorage.getItem("test"));

} 

let newArr = localStorage.getItem("test")
if (localStorage.getItem("test")) {
    newArr = JSON.parse(newArr);
    console.log(newArr);
    for (let i = 0; i < newArr[positionSite]; i++) {
        // красим звёзды в записимости от оценки, если её нет то цикл ничего не делает
        star[i].style.background = arrStarState[1];
    }
    if (newArr[positionSite] != 5) { 
        let position;
        let add = (e) => {
            // ищем позицию звезды на которую нажали
            for (let i = 0; i < star.length; i++) {
                if (e.target == star[i]) {
                    position = i;
                    star[i].style.background = arrStarState[1];
                    for (let i = 0; i < position; i++) {
                        star[i].style.background = arrStarState[1];
                        star[i].removeEventListener("click", add);
                    }
                    // записать оценку
                    newArr[positionSite] = position + 1;
                    var test = JSON.stringify(newArr);
                    console.log(test);

                    localStorage.clear("test");
                    localStorage.setItem("test", test);
                    break;
                }
            } 
        }
        star[0].addEventListener("click", add);
        star[1].addEventListener("click", add);
        star[2].addEventListener("click", add);
        star[3].addEventListener("click", add);
        star[4].addEventListener("click", add);
    }
}


// // красим звёзды в записимости от оценки, если её нет то цикл ничего не делает
// for (let i = 0; i < arrAssessment[positionSite]; i++) {
//     star[i].style.background = arrStarState[1];
// }
// let position;
// var add = (e) => {
//     // ищем позицию 
//     for (let i = 0; i < star.length; i++) {
//         if (e.target == star[i]) {
//             position = i;
//             star[i].style.background = arrStarState[1];
//             for (let i = 0; i < position; i++) {
//                 star[i].style.background = arrStarState[1];
//                 star[i].removeEventListener("click", add)
//             }
//             // записать оценку
//             arrAssessment[positionSite] = position + 1;
//             console.log(arrAssessment);

//             break;
//         }
//     }
//     // console.log(arrAssessment);
//     return arrAssessment
// }
// // console.log(arrAssessment);
// if (arrAssessment[positionSite] < 5) {
//     star[0].addEventListener("click", add)
//     star[1].addEventListener("click", add)
//     star[2].addEventListener("click", add)
//     star[3].addEventListener("click", add)
//     star[4].addEventListener("click", add)
// }

// var serialObl = JSON.stringify(arrAssessment)
// localStorage.setItem("serialObj", serialObl)
// localStorage.clear("test")
