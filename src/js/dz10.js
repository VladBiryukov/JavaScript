const inputSteam = document.getElementsByClassName("steam__input-search_js")[0];
const inputHookah = document.getElementsByClassName("hookah__input-search_js")[0];

function searchName(name) {
   let check
   for (let i = 0; i < this.store.length; i++) {

      let notThat = document.getElementsByClassName(`${this.name}__item_js`)[i];
      if (notThat) {
         notThat.style.display = "none"
         check = this.store[i].name.indexOf(name)
         if (check != Number(-1)) {
            let exactMatch = document.getElementsByClassName(`${this.name}__item_js`)[i];
            exactMatch.style.display = "flex"
         }
         if (document.getElementsByClassName(`${this.name}__input-search_js`)[0].value.length <= 0) {
            for (let i = 0; i < this.store.length; i++) {
               notThat.style.display = "flex"
            }
         }
      }

   }
}


var steam = {
   name: "steam",
   store: [
      { name: "The Elder Scrolls 5: Skyrim", price: 784 },
      { name: "Grand Theft Auto 5", price: 1199 },
      { name: "Mafia 2", price: 499 },
      { name: "Far Cry 3", price: 269 },
      // { name: "Fallout 3", price: 1699 },
      // { name: "Tomb Raider (2013)", price: 999 },
      // { name: "Max Payne 3", price: 899 },
      // { name: "Left 4 Dead 2", price: 299 },
      // { name: "Warcraft III: Reign of Chaos", price: 799 },
      // { name: "Diablo 2", price: 99999 },
   ],
   search: searchName,
   create: createItem,
   deleteResultSearch: deleteResultSearch
}
var hookah = {
   name: "hookah",
   store: [
      { name: "кальян1", price: 784 },
      { name: "кальян2", price: 1199 },
      { name: "кальян3", price: 499 },
   ],
   search: searchName,
   create: createItem,
   deleteResultSearch: deleteResultSearch
}


for (var i = 0; i < steam.store.length; i++) {
   steam.create();
}
for (var i = 0; i < hookah.store.length; i++) {
   hookah.create();
}

inputSteam.addEventListener("keydown", (e) => {
   setTimeout(
      () => {
         if (steam.store.length != 0) {
            steam.search(`${inputSteam.value}`);
         }
      }
      , 20)
   setTimeout(
      () => {
         if (e.keyCode == 46) {
            steam.deleteResultSearch()
         }
      }
      , 20)
})

inputHookah.addEventListener("keydown", (e) => {
   setTimeout(
      () => {
         if (hookah.store.length != 0) {
            hookah.search(`${inputHookah.value}`)
         }
      }
      , 20)
   setTimeout(
      () => {
         if (e.keyCode == 46) {
            hookah.deleteResultSearch()
         }
      }
      , 20)
}) 

// удалить элемент/элементы  
function deleteResultSearch() {

   let item = document.querySelectorAll(`.${this.name}__item_js`)
   let arr = [];
   // ищем позицию элементов со стилем d flex
   // записываем в arr
   for (let i = 0; i < item.length; i++) {
      if (item[i].style.display == "flex") {
         arr.push(i)
      }
   }
   let a = 1;
   for (let i = arr.length - 1; i >= 0; i--) {
      this.store.splice(arr[i], 1);
      setTimeout(() => {
         item[arr[i]].style.transform = "translateX(1300px)"
         setTimeout(() => {
            item[arr[i]].remove();
         }, 1200)
      }, a * i * 100)
   }
}


