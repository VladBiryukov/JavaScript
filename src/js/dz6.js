dz6Tasc3()
function dz6Tasc3() {
    var body = document.body,
        contextMenu = document.getElementsByClassName("context-menu_js")[0],
        contextMenuItem_1 = document.getElementsByClassName("context-menu__item_js")[0],
        contextMenuItem_2 = document.getElementsByClassName("context-menu__item_js")[1],
        contextMenuItem_3 = document.getElementsByClassName("context-menu__item_js")[2],
        contextMenuItem_4 = document.getElementsByClassName("context-menu__item_js")[3],
        contextMenuItem_5 = document.getElementsByClassName("context-menu__item_js")[4],
        squareBlack,
        triangle,

        contextMenuText = [
            "Добавить/удалить квадрат",
            "Анимация квадрата",
            "Добавить/удалить треугольник",
            "Анимация треугольника",
            "Отчистить"
        ];

    contextMenuItem_1.innerHTML = contextMenuText[0];
    contextMenuItem_2.innerHTML = contextMenuText[1];
    contextMenuItem_3.innerHTML = contextMenuText[2];
    contextMenuItem_4.innerHTML = contextMenuText[3];
    contextMenuItem_5.innerHTML = contextMenuText[4];

    // показать меню
    body.oncontextmenu = function openContextMenu(e) {
        contextMenu.style.display = "block";
        contextMenu.style.top = e.clientY + "px";
        contextMenu.style.left = e.clientX + "px";
        positionContextMenuY = e.clientY + "px";
        positionContextMenuX = e.clientX + "px";
        return positionContextMenuY, positionContextMenuX, false;
    }

    body.addEventListener("click", (e) => {
        if (e.target !=contextMenu) {
            contextMenu.style.display = "none";
        }
    })
    // ESC
    body.addEventListener("keydown", function closeContextMenuKey(event) {
        if (event.keyCode == 27) {
            contextMenu.style.display = "none";
            clearField();
        }
    });

    // №1 добавляет/удаляет квадрат  
    contextMenuItem_1.addEventListener("click", function functionSquare() {
        body.removeEventListener("click", clickAddRemoveTriangle);
        body.removeEventListener("mousemove", leftRightTriangle);
        body.addEventListener("click", clickAddRemoveSquare);
    })

    // №2 bounce анимация квадрата
    contextMenuItem_2.addEventListener("click", function bounce() {
        body.removeEventListener("click", clickAddRemoveSquare);
        body.removeEventListener("click", clickAddRemoveTriangle);
        body.removeEventListener("mousemove", leftRightTriangle);
        if (squareBlack && squareBlack.classList == "square-black_js") {
            animationTopBottomSquare(squareBlack, 3);
        }
    })

    // №3 Добовить/удалить треугольник
    contextMenuItem_3.addEventListener("click", function functionTriangle() {
        body.removeEventListener("click", clickAddRemoveSquare);
        body.removeEventListener("mousemove", leftRightTriangle);
        body.addEventListener("click", clickAddRemoveTriangle);
    })

    // №4 Активация анимации треугольника
    contextMenuItem_4.addEventListener("click", function animationTriangle() {
        body.removeEventListener("click", clickAddRemoveSquare);
        body.removeEventListener("click", clickAddRemoveTriangle);
        if (triangle && triangle.classList == "triangle_js") {
            body.addEventListener("mousemove", leftRightTriangle);
        }
    })

    // № 5 Отчистка
    contextMenuItem_5.addEventListener("click", clearField);




    // ADD Квадрат
    function clickAddRemoveSquare(e) {

        if (!squareBlack) {
            createElements("div", "square-black_js", 1);
            squareBlack = document.getElementsByClassName("square-black_js")[0];
            squareBlack.style.top = positionContextMenuY;
            squareBlack.style.left = positionContextMenuX;
        }
        else if (squareBlack) {
            squareBlack.classList.toggle("square-black_hidden_js");
            squareBlack.style.top = e.clientY + "px";
            squareBlack.style.left = e.clientX + "px";
        }
    }
    squareBlack = document.getElementsByClassName("square-black_js")[0];



    // ADD треугольник
    function clickAddRemoveTriangle(e) {
        if (!triangle) {
            createElements("div", "triangle_js", 1);
            triangle = document.getElementsByClassName("triangle_js")[0];
            triangle.style.top = positionContextMenuY;
            triangle.style.left = positionContextMenuX;
        }
        else if (triangle) {
            triangle.classList.toggle("triangle_hidden_js");
            triangle.style.left = e.clientX + "px";
            triangle.style.top = e.clientY + "px";
        }
    }

    // Анимация квадрата, аргументы (предмет,сколько раз повторить цикл)
    function animationTopBottomSquare(thing, quantity) {
        var a = -1500;
        var b = -1000;
        for (var i = 0; i < quantity; i++) {
            a += 1500;
            b += 1500;
            setTimeout(function () {
                thing.style.transition = "0.5s";
                thing.style.transform = "translate(-50%,-100%)";
            }, a)
            setTimeout(function () {
                thing.style.transition = "1s";
                thing.style.transform = "translate(-50%,-50% )";
            }, b);
        }
    }
    // Анимация треугольника 
    function leftRightTriangle(e) {
        triangle.style.left = e.clientX + "px";
    }

    // почистить поле
    function clearField() {
        // убрать квадрат
        if (squareBlack) {
            body.removeEventListener("click", clickAddRemoveSquare);
            squareBlack.classList = "square-black_js square-black_hidden_js";
        }
        // убрать треугольник
        if (triangle) {
            body.removeEventListener("click", clickAddRemoveTriangle);
            triangle.classList = "triangle_js triangle_hidden_js";
        }
    }
}




















