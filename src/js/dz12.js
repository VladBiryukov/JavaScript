(() => {
   const blockDate = document.getElementsByClassName("date__block_js")[0];
   const blockLamp = document.getElementsByClassName("lamp__block_js")[0];
   const blockParallax = document.getElementsByClassName("parallax__block_js")[0];
   const blockSlider = document.getElementsByClassName("slider__block_js")[0];
   const wrap = document.getElementsByClassName("wrap_js")[0];
   var counter = 0;
   // task1()
   // task2()
   task3().then(message => console.log("функция завершила работу"));

   let textCounter = document.createElement("div");
   textCounter.innerText = "количество загруженных файлов: ";
   textCounter.classList.add("info-counter");
   wrap.insertAdjacentElement("afterbegin", textCounter);

   function loadScriptProm(src) {
      return new Promise(function (resolve, reject) {
         var script = document.createElement('script');
         script.src = src;
         script.onload = () => resolve(`файл загружен"${src}`);
         script.onerror = () => reject(err = { message: `файл "${src}" не найден`, error: 404 });
         document.head.append(script);
      });
   }

   function task1() {
      Promise.allSettled([
         loadScriptProm("./dz11.8.1.js"),
         loadScriptProm("./dz11.8.2.js"),
         loadScriptProm("./dz11.8.3.js"),
         loadScriptProm("./dz11.8.4.js"),
      ]).then(value => {
         console.log(value);
      })
   }


   async function task2() {
      try {
         var test = { "name": "Vlad" };
         var j = `{"name":"Vlad"}`;

         function getJsonNameUser(json) {
            var user = JSON.parse(json);
            return console.log(user);
         }
         getJsonNameUser(test);

      } catch (e) {
         if (e.message == "Unexpected token o in JSON at position 1") {
            console.log("Cинтаксическая ошибка", e);
         }
         else console.log(e.message);
      }

      function ErrorName(message) {
         this.name = "неверное имя пользователья";
         this.message = message;
      }
      function getNameCreator(nameCreator) {
         var user = JSON.parse(nameCreator);
         if (user.name === "Vlad" || user.name === "Влад") {
            return console.log(`${user.name} создатель сего творения `);
         } else {
            throw new ErrorName(`${user.name} не создатель сего творения `);
         }
      }
      try {
         getNameCreator(`{"name":"Vlad"}`)
      } catch (e) {
         console.log(e.message);
         console.log(e);
      }
   }


   var number = 0;
   var сounter = () => {
      number += 1;
      return number;
   }




   async function task3() {
      try {
         await delay(1000);
         await loadScriptProm("./dz11.8.1.js");
         addTextToBlock(blockDate, "загрузилась дата");
         counterFiles();
         console.log("загрузилась дата");
         сounter();
         await delay(1000);
         await loadScriptProm("./dz11.8.2.js");
         addTextToBlock(blockLamp, "загрузились ломпочки");
         counterFiles();
         console.log("загрузились ломпочки");
         сounter();
         await delay(1000);
         await loadScriptProm("./dz11.8.3.js");
         addTextToBlock(blockParallax, "загрузился паралакс");
         counterFiles();
         console.log("загрузился паралакс");
         сounter();
         await delay(1000);
         await loadScriptProm("./dz11.8.4.js");
         addTextToBlock(blockSlider, "загрузился слайдер");
         counterFiles();
         console.log("загрузился слайдер");
         сounter();
      } catch (error) {
         console.log(error);
      } finally {
         console.log(`Количество загруженных файлов: ${number}`);
      }
   }

   /**
    * 
    * @param {number} количество миллисекунд
    */
   async function delay(ms) {
      ms = ms || 2000;
      return new Promise((resolve) => {
         setTimeout(() => {
            resolve();
         }, ms);
      })
   }


   /**
    * 
    * @param {elem} block в который нужно добавить тест
    * @param {string} text 
    */

   function addTextToBlock(block, text) {
      let newText = document.createElement("div");
      newText.classList.add("info-downloads");
      newText.innerHTML = text;
      block.insertAdjacentElement("afterbegin", newText)
      setTimeout(() => {
         newText.classList.add("info-downloads_active");
      }, 50);
   }

   var counterFiles = () => {
      counter++;
      textCounter.innerText = `количество загруженных файлов: ${counter}`;
      return counter;
   }
})() 