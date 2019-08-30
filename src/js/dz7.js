dz7Task1()
dz7Task2()
dz7Task3()



function dz7Task1() {
    var inputlist = document.getElementsByClassName("list__input_js")[0],
        listCard = document.getElementsByClassName("list__card_js")[0],
        buttonList = document.getElementsByClassName("list__button_js")[0],
        body = document.body;


    buttonList.addEventListener("click", addNewElementList);
    body.addEventListener("keydown", checkKay);

    function checkKay(e) {
        if (e.keyCode == 13) {
            addNewElementList();
        }
    }

    function addNewElementList() {
        if (!checkInput(inputlist.value)) {
            setTimeout(() => {
                inputlist.classList.toggle("list__input_invalid_js");
            }, 0)
            setTimeout(() => {
                inputlist.classList.toggle("list__input_invalid_js");
            }, 500)

        }
        if (checkInput(inputlist.value) && buttonList.innerHTML != "сохранить изменения") {
            let newListItem = document.createElement("div");
            newListItem.classList.add("list__item");
            listCard.insertAdjacentElement("beforeend", newListItem);
            newListItem.innerHTML = inputlist.value;
            inputlist.value = "";

            newListItem.addEventListener("dblclick", () => {
                inputlist.value = "";
                newListItem.style.transform = "translateX(100%)"
                setTimeout(function () {
                    newListItem.remove();
                    buttonList.innerHTML = "новая запись";
                    inputlist.value = "";
                }, 200)
            })
            // внести изменения
            newListItem.addEventListener("click", function changeListItem() {
                if (inputlist.value != newListItem.innerHTML) {
                    setTimeout(function () {
                        inputlist.value = newListItem.innerHTML;
                        buttonList.innerHTML = "сохранить изменения";
                    }, 50)

                    // сохраняет изменения
                    buttonList.addEventListener("click", saveСhanges)
                    body.onkeydown = function keySaveСhanges(key) {
                        if (key.keyCode == 13) {
                            saveСhanges();
                        }
                    }
                    function saveСhanges() {
                        var clone = newListItem.innerHTML;
                        if (inputlist.value != "") clone = inputlist.value;
                        inputlist.value = "";
                        buttonList.innerHTML = "новая запись";
                        buttonList.removeEventListener("click", saveСhanges);
                        return newListItem.innerHTML = clone;
                    }
                }
            })
        }
    }
}

 

function dz7Task2() {
    var body = document.body,
        inputTemper = document.getElementsByClassName("temperature__input_js")[0],
        button = document.getElementsByClassName("temperature__button_js")[0],
        temperSection = document.getElementsByClassName("temperature_js")[0],
        temperResult = document.getElementsByClassName("temperature__resilt_js")[0],
        idIntervalTemper,
        result,
        bgTemper = ["rgb(5, 106, 189)", "rgb(166, 190, 29)", "rgb(255, 38, 0)", "rgb(197, 180, 25)"],
        colorTemper = ["rgb(61, 36, 172)", "#fff", "rgb(150, 66, 17)"];

    function updateInput() {
        // знаю что не правильно, тут я просто практиковался с setInterval
        idIntervalTemper = setInterval(function () {
            if (inputTemper.value != "" && inputTemper.value != false || inputTemper.value === "0") {
                result = Number(inputTemper.value) * 1.8 + 32;

                if (inputTemper.value < -270 || inputTemper.value > 200) {
                    temperResult.innerHTML = "Результат: Такая температура не существует";
                }

                else if (checkInput(result) && checkNumber(result)) {
                    inputTemper.style.color = "black";
                    temperResult.innerHTML = `Результат: ${Number(inputTemper.value)}C&deg; = ${result}F&deg;`;
                    if (inputTemper.value < 10) {
                        temperSection.style.background = bgTemper[0];
                        temperSection.style.color = colorTemper[1];
                    }
                    else if (inputTemper.value < 25) {
                        temperSection.style.background = bgTemper[1];
                    }
                    else if (Number(inputTemper.value) > 10) {
                        temperSection.style.background = bgTemper[2];
                    }
                }
                else {
                    inputTemper.style.color = "red";
                    temperResult.innerHTML = "Результат:";
                }
            }
            else if (inputTemper.value == "") {
                inputTemper.style.color = "black";
                temperResult.innerHTML = "Результат:";
            }

        }, 50)
        return idIntervalTemper;
    }

    inputTemper.addEventListener("click", updateInput);

    window.addEventListener("click", function (e) {
        if (e.target != inputTemper/* e.target == body || e.target == temperBlock */) {
            inputTemper.value = "";
            inputTemper.style.color = "black";
            temperResult.innerHTML = "Результат:";
            temperSection.style.background = bgTemper[3];
            temperSection.style.color = colorTemper[2];
            clearTimeout(idIntervalTemper);
        }
    })
}




function dz7Task3() {
    var square = document.getElementsByClassName("square_js")[0],
        boxSquare = document.getElementsByClassName("box-square_js")[0],
        mechanism = document.getElementsByClassName("mechanism_js")[0],
        y = 0,
        x = 0,
        c = -136;
    var idSquareAnimate = setInterval(function () {

        if (x >= 0 && x < 400 && y == 0) {
            square.style.left = x++;
        }
        else if (x == 400 && y < 400) {
            square.style.top = y++;
        }
        else if (x <= 400 && x != 0 && y == 400) {
            square.style.left = x--;
        }
        else if (y <= 400 && x == 0) {
            square.style.top = y--;
        }
    }, 2)
    setTimeout(() => setInterval(function () {
        mechanism.style.transform = `rotate(${c++}deg)`;
        if (mechanism.style.transform == "rotate(350deg)") {
            square.innerHTML = "NOOO!!!";
            square.style.transition = "1s";
            square.style.background = "red";
            clearInterval(idSquareAnimate);
        }
    }, 18), 750)
}











































