(() => {
   var steam = {
      // name: "steam",
      store: [
         { name: "The Elder Scrolls 5: Skyrim", price: 784, img: "https://i12.kanobu.ru/c/93b1762f2d993f2d4a10b489c0b6cf81/200x284/u.kanobu.ru/games/92/ce6661067e1c4efcbc53abff988ce988" },
         { name: "Grand Theft Auto 5", price: 1199, img: "https://i19.kanobu.ru/c/9b78be6f4896019b6d8e8ed7c947a653/200x284/u.kanobu.ru/games/265cd307-6821-43b4-a74f-81e2242c2cc3.jpg" },
         { name: "Diablo 2", price: 999999, img: "https://i13.kanobu.ru/c/99269da22c058d5e7bab94e7ed7e4e48/200x284/u.kanobu.ru/games/00c8f62b-a8f9-4b4d-84ae-54fc6a33a8f5.jpg" },
         { name: "Mafia 2", price: 499, img: "https://i10.kanobu.ru/c/b6dc6a012f0b5fd4c774cc074452daf3/200x284/u.kanobu.ru/games/72/25478a08b5414e78a1cb4764e959004d" },
         { name: "Far Cry 3", price: 269, img: "https://i05.kanobu.ru/c/e0070fb9b9777140432e391787fdd488/200x284/u.kanobu.ru/games/31/f19e86587b7f4341a77839717de01841" },
         { name: "Fallout 3", price: 1699, img: "https://i16.kanobu.ru/c/7fab19bda0f9813f3c4840da959c2470/200x284/u.kanobu.ru/games/25/eb5040699e594836873a091345d6b022" },
         { name: "Max Payne 3", price: 899, img: "https://i17.kanobu.ru/c/00b5fbb0fd0f82090f5c1614edefdcaf/200x284/u.kanobu.ru/games/8efa292a-2cbd-498c-9dba-445815244fc3.jpg" },
         { name: "Left 4 Dead 2", price: 299, img: "https://i14.kanobu.ru/c/18271d270a98b645c068474dae64ece6/200x284/u.kanobu.ru/entities/62/5aebf871-c7bb-4790-a09c-f0e6ad0afa1a.jpg" },
         { name: "Warcraft III: Reign of Chaos", price: 799, img: "https://i06.kanobu.ru/c/b6a013aaa989e571bd4005a0b661aaa3/200x284/u.kanobu.ru/games/38/81c54dea98944fa29b43a30ae45da7ea" },
      ],
   }
   var hookah = {
      // name: "hookah",
      store: [
         { name: "Brass", price: 29999, img: "https://static.tildacdn.com/tild6434-3133-4465-b766-363632623262/vz_brass_1.jpg" },
         { name: "Pandora", price: 27889, img: "https://static.tildacdn.com/tild6439-6165-4638-b463-653832633830/vz_pandora_1.jpg" },
         { name: "Pro", price: 25999, img: "https://static.tildacdn.com/tild6436-6638-4731-a631-396464616231/vz_pro_1.jpg" },
         { name: "Minimal", price: 28599, img: "https://static.tildacdn.com/tild6264-3434-4662-a136-613436313362/vz_minimal_1.jpg" },
         { name: "Raido", price: 25999, img: "https://static.tildacdn.com/tild3464-6465-4463-b031-383864643538/vz_raido_8.jpg" },
      ]
   }

   class Shop {
      constructor(shop, name) {
         this.name = name;
         this.shop = shop;

      }

      get init() {
         return this.shop.name = this.name;
      }
      set init(newValue) {
         return this.shop.name = newValue.split(' ').join('');
      }

      createElementToPage() {
         for (var i = 0; i < this.shop.store.length; i++) {
            const container = document.getElementsByClassName(`${this.shop.name}__container`)[0];
            const item = document.createElement("div");
            const name = document.createElement("div");
            const price = document.createElement("div");
            const deleteItem = document.createElement("div");
            const close = document.createElement("div");
            const inputRename = document.createElement("input");
            const inputReprice = document.createElement("input");
            const avatar = document.createElement("div");
            const boxAvatar = document.createElement("div");
            // добавляем им class  

            item.classList.add(`${this.shop.name}__item`, `${this.shop.name}__item_js`);
            name.classList.add(`${this.shop.name}__name`, `${this.shop.name}__name_js`);
            price.classList.add(`${this.shop.name}__price`, `${this.shop.name}__price_js`);
            deleteItem.classList.add(`${this.shop.name}__delete`, `${this.shop.name}__delete_js`);
            close.classList.add(`${this.shop.name}__close`, `${this.shop.name}__close_js`, `close`);
            inputRename.classList.add(`${this.shop.name}__rename`, `${this.shop.name}__rename_js`);
            inputReprice.classList.add(`${this.shop.name}__reprice`, `${this.shop.name}__reprice_js`);
            avatar.classList.add(`${this.shop.name}__avatar`, `${this.shop.name}__avatar_js`);
            boxAvatar.classList.add(`${this.shop.name}__box-avatar`, `${this.shop.name}__box-avatar_js`);
            //вспомогательная переменная 
            // ключеные стили 
            item.style.display = "flex";
            inputReprice.style.display = "none";
            inputRename.style.display = "none";
            avatar.style.background = `url("${this.shop.store[i].img}")0% 0% / cover no-repeat`;
            // довляем атрибут инпуту
            inputRename.setAttribute("placeholder", "Новое название...");
            inputReprice.setAttribute("placeholder", "Новое цена...");

            // добавляем текст   
            price.innerHTML = `${this.shop.store[i].price}`;
            name.innerHTML = `${this.shop.store[i].name}`;

            // собираем
            boxAvatar.insertAdjacentElement("beforeend", avatar);
            container.insertAdjacentElement("beforeend", item);
            item.insertAdjacentElement("beforeend", boxAvatar);
            item.insertAdjacentElement("beforeend", name);
            item.insertAdjacentElement("beforeend", price);
            item.insertAdjacentElement("beforeend", deleteItem);
            deleteItem.insertAdjacentElement("beforeend", close);
            name.insertAdjacentElement("beforeend", inputRename);
            price.insertAdjacentElement("beforeend", inputReprice);
            // присваиваем элементам события  
            var bindDeleteByCross = deleteByCross.bind(this.shop);
            var bidnRename = rename.bind(this.shop);
            var bindRePrice = rePrice.bind(this.shop);

            deleteItem.addEventListener("click", bindDeleteByCross);
            name.addEventListener("click", bidnRename);
            price.addEventListener("click", bindRePrice);



            // меняем название двойным кликом по названию  
            function deleteByCross(e) {
               // ищем позицию элемента в списке    

               for (let i = 0; i < this.store.length; i++) {
                  if (e.target == document.querySelectorAll(`.${this.name}__close_js`)[i]
                     || e.target == document.querySelectorAll(`.${this.name}__delete_js`)[i]) {
                     // удаляем из массива store объект   
                     this.store.splice(i, 1);
                     item.style.transform = "translateX(1300px)";
                     // удаляем элемент из DOM 
                     setTimeout(() => {
                        item.remove();
                     }, 400)
                     break;
                  }
               }
            }

            // // меняем название двойным кликом по названию   
            function rename(e) {
               let newName = document.querySelectorAll(`.${this.name}__name_js`);
               let input = document.querySelectorAll(`.${this.name}__rename_js`);
               let position;
               // определяеи позицию 
               for (let i = 0; i < this.store.length; i++) {
                  if (e.target == newName[i] || e.target == input[i]) {
                     // записывам позицию 
                     position = i;
                     break;
                  }
               }
               for (let i = 0; i < this.store.length; i++) {
                  if (input[i] != input[position]) {
                     input[i].style.display = "none";
                     input[i].value = this.store[i].name;
                  }
                  else {
                     input[i].value = this.store[i].name;
                     input[i].onblur = () => {
                        input[i].style.display = "none";
                     }
                     let newText = newName[i].childNodes[0];
                     input[i].style.display = "block";
                     input[i].addEventListener("keydown", (e) => {
                        if (e.keyCode == 13) {
                           newText.nodeValue = input[i].value;
                           this.store[i].name = input[i].value;
                           input[i].style.display = "none";
                        }
                        else if (e.keyCode == 27) {
                           input[i].style.display = "none";
                        }
                     })
                  }
               }

            }

            function rePrice(e) {
               const newPrice = document.querySelectorAll(`.${this.name}__price_js`);
               const input = document.querySelectorAll(`.${this.name}__reprice_js`);
               let position = 0;
               // определяеи позицию 
               for (let i = 0; i < this.store.length; i++) {
                  if (e.target == newPrice[i] || e.target == input[i]) {
                     // записывам позицию 
                     position = i;
                     break;
                  }
               }
               for (let i = 0; i < this.store.length; i++) {
                  if (input[i] != input[position]) {
                     input[i].style.display = "none";
                     input[i].value = this.store[i].price;
                  }
                  // сюда не ходи, тут страшный код который который можно сделать покрасивше
                  else {
                     input[i].onblur = () => {
                        input[i].style.display = "none";
                     }
                     let clone = this.store[i].price;
                     let newNumber = newPrice[i].childNodes[0];
                     input[i].value = this.store[i].price;
                     input[i].style.display = "block";
                     input[i].addEventListener("keydown", (e) => {
                        setTimeout(() => {
                           if (true) {
                              if (!checkInputSymbols(input[i]) && !checkInputStr(input[i]) && !/ /.test(input[i].value)) {
                                 clone = input[i].value;
                                 if (e.keyCode == 13) {
                                    newNumber.nodeValue = input[i].value;
                                    this.store[i].price = Number(input[i].value);
                                    input[i].style.display = "none";
                                 }
                              }
                              else input[i].value = clone;
                           }
                           if (e.keyCode == 27) {
                              input[i].style.display = "none";
                           }
                        }, 20);
                     })
                  }
               }
            }
         }
      }

      deleteResultSearch() {
         let item = document.querySelectorAll(`.${this.shop.name}__item_js`);
         let arr = [];
         // ищем позицию элементов со стилем d flex
         // записываем в arr
         for (let i = 0; i < item.length; i++) {
            if (item[i].style.display == "flex") {
               arr.push(i);
            }
         }
         let a = 1;
         for (let i = arr.length - 1; i >= 0; i--) {
            this.shop.store.splice(arr[i], 1);
            setTimeout(() => {
               item[arr[i]].style.transform = "translateX(1300px)";
               setTimeout(() => {
                  item[arr[i]].remove();

               }, 1200)
            }, a * i * 100)
         }
      }



      searchName() {
         let bindSearchName = searchName.bind(this.shop);
         let input = document.getElementsByClassName(`${this.shop.name}__input-search_js`)[0];
         function searchName(name) {

            let check;
            for (let i = 0; i < this.store.length; i++) {

               let notThat = document.getElementsByClassName(`${this.name}__item_js`)[i];
               if (notThat) {
                  notThat.style.display = "none";
                  check = this.store[i].name.indexOf(name);
                  if (check != Number(-1)) {
                     let exactMatch = document.getElementsByClassName(`${this.name}__item_js`)[i];
                     exactMatch.style.display = "flex";
                  }
                  if (document.getElementsByClassName(`${this.name}__input-search_js`)[0].value.length <= 0) {
                     for (let i = 0; i < this.store.length; i++) {
                        notThat.style.display = "flex";
                     }
                  }
               }
            }
         }

         input.addEventListener("keydown", (e) => {
            setTimeout(
               () => {
                  if (this.shop.store.length != 0) {
                     bindSearchName(`${input.value}`);
                  }
                  if (e.keyCode == 46) {
                     this.deleteResultSearch();
                  }
               }
               , 10)
            // setTimeout(
            //    () => {
            //       if (e.keyCode == 46) {
            //          this.deleteResultSearch();
            //       }
            //    }
            //    , 10)
         })
      }

      searchPrice() {
         let input = document.querySelectorAll(`.${this.shop.name}__search-price_js`);
         let item = document.querySelectorAll(`.${this.shop.name}__item_js`);

         let checkRange = (i) => {
            if (input[0].value <= this.shop.store[i].price && input[1].value >= this.shop.store[i].price) {
               return true;
            }
            else return false;
         }

         let checkKey = (e) => {
            if (e.keyCode == 27 || e.keyCode == 13) {
               for (let i = 0; i < input.length; i++) {
                  input[i].value = "";
               }
               for (let i = 0; i < this.shop.store.length; i++) {
                  item[i].style.display = "flex";
               }
            }
            else if (e.keyCode == 46) {
               this.deleteResultSearch();
            }

         }

         let inputProcessing = (e) => {
            if (e.keyCode != 27 && e.keyCode != 13) {
               setTimeout(() => {
                  if (input[0].value != 0 && input[1].value != 0) {
                     for (let i = 0; i < this.shop.store.length; i++) {
                        if (checkRange(i)) {
                           item[i].style.display = "flex";
                        }
                        else {
                           item[i].style.display = "none";
                        }
                     }
                  }
               }, 20);
            }
         }

         input[0].addEventListener("keydown", inputProcessing);
         input[1].addEventListener("keydown", inputProcessing);
         input[0].addEventListener("keydown", checkKey);
         input[1].addEventListener("keydown", checkKey);
      }
   }

   class Steam extends Shop { };
   class Hookah extends Shop { };

   var steam = new Steam(steam, "steam");
   // можн ввести 10 пробелов,надеюсь я правильно понял задание
   steam.init = " hookah";
   steam.init = "         steam ";
   steam.createElementToPage();
   steam.searchName();
   steam.searchPrice();

   var hookah = new Hookah(hookah, "hookah");
   hookah.init = "  steam      ";
   hookah.init = "  hookah    ";
   hookah.createElementToPage();
   hookah.searchName();
   hookah.searchPrice();
})()









