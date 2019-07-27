var message,
    value_1,
    value_2,
    check_1,
    check_2;

message = prompt("какие типы данных вам нужно сравнить между собой? \nможно сравнивать: \nчисла \nстроки \nвыведет наибольшее ");

if (message === "") {
    console.log("вы ничего не ввели");
}
else if (message == "числа") {
    message = prompt("Введите первое значение");
    value_1 = message;
    message = prompt("Введите второе значение");
    value_2 = message;
    check_1 = + value_1;
    check_2 = + value_2;


    if (check_1 === Number(check_1) && check_2 === Number(check_2)) {
        if (check_1 == "" && check_2 == "") {
            console.log("вы ничего не ввели")
        }
        else if (check_1 == "" || check_2 == "") {
            console.log("вы не ввели один из аргументов")
        }
        else if (check_1 !== Number(check_1) && check_2 === Number(check_2)) {
            console.log("первый аргумент строка, а второй аргумент - число, приведите идентичные типы данных")
        }
        else if (check_1 === Number(check_1) && check_2 !== Number(check_2)) {
            console.log("первый аргумент число, а второй аргумент - строка, приведите идентичные типы данных")
        }
        else if (check_1 > check_2) {
            console.log(value_1)
        }
        else if (check_1 < check_2) {
            console.log(value_2)
        }
        else if (check_1 == check_2) {
            console.log(value_1)
        }
        else {
            console.log("что то не так")
        }
    }
}
else if (message == "строки") {
    message = prompt("введите первую строку");
    value_1 = message;
    message = prompt("введите вторую строку");
    value_2 = message;
    check_1 = + value_1;
    check_2 = + value_2;
    // фильтр
    if (check_1 == "" && check_2 == "") {
        console.log("вы ничего не ввели")
    }
    else if (check_1 == "" || check_2 == "") {
        console.log("вы не ввели один из аргументов")
    }
    else if (check_1 !== Number(check_1) && check_2 === Number(check_2)) {
        console.log("первый аргумент строка, а второй аргумент - число, приведите идентичные типы данных")
    }
    else if (check_1 === Number(check_1) && check_2 !== Number(check_2)) {
        console.log("первый аргумент число, а второй аргумент - строка, приведите идентичные типы данных")
    }
    else if (check_1 === Number(check_1) && check_2 === Number(check_2)) {
        console.log("тут мы сравниваем строки")
    }
    //сравнение букв
    else if (value_1 !== Number(value_1) && value_2 !== Number(value_2)) {

        if (value_1 > value_2) {
            console.log(value_1);
        }
        else if (value_1 < value_2) {
            console.log(value_2)
        }
        else if (value_1 === value_2) {
            console.log("буквы равны")
        }
    }
}


// var compare,
//     number_1,
//     number_2,
//     letter_1,
//     letter_2,
//     type_1,
//     type_2;

// compare = prompt("Что нужно сравнить: \nчисла \nстроки");
// if (compare == "") {
//     console.log("вы ничего не ввели")
// }
// // сравнивает Только числа 
// else if (compare === "числа") {
//     compare = prompt("введите первое число");
//     number_1 = compare;
//     compare = prompt("введите второе число");
//     number_2 = compare;
//     number_1 = Number(number_1);
//     number_2 = Number(number_2);
//     if (number_1 !== Number(number_1) && number_2 !== Number(number_2)) {
//         console.log("вы сравниваетет строки, если хотете сравнить строку, в начале нужно ввести 'строки' или, если вы забыли переключить язык на русский 'cnhjrb' ");
//     }
//     // проверка на число
//     // если число то идём дальше

//     else if (number_1 === Number(number_1) && number_2 === Number(number_2)) {
//         if (number_1 != "" && number_2 != "") {
//             if (number_1 < number_2) {
//                 console.log(number_2);
//             }
//             else if (number_1 > number_2) {
//                 console.log(number_1);
//             }
//             else if (number_1 == "" && number_2 == "") {
//                 alert("вы ничего не ввели")
//             }
//         }
//         else if (number_1 == "" && number_2 == "") {
//             console.log("вы ничего не ввели")
//         }
//         else if (number_1 == "") {
//             console.log("вы не указали первое число")
//         }
//         else if (number_2 == "") {
//             console.log("вы не указали первое число")
//         }
//         else {
//         }
//     }
//     else if (number_1 !== Number(number_1)) {
//         console.log("первым аргументом вы ввели строку");
//     }
//     else if (number_2 !== Number(number_2)) {
//         console.log("вторым аргументом вы ввели строку");
//     }
//     else {
//         console.log("что то пошло не так")
//     }
// }
// если нан то передать значение , тоесть сделать копию с которой можно будет дальше работать потому что первое значение будет равно nan 





























