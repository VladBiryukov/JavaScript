/*************************** Инструменты *****************************/
/*************************** Функциии  ******************************/
//проверка на Number
function checkNumber(check) {
    if (String(Number(check)) != "NaN" && check !== "") return true;
    else return false;
}
//проверка на String
function checkString(check) {
    if (String(Number(check)) == "NaN" && check !== "") return true;
    else return false;
}
// проверка на ввод   
function checkInput(check) {
    if (check != "" && check != "none" && check != "null" && check != null) return true;
    else return false;
}
// добавляет n количество элементов с class
function createElements(element, name, quantity) {
    var createDiv;
    for (var i = 0; i < quantity; i++) {
        createDiv = document.createElement(element);
        createDiv.classList = name;
        document.body.appendChild(createDiv);
    }
}