class Slider {
   constructor(clas) {
      this.clas = clas;
      // this.block
      this.block = document.getElementsByClassName(`${clas}__block`)[0]
      // линия со слайдами
      this.sliderLine = this.block.getElementsByClassName(`${clas}__line_js`)[0];
      // стрелка влево
      this.sliderСontrolLeft = this.block.getElementsByClassName(`${clas}__control_js`)[0];
      // стрелка вправо
      this.sliderСontrolRight = this.block.getElementsByClassName(`${clas}__control_js`)[1];
      // slider items
      this.sliderItem = this.block.querySelectorAll(`.${clas}__item_js`);
      // box  с булями
      this.sliderBoxBullet = this.block.getElementsByClassName(`${clas}__box-bullet_js`)[0];
      // будущие були
      this.sliderBullet;
      // customn controls
      this.customControlsLeft;
      this.customControlsRight;
      this.customControls = false;
      // количество элементов
      this.quantityItem = this.sliderItem.length;
      // максимальная позиция слайда 
      this.maxPosition = this.quantityItem;
      // позиция 
      this.position = 0;
      // координаты 
      this.coordinates = 0;
      // ширина слайда
      this.valueWidth = 100 / this.quantityItem;
      // id interval
      this.idIntervalAutoPlay = false;
   }

