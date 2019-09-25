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