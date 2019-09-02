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


/**
 * 
 * @param {input} принимает инпут
 * смотрит input.value и ищет букву
 * если находит-true
 * иначе - false
 * @return false||true
 */
function checkInputStr(input) {
    if (/ *[a-zа-я]/i.test(input.value)) return true;
    else false;
}
/**
 * 
 * @param {input} принимает инпут
 * смотрит input.value и ищет символ
 * если находит-true
 * иначе - false
 * @return false||true
 */
function checkInputSymbols(input) {
    if (/ *[.|<|>|?|;|:|"|'|`|!|@|#|$|%|^|&|*|(|)|\|[|{|}|_|+|=|,]/.test(input.value)) return true;
    else false;
}


// проверка на ввод   
function checkInput(check) {
    if (check != "" && check != " " && check != "none" && check != "null" && check != null) return true;
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