   defaultValue() {
      // стили по умолчанию
      this.sliderСontrolLeft.classList.add("slider__control_opacity");
      // Перебираем все слайды и устонавливаем им ширину
      for (let i = 0; i < this.sliderItem.length; i++) {
         this.sliderItem[i].style.width = `${this.valueWidth}%`;
      }
      // Ширина линии =  100 * количество слайдов
      this.sliderLine.style.width = `${100 * this.quantityItem}%`;
      // Создаём були, колечество булек = количество слайдов
      for (let i = 0; i < this.quantityItem; i++) {
         let newBullet = document.createElement("div");
         newBullet.classList.add("slider__bullet", "slider__bullet_js");
         this.sliderBoxBullet.insertAdjacentElement("beforeend", newBullet);
         if (i == 0) newBullet.classList.add("slider__bullet_active");
      }
      this.sliderBullet = document.querySelectorAll(".slider__bullet_js");
      return this.sliderBullet;
   }

   clickBullet(activation) {
      if (activation) {
         // При нажатии на булю меняется позиция слайда
         for (let i = 0; i < this.quantityItem; i++) {
            if (this.sliderBullet[i]) {
               this.sliderBullet[i].onclick = () => {
                  this.sliderLine.style.transform = `translateX(${0 - ((100 / this.quantityItem) * i)}%)`;
                  this.coordinates = 0 - ((100 / this.quantityItem) * i);
                  this.position = i;
                  this.colorBullet();
                  this.colorСontrol();
                  this.colorCustomControls();
                  return this.position, this.coordinates;
               }
            }
         }
      }
   }