function createItem() {
   let container = document.getElementsByClassName(`${this.name}__container`)[0]
   // создаём div

   let item = document.createElement("div");
   let name = document.createElement("div");
   let price = document.createElement("div");
   let deleteItem = document.createElement("div");
   let close = document.createElement("div");
   let inputRename = document.createElement("input");
   let inputReprice = document.createElement("input");
   // добавляем им class 
   item.classList.add(`${this.name}__item`, `${this.name}__item_js`);
   name.classList.add(`${this.name}__name`, `${this.name}__name_js`);
   price.classList.add(`${this.name}__price`, `${this.name}__price_js`);
   deleteItem.classList.add(`${this.name}__delete`, `${this.name}__delete_js`);
   close.classList.add(`${this.name}__close`, `${this.name}__close_js`, `close`);
   inputRename.classList.add(`${this.name}__rename`, `${this.name}__rename_js`);
   inputReprice.classList.add(`${this.name}__reprice`, `${this.name}__reprice_js`);

   //вспомогательная переменная
   let that = this
   // ключеные стили 
   item.style.display = "flex"
   item.style.position = "relative"
   inputRename.style.position = "absolute"
   inputRename.style.display = "none"
   inputReprice.style.position = "absolute"
   inputReprice.style.display = "none"
   // довляем атрибут инпуту
   inputRename.setAttribute("placeholder", "Новое название...")
   inputReprice.setAttribute("placeholder", "Новое цена...")

   // добавляем текст   
   price.innerHTML = `${this.store[i].price}`;
   name.innerHTML = `${this.store[i].name}`;

   // собираем
   container.insertAdjacentElement("beforeend", item);
   item.insertAdjacentElement("beforeend", name);
   item.insertAdjacentElement("beforeend", price);
   item.insertAdjacentElement("beforeend", deleteItem);
   deleteItem.insertAdjacentElement("beforeend", close);
   name.insertAdjacentElement("beforeend", inputRename);
   price.insertAdjacentElement("beforeend", inputReprice);
   // присваиваем элементам события 

   // удаление кликом по крестику
   deleteItem.addEventListener("click", function deleteByCross(e) {
      // ищем позицию элемента в списке    
      for (let i = 0; i < that.store.length; i++) {
         if (e.target == document.querySelectorAll(`.${that.name}__close_js`)[i]
            || e.target == document.querySelectorAll(`.${that.name}__delete_js`)[i]) {
            // удаляем из массива store объект   
            that.store.splice(i, 1);
            item.style.transform = "translateX(1300px)";
            // удаляем элемент из DOM 
            setTimeout(() => {
               item.remove();
            }, 400)
            break;
         }
      }
   })


   // можно встроить в объект
   // меняем название двойным кликом по названию  
   name.addEventListener("dblclick", function rename(e) {
      let newName = document.querySelectorAll(`.${that.name}__name_js`);
      let input = document.querySelectorAll(`.${that.name}__rename_js`);
      //скрыть все инпуты rename 

      for (let i = 0; i < that.store.length; i++) {
         input[i].style.display = "none";
         input[i].value = that.store[i].name
      }
      // ищем позицию по которой был совершён даблклик

      for (let i = 0; i < that.store.length; i++) {
         //показать инпут  с позицией i (если соответствует)
         if (e.target == newName[i]) {
            let newText = newName[i].childNodes[0];
            input[i].style.display = "block";
            input[i].addEventListener("keydown", function n(e) {
               if (e.keyCode == 13) {
                  newText.nodeValue = input[i].value;
                  that.store[i].name = input[i].value;
                  input[i].style.display = "none";
               }
               else if (e.keyCode == 27) {
                  input[i].style.display = "none";
               }
            })
            break;
         }
      }
   })

   price.addEventListener("dblclick", function rename(e) {
      let newPrice = document.querySelectorAll(`.${that.name}__price_js`);
      let input = document.querySelectorAll(`.${that.name}__reprice_js`);
      //скрыть все инпуты reprice
      for (let i = 0; i < that.store.length; i++) {
         input[i].style.display = "none";
         input[i].value = that.store[i].price
      }
      // ищем позицию по которой был совершён даблклик
      for (let i = 0; i < that.store.length; i++) {
         //показать инпут  с позицией i (если соответствует)
         if (e.target == newPrice[i]) {
            let newNumber = newPrice[i].childNodes[0];
            input[i].style.display = "block";
            var clone = that.store[i].price
            input[i].addEventListener("keydown", function n(e) {
               setTimeout(() => {
                  if (true) {
                     if (!checkInputSymbols(input[i]) && !checkInputStr(input[i]) && !/ /.test(input[i].value)) {
                        clone = input[i].value
                        if (e.keyCode == 13) {
                           newNumber.nodeValue = input[i].value;
                           that.store[i].price = Number(input[i].value);
                           input[i].style.display = "none";
                        }
                     }
                     else input[i].value = clone
                  }
                  if (e.keyCode == 27) {
                     input[i].style.display = "none";
                  }
               }, 20);
            })
            break;
         }
      }
   })

}


















// встроить в объект, разделить на две функции input == this

