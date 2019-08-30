var block,
    message;

// *** первое задание ***
createElements("div", "block_js", 1);

block = document.getElementsByClassName("block_js")[0];
block.innerHTML = "cat-metal";



// *** второе задание ***
function showClass() {
    message = prompt("Введите название класса", "block_js");  //
    if (checkClass(message)) {
        console.log("содержимое класса " + '"' + message + '": ' + document.getElementsByClassName(message)[0].innerHTML);
    }
    else if (!checkClass(message)) console.log("класс " + message + " не найден");
};

showClass();

// проверяет наличие класса
function checkClass(nameClass) {
    if (document.getElementsByClassName(nameClass)[0]) return true;
    else return false;
}

//*** третье задание ***  
block.classList.add("block_test", "block_black");



createElements("div", "wrap-square", 1);
var wrap = document.getElementsByClassName("wrap-square")[0];
for (var i = 0; i < 4; i++) {
    wrap.innerHTML += '<div class="square_js"></div>';
}
for (var i = 0; i < document.getElementsByClassName("square_js").length; i++) {
    document.getElementsByClassName("square_js")[i].innerHTML = i + 1;
    document.getElementsByClassName("square_js")[i].classList.add("square-default_js", "square_" + (i + 1) + "_js");
}

var square_1 = document.getElementsByClassName("square_js")[0],
    square_2 = document.getElementsByClassName("square_js")[1],
    square_3 = document.getElementsByClassName("square_js")[2],
    square_4 = document.getElementsByClassName("square_js")[3];

var position = ["",
    "square-top-left_js",
    "square-top-right_js",
    "square-bottom-right_js",
    "square-bottom-left_js"
]

function animationSquare() {
    setTimeout(function name() {
        square_1.classList.toggle(position[2]);
        square_2.classList.toggle(position[3]);
        square_3.classList.toggle(position[4]);
        square_4.classList.toggle(position[1]);
    }, 0)
    setTimeout(function name() {
        square_1.classList.toggle(position[2]);
        square_1.classList.toggle(position[3]);
        square_2.classList.toggle(position[3]);
        square_2.classList.toggle(position[4]);
        square_3.classList.toggle(position[4]);
        square_3.classList.toggle(position[1]);
        square_4.classList.toggle(position[1]);
        square_4.classList.toggle(position[2]);
    }, 2000)
    setTimeout(function name() {
        square_1.classList.toggle(position[3]);
        square_1.classList.toggle(position[4]);
        square_2.classList.toggle(position[4]);
        square_2.classList.toggle(position[1]);
        square_3.classList.toggle(position[1]);
        square_3.classList.toggle(position[2]);
        square_4.classList.toggle(position[2]);
        square_4.classList.toggle(position[3]);
    }, 4000)
    setTimeout(function name() {
        square_1.classList.toggle(position[4]);
        square_1.classList.toggle(position[1]);
        square_2.classList.toggle(position[2]);
        square_3.classList.toggle(position[2]);
        square_3.classList.toggle(position[3]);
        square_4.classList.toggle(position[3]);
        square_4.classList.toggle(position[4]);
    }, 6000)
}
animationSquare()



////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////

var button = document.getElementsByClassName("button_start_js")[0],
    countdown = document.getElementsByClassName("countdown_js")[0],
    mechanism = document.getElementsByClassName("mechanism_js")[0],
    shell = document.getElementsByClassName("shell")[0];


button.onclick = function () {
    button.style.opacity = "0.1"
    for (var i = 0; i < Number(countdown.innerHTML); i++) {
        setTimeout(function () {
            countdown.innerHTML = countdown.innerHTML - Number(1);
            if (countdown.innerHTML == 0) {
                countdown.innerHTML = "BOOM!"
            }
        }, (i + 1) * 1000)
    }
    setTimeout(function () {
        mechanism.classList.add("mechanism_fire_js");
    }, countdown.innerHTML * 1000)
    setTimeout(function () {
        shell.classList.add("shell_fire_js");
    }, countdown.innerHTML * 1000);
}