   clickSlide(jump) {
      this.sliderLine.addEventListener("click", () => {
         for (let i = 0; i < jump; i++) {
            this.slideNext();
            this.colorBullet();
            this.colorСontrol();
            this.colorCustomControls();
         }
      })
   }

   clickСontrolRight(jump) {
      this.sliderСontrolRight.addEventListener("click", () => {
         for (let i = 0; i < jump; i++) {
            this.slideNext();
            this.colorBullet();
            this.colorСontrol();
         }
      })
   }

   clickСontrolLeft(jump) {
      this.sliderСontrolLeft.addEventListener("click", () => {
         for (let i = 0; i < jump; i++) {
            this.slideBack();
            this.colorBullet();
            this.colorСontrol();
         }
      })
   }

   colorСontrol() {
      if (this.position == 0) this.sliderСontrolLeft.classList.add("slider__control_opacity");
      else this.sliderСontrolLeft.classList.remove("slider__control_opacity");
   }

   colorCustomControls() {
      if (this.customControls) {
         if (this.position == 0) this.customControlsLeft.classList.add("slider__control_opacity");
         else this.customControlsLeft.classList.remove("slider__control_opacity");
      }
   }

   colorBullet() {
      for (let i = 0; i < this.sliderBullet.length; i++) {
         if (this.position == i) this.sliderBullet[i].classList.add("slider__bullet_active");
         else this.sliderBullet[i].classList.remove("slider__bullet_active");
      }
   }

