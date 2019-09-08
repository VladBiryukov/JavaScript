
(function () {
  const wrap = document.getElementsByClassName("wrap_js")[0]

  let reporting = document.createElement("div")
  let counterScripts = document.createElement("p")
  wrap.insertAdjacentElement("afterbegin", reporting)
  reporting.insertAdjacentElement("afterbegin", counterScripts)
  reporting.classList.add("reporting", "reporting_js")

  function addTextReporting(text) {
    let newText = document.createElement("p")
    newText.classList.add("reporting__text", "reporting__text_js")
    newText.innerHTML = text
    newText.classList.toggle("reporting__text_active");

    setTimeout(() => {
      newText.classList.toggle("reporting__text_active");

    }, 500);
    reporting.insertAdjacentElement("beforeend", newText)
  }

  var number = 0
  let showСounter = () => {
    number += 1
    counterScripts.innerHTML = `Количество загруженных фалов ${number}`
    return number
  }


  function loadScript(src, callback) {
    var script = document.createElement("script")
    script.src = src
    // удачный исход
    script.onload = () => callback(null), console.log(`файл "${src} загружен`), addTextReporting(`${src} загрузился`)
    // неудачный исход
    script.onerror = () => callback({ message: `файл "${src}" не найден` }, addTextReporting(`${src} не загрузился`))
    document.head.append(script)
  }
  (function () {
    loadScript("./dz11.8.1.js", function (err) {
      if (err) console.log(err)
      else {
        console.log("отработал дата");
        loadScript("./dz11.8.2.js", function (err) {
          if (err) console.log(err)
          else {
            console.log("отработал лампа");
            loadScript("./dz11.8.3.js", function (err) {
              if (err) console.log(err)
              else {
                console.log("оработал паралакс");
                loadScript("./dz11.8.4.js", function (err) {
                  if (err) console.log(err)
                  else {
                    console.log("оработал слайдер");
                  }
                })
              }
            })
          }
        })
      }
    })
  })


  var loadScriptProm = function (src) {
    return new Promise(function (resolve, reject) {
      var script = document.createElement('script');
      script.src = src;
      script.onload = () => resolve(`файл загружен"${src}`, addTextReporting(`${src} загрузился`), showСounter())
      script.onerror = () => reject(err = { message: `файл "${src} не найден`, error: 404 }, addTextReporting(`${src} не загрузился`));
      document.head.append(script);
    });
  }

  prom()
  function prom() {

    loadScriptProm(`./dz11.8.1.js`)
      .then(secondValue => console.log(secondValue))
      .catch(err => console.log(err))
      .finally(() => console.log("Промис отработал"))

    loadScriptProm(`./dz11.8.2.js`)
      .then(secondValue => console.log(secondValue))
      .catch(err => console.log(err))
      .finally(() => console.log("Промис отработал"))

    loadScriptProm(`./dz11.8.3.js`)
      .then(secondValue => console.log(secondValue))
      .catch(err => console.log(err))
      .finally(() => console.log("Промис отработал"))

    loadScriptProm(`./dz11.8.4.js`)
      .then(secondValue => console.log(secondValue))
      .catch(err => console.log(err))
      .finally(() => console.log("Промис отработал"))
  }
})()






























