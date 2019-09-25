var slider = new Slider("slider");
slider.defaultValue();
slider.clickSlide(1);
slider.clickBullet(true);
slider.keyArrowСontrol(true);
slider.mobileSwipe(true);
slider.clickСontrolRight(1);
slider.clickСontrolLeft(1);
slider.autoPlay(10000);

class Lamp {
    constructor(clas) {
        this.clas = clas;
        this.lampSection = document.getElementsByClassName(`${clas}_js`)[0];
        this.lampBlack = this.lampSection.getElementsByClassName(`${clas}__img-lamp_black_js`)[0]
        this.lampYellow = this.lampSection.getElementsByClassName(`${clas}__img-lamp_yellow_js`)[0]
        this.lampBlue = this.lampSection.getElementsByClassName(`${clas}__img-lamp_blue_js`)[0]
        this.lampTitle = this.lampSection.getElementsByClassName(`${clas}__title_js`)[0]

        this.color = [
            "rgba(0, 0, 0, 0.5)",        //(Black)  
            "rgba(239, 206, 74, 0.5)",   //(Yellow)  
            "rgba(66, 141, 255, 0.5)",   //(Blue)  
            "rgb(255, 255, 255)"         //White
        ]
        this.filterOpacity = [
            "opacity(0.5)",
            "opacity(1)"
        ]
        this.textTitle = [
            "наведите на лампочку",
            "навели на чёрную",
            "навели на жёлтую",
            "навели на синюю"
        ]
    }
    defaultValue() {
        this.lampTitle.innerHTML = this.textTitle[0];
        this.lampSection.style.background = this.color[3];
        this.lampBlack.style.filter = this.filterOpacity[0];
        this.lampYellow.style.filter = this.filterOpacity[0];
        this.lampBlue.style.filter = this.filterOpacity[0];
    }
    mouseEventlampBlack() {
        this.lampBlack.addEventListener("mouseover", () => {
            this.lampSection.style.background = this.color[0];
            this.lampBlack.style.filter = this.filterOpacity[1];
            this.lampTitle.innerHTML = this.textTitle[1];
        })
        this.lampBlack.addEventListener("mouseout", () => {
            this.lampSection.style.background = this.color[3];
            this.lampBlack.style.filter = this.filterOpacity[0];
            this.lampTitle.innerHTML = this.textTitle[0];

        })
    }
    mouseEventlampYellow() {
        this.lampYellow.addEventListener("mouseover", () => {
            this.lampSection.style.background = this.color[1];
            this.lampYellow.style.filter = this.filterOpacity[1];
            this.lampTitle.innerHTML = this.textTitle[2];
        })
        this.lampYellow.addEventListener("mouseout", () => {
            this.lampSection.style.background = this.color[3];
            this.lampYellow.style.filter = this.filterOpacity[0];
            this.lampTitle.innerHTML = this.textTitle[0];
        })
    }
    mouseEventlampBlue() {
        this.lampBlue.addEventListener("mouseover", () => {
            this.lampSection.style.background = this.color[2];
            this.lampBlue.style.filter = this.filterOpacity[1];
            this.lampTitle.innerHTML = this.textTitle[3];
        })
        this.lampBlue.addEventListener("mouseout", () => {
            this.lampSection.style.background = this.color[3];
            this.lampBlue.style.filter = this.filterOpacity[0];
            this.lampTitle.innerHTML = this.textTitle[0];
        })
    }
}
var lamp = new Lamp("lamp");
lamp.defaultValue()
lamp.mouseEventlampBlack()
lamp.mouseEventlampYellow()
lamp.mouseEventlampBlue()



class Parallax {
    constructor(clas) {
        this.clas = clas;
        this.boxParallax = document.getElementsByClassName(`${clas}__box_js`)[0];
        this.imgParallax = this.boxParallax.getElementsByClassName(`${clas}__img_js`)[0];
        this.parallaxOverlay = this.boxParallax.getElementsByClassName(`${clas}__overlay_js`)[0];
    }
    scrollParallax(lvl) {
        document.addEventListener("scroll", e => {
            this.imgParallax.style.transform = `translateY(${window.pageYOffset / lvl}px)`;
        })
    }
    blurOverlay() {
        this.boxParallax.addEventListener("mouseover", e => {
            this.parallaxOverlay.classList.add(`${this.clas}__overlay_active`)
        })

        this.boxParallax.addEventListener("mouseout", e => {
            this.parallaxOverlay.classList.remove(`${this.clas}__overlay_active`)
        })
    }
}

var parallax = new Parallax("parallax");
parallax.scrollParallax(15);
parallax.blurOverlay()




class LeftTime {
    constructor(clas) {
        this.clas = clas
        this.section = document.getElementsByClassName(`${clas}_js`)[0];
        this.result = document.getElementsByClassName(`${clas}__result_js`)[0];
        this.input = document.getElementsByClassName(`${clas}__input_js`)[0];
        this.inputValid = false
        this.idInterval

    }
    validationInput() {
        if (checkDate(this.input)) return this.inputValid = true
        else return this.inputValid = false;
    }

    checkKeyInput() {
        this.input.addEventListener("keydown", async () => {
            await this.delay(10)
            this.validationInput()
            if (this.inputValid) {
                this.compareDate()
            }
        })
        return this.inputValid;
    }


    clickInput() {
        this.input.addEventListener("click", () => {
            this.input.value = "2020.10.10";
        })
    }


    compareDate() {
        let arrClone = this.input.value;
        arrClone = arrClone.split(".");
        let arrDate = arrClone;
        let dateTimer = () => {
            var dateToday = new Date();
            var number = 60;
            var dateCurrent = new Date(`${arrDate[1]}/${arrDate[2]}/${arrDate[0]}`);
            var clone = Math.ceil((dateCurrent - dateToday) / 1000);
            var days = Math.floor(clone / (number * number * 24));
            clone = clone % (number * number * 24);
            var hours = Math.floor(clone / (number * number));
            clone = clone % (number * number);
            var minutes = Math.floor(clone / number);
            clone = clone % number;
            var second = clone;
            //выводим результат если время не прошло 
            if (dateCurrent > dateToday) {
                this.result.innerHTML =
                    days + " дней " +
                    hours + " часов " +
                    minutes + " минут " +
                    second + " секунд ";
                return this.idInterval;
            }
            //время прошло
            else if (dateCurrent < dateToday) {
                this.result.innerHTML = "Время прошло как и 2007";
                return this.idInterval;
            }
        }
        if (this.idInterval) {
            clearInterval(this.idInterval);
        }
        this.idInterval = setInterval(dateTimer, 1000);
        dateTimer()
    }

    async delay(ms) {
        ms = ms || 2000;
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve();
            }, ms);
        })
    }
}

var date = new LeftTime("date")
date.clickInput()
date.checkKeyInput()