   slideNext() {
      if (this.maxPosition != this.position + 1) {
         this.sliderLine.style.transform = `translateX(${this.coordinates - this.valueWidth}%)`;
         this.position++;
         this.coordinates = this.coordinates - this.valueWidth;
         return this.coordinates, this.position;
      }
      else {
         this.sliderLine.style.transform = `translateX(0%)`;
         this.coordinates = 0;
         this.position = 0;
         return this.coordinates, this.position;
      }
   }

   slideBack() {
      if (this.position != 0) {
         this.sliderLine.style.transform = `translateX(${this.coordinates + this.valueWidth}%)`;
         this.coordinates = this.coordinates + this.valueWidth;
         this.position--;
         return this.coordinates, this.position;
      }
   }

   keyArrowСontrol(activation) {
      if (activation) {
         window.addEventListener("keydown", (e) => {
            if (e.keyCode == 39) {
               this.slideNext();
               this.colorBullet();
               this.colorСontrol();
               this.colorCustomControls();
            }
            else if (e.keyCode == 37) {
               this.slideBack();
               this.colorBullet();
               this.colorСontrol();
               this.colorCustomControls();
            }
         })
      }
   }

   inputControl(activation) {
      if (activation) {
         let input = document.createElement("input");
         input.type = "text";
         input.placeholder = "position slide";
         input.classList.add(`${this.clas}__input-control`);
         this.block.insertAdjacentElement("afterbegin", input);

         input.onkeydown = async (e) => {
            await this.delay(10);
            if (input.value >= 0 && input.value < this.maxPosition) {
               this.position = input.value;
               this.coordinates = 0 - (this.valueWidth * input.value)
               this.sliderLine.style.transform = `translateX(${this.coordinates}%)`;
               this.colorBullet();
               this.colorСontrol();
               this.colorCustomControls();
               return this.coordinates, this.position;
            }


            else if (input.value > this.maxPosition) {
               this.coordinates = (this.maxPosition - 1) * this.valueWidth;
               this.position = this.maxPosition - 1;
               this.sliderLine.style.transform = `translateX(-${this.coordinates}%)`;
               this.colorBullet();
               this.colorСontrol();
               this.colorCustomControls();
               return this.coordinates, this.position;
            }
         }
         return this.coordinates, this.position;
      }
   }

