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


let newArr = localStorage.getItem("test")

if (newArr !== undefined || newArr !== null) {
    newArr = JSON.parse(newArr)
    console.log(newArr);
    for (let i = 0; i < newArr[positionSite]; i++) {
        // красим звёзды в записимости от оценки, если её нет то цикл ничего не делает

        star[i].style.background = arrStarState[1];


    }
    if (newArr[positionSite] != 5) {
        // let arrAssessment = []
        let position;
        let add = (e) => {
            // ищем позицию звезды на которую нажали
            for (let i = 0; i < star.length; i++) {
                if (e.target == star[i]) {
                    position = i;
                    star[i].style.background = arrStarState[1];
                    for (let i = 0; i < position; i++) {
                        star[i].style.background = arrStarState[1];
                        star[i].removeEventListener("click", add)
                    }
                    // записать оценку
                    newArr[positionSite] = position + 1;
                    var test = JSON.stringify(newArr)
                    console.log(test);

                    localStorage.clear("test")
                    localStorage.setItem("test", test)
                    break;
                }
            }
            // console.log(arrAssessment);
            // return arrAssessment
        }
        star[0].addEventListener("click", add)
        star[1].addEventListener("click", add)
        star[2].addEventListener("click", add)
        star[3].addEventListener("click", add)
        star[4].addEventListener("click", add)
    }
}