   clickCustomControls(left, right) {
      this.customControlsLeft = document.getElementsByClassName(left)[0];
      this.customControlsRight = document.getElementsByClassName(right)[0];

      if (this.customControlsLeft && this.customControlsRight) {
         this.customControls = true;
         // скрываем дэфолтные стрелки
         this.sliderСontrolLeft.classList.add("none");
         this.sliderСontrolRight.classList.add("none");
         this.colorCustomControls();
         this.customControlsLeft.onclick = () => {
            this.slideBack();
            this.colorBullet();
            this.colorCustomControls();
         }
         this.customControlsRight.onclick = () => {
            this.slideNext();
            this.colorBullet();
            this.colorCustomControls();
         }
         return this.customControlsLeft, this.customControlsRight, this.customControls;
      }
   }
   async delay(ms) {
      ms = ms || 2000;
      return new Promise((resolve) => {
         setTimeout(() => {
            resolve();
         }, ms);
      })
   }
   autoPlay(interval) {
      this.idIntervalAutoPlay = setInterval(() => {
         this.slideNext();
         this.colorBullet();
         this.colorСontrol();
         this.colorCustomControls();
      }, interval);
      return this.idIntervalAutoPlay;
   }

   mobileSwipe(activation) {
      if (activation) {
         let initialPoint;
         let finalPoint;
         this.sliderLine.addEventListener('touchstart', event => {
            this.sliderLine.classList.add("transition-none")
            event.preventDefault();
            event.stopPropagation();
            initialPoint = event.changedTouches[0];
         }, false);

         this.sliderLine.addEventListener('touchend', event => {
            this.sliderLine.classList.remove("transition-none")
            event.preventDefault();
            event.stopPropagation();
            finalPoint = event.changedTouches[0];
            var xAbs = Math.abs(initialPoint.pageX - finalPoint.pageX);

            if (xAbs > 20) {
               if (finalPoint.pageX < initialPoint.pageX) {
                  this.slideNext();
                  this.colorBullet();
                  this.colorСontrol();
                  this.colorCustomControls();
               }
               else {
                  this.slideBack();
                  this.colorBullet();
                  this.colorСontrol();
                  this.colorCustomControls();
               }
            }
         }, false);
      }
   }
}

var slider = new Slider("slider");
slider.defaultValue();
slider.clickSlide(1);
slider.clickBullet(true);
slider.keyArrowСontrol(true);
slider.inputControl(true);
slider.mobileSwipe(true);
slider.clickСontrolRight(1);
slider.clickСontrolLeft(1);
slider.clickCustomControls("slider__btn-left", "slider__btn-right");
slider.autoPlay(10000);