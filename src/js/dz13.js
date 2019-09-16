(() => {
  const bottonConnection = document.getElementsByClassName("button-connection_js")[0];
  const body = document.body;
  const preloaderArc = document.getElementsByClassName("preloader_js")[0];
  const preloaderItem = document.querySelectorAll(".preloader__semicircle_js");
  let idInterval;

  window.addEventListener("load", stopPreloader);
  bottonConnection.addEventListener("click", connection);

  function connection() {
    runPreloaderConnect();
    bottonConnection.removeEventListener("click", connection);
    var xhr = new XMLHttpRequest;
    xhr.open("GET", "http://localhost/users", true);
    xhr.send();

    xhr.onreadystatechange = function () {
      if (xhr.readyState != 4) {
        return;
      }
      if (xhr.status != 200) {
        console.log("error");
        bottonConnection.innerHTML = "фиаско братан :(";
        stopPreloaderConnect();
      }
      else {
        bottonConnection.innerHTML = "подключен";
        console.log("подключено");
        createUser(xhr.responseText);
        stopPreloaderConnect();
      }
    }
    return false;
  }


  function createUser(arr) {
    let users = JSON.parse(arr);

    // создаём основные блоки
    const wrap = document.querySelector(".wrap_js");
    let userMain = document.createElement("div");
    let containet = document.createElement("div");
    let userBlock = document.createElement("div");
    let userTitle = document.createElement("h2");

    userMain.classList = "user";
    containet.classList = "container";
    userBlock.classList = "user__block";
    userTitle.classList = "user__title title_h2";
    userTitle.innerHTML = "Юзеры";

    wrap.insertAdjacentElement("beforeend", userMain);
    userMain.insertAdjacentElement("beforeend", containet);
    containet.insertAdjacentElement("beforeend", userBlock);
    userBlock.insertAdjacentElement("beforeend", userTitle);
    let userContainerCard = document.createElement("div");

    userContainerCard.classList = "user__container-card";

    users.map(user => {
      //создаём карточку user
      let userCard = document.createElement("div");
      let userAvatar = document.createElement("img");
      let userBoxContent = document.createElement("div");
      userAvatar.src = user.img;

      userCard.classList = "user__card";
      userAvatar.classList = "user__avatar";
      userBoxContent.classList = "user__box-content";
      userBlock.insertAdjacentElement("beforeend", userContainerCard);
      userContainerCard.insertAdjacentElement("beforeend", userCard);
      userCard.insertAdjacentElement("beforeend", userAvatar);
      userCard.insertAdjacentElement("beforeend", userBoxContent);


      let flexRow;
      let flexAic;
      let userIcon;
      let userText;
      let userName;
      let old;

      // user
      createUserName("user__name user__name_user user__name_user_js", user.name);
      userBoxContent.insertAdjacentElement("beforeend", userName);

      // новая строка
      newRow();
      if (user.age) {
        createIcon("user__icon user__icon-age-user user__icon-age-user_js");
        createText("user__text user__text_age-user user__text_age-user_js", `${user.age} год`);

        if (chechAge(user.age)) {
          createSvgAge(userIcon, "blue");
        }
        if (!chechAge(user.age)) {
          createSvgAge(userIcon, "red");
        }

        flexAic.insertAdjacentElement("beforeend", userIcon);
        flexAic.insertAdjacentElement("beforeend", userText);
      }
      if (user.phone) {
        createFlexAic();
        flexRow.insertAdjacentElement("beforeend", flexAic);
        createIcon("user__icon user__icon-phone-user user__icon-phone-user_js");
        createText("user__text user__text_phone-user user__text_phone-user_js", user.phone);
        if (chechAge(user.age)) {
          createSvgPhone(userIcon, "blue");
        }
        if (!chechAge(user.age)) {
          createSvgPhone(userIcon, "red");
        }
        flexAic.insertAdjacentElement("beforeend", userIcon);
        flexAic.insertAdjacentElement("beforeend", userText);
      }

      // новая строка
      newRow();
      if (user.adress) {
        createIcon("user__icon user__icon-address-user user__icon-address-user_js");
        createText("user__text user__text_address-user user__text_address-user_js", user.adress);
        if (chechAge(user.age)) {
          createSvgAddres(userIcon, "blue");
        }
        if (!chechAge(user.age)) {
          createSvgAddres(userIcon, "red");
        }
        flexAic.insertAdjacentElement("beforeend", userIcon);
        flexAic.insertAdjacentElement("beforeend", userText);
      }
      if (user.children) {
        // новая строка
        createUserName("user__name user__name_children user__name_children_js", "children");
        userBoxContent.insertAdjacentElement("beforeend", userName);
        // детишки
        user.children.map(children => {
          newRow();
          if (children.name) {
            createIcon("user__icon user__icon-avatar-children user__icon-avatar-children_js");
            createText("user__text user__text_name-children user__text_name-children_js", children.name);
            if (chechAge(children.age)) {
              createSvgName(userIcon, "blue");
            }
            if (!chechAge(children.age)) {
              createSvgName(userIcon, "red");
            }
            flexAic.insertAdjacentElement("beforeend", userIcon);
            flexAic.insertAdjacentElement("beforeend", userText);
            createFlexAic();
          }
          if (children.age) {
            flexRow.insertAdjacentElement("beforeend", flexAic);
            createIcon("user__icon user__icon-age-children_js");
            createText("user__text user__text_age-children user__text_age-children_js", `${children.age} год`);
            if (chechAge(children.age)) {
              createSvgAge(userIcon, "blue");
            }
            if (!chechAge(children.age)) {
              createSvgAge(userIcon, "red");
            }
            flexAic.insertAdjacentElement("beforeend", userIcon);
            flexAic.insertAdjacentElement("beforeend", userText);
          }
        })
      }

      // жена 
      if (user.wife) {
        createUserName("user__name user__name_wife user__name_wife_js", "wife");
        userBoxContent.insertAdjacentElement("beforeend", userName);
        let flexAife = document.createElement("div");

        flexAife.classList = "user__flex-aife";
        createFlexRow();
        userBoxContent.insertAdjacentElement("beforeend", flexRow);
        flexRow.insertAdjacentElement("beforeend", flexAife);

        userIcon = document.createElement("img");
        userIcon.classList = "user__avatar-wife user__avatar-wife_js";
        if (user.wife.name) {
          createText("user__text user__text_name-wife user__text_name-wife_js", user.wife.name);
        }

        userIcon.src = user.wife.img;
        flexAife.insertAdjacentElement("beforeend", userIcon);
        flexAife.insertAdjacentElement("beforeend", userText);

        // новая строка 
        newRow();
        if (user.wife.age) {
          createText("user__text user__text_age-wife user__text_age-wife_js", `${user.wife.age} год`);
          createIcon("user__icon user__icon-age-wife user__icon-age-wife_js");
          if (chechAge(user.wife.age)) {
            createSvgAge(userIcon, "blue");
          }
          if (!chechAge(user.wife.age)) {
            createSvgAge(userIcon, "red");
          }
          flexAic.insertAdjacentElement("beforeend", userIcon);
          flexAic.insertAdjacentElement("beforeend", userText);
        }

        if (user.wife.phone) {
          createFlexAic();
          flexRow.insertAdjacentElement("beforeend", flexAic);
          createIcon("user__icon user__icon-phone-wife user__icon-phone-wife_js");
          createText("user__text user__text_phone-wife user__text_phone-wife_js", user.wife.phone);
          if (chechAge(user.wife.age)) {
            createSvgPhone(userIcon, "blue");
          }
          if (!chechAge(user.wife.age)) {
            createSvgPhone(userIcon, "red");
          }
          flexAic.insertAdjacentElement("beforeend", userIcon);
          flexAic.insertAdjacentElement("beforeend", userText);
        }
      }

      // вспомогательные функции
      function chechAge(age) {
        if (age <= 30) {
          return old = true;
        }
        else old = false;
      }
      function newRow() {
        createFlexRow();
        createFlexAic();
        userBoxContent.insertAdjacentElement("beforeend", flexRow);
        flexRow.insertAdjacentElement("beforeend", flexAic);
      }

      function createText(clas, text) {
        userText = document.createElement("span");
        userText.classList = clas;
        userText.innerHTML = text;
        return userText;
      }

      function createIcon(clas) {
        userIcon = document.createElement("div");
        userIcon.classList = clas;
        return userIcon;
      }
      function createUserName(clas, text) {
        userName = document.createElement("h3");
        userName.classList = clas;
        userName.innerHTML = text;
        return userName;
      }

      function createFlexRow() {
        flexRow = document.createElement("div");
        flexRow.classList = "user__row";
        return flexRow;
      }
      function createFlexAic() {
        flexAic = document.createElement("div");
        flexAic.classList = "user__flex-aic";
        return flexAic;
      }
      function createSvgAge(where, bg) {
        where.innerHTML = `<svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M25 15.7407L21.9918 9.2591L18.9835 15.7407H21.0097C19.7343 20.0302 16.004 23.1481 11.6029 23.1481C6.15298 23.1481 1.71848 18.3711 1.71848 12.4999C1.71848 6.62887 6.15298 1.85175 11.6029 1.85175C15.8023 1.85175 19.3899 4.69234 20.8185 8.68057L21.8063 6.55186C19.8409 2.65287 16.0049 3.65214e-09 11.6037 3.65214e-09C5.20561 -0.000165243 0 5.60731 0 12.4999C0 19.392 5.20561 25 11.6036 25C16.9607 25 21.4716 21.0656 22.8009 15.7409H25V15.7407Z" fill="${bg}"/>
        <path d="M5.44336 14.994H6.53001L6.85981 13.7135H8.18591L8.54362 14.994H9.67031L8.23423 10.0049H6.85981L5.44336 14.994ZM7.28533 11.811C7.36095 11.522 7.42967 11.1444 7.49854 10.8488H7.51204C7.58092 11.1444 7.6636 11.5157 7.74628 11.811L8.03497 12.8707H7.01106L7.28533 11.811Z" fill="${bg}"/>
        <path d="M12.5381 10.8859C13.046 10.8859 13.3619 10.9823 13.6163 11.0998L13.8366 10.1965C13.6097 10.0784 13.149 9.95197 12.5516 9.95197C11.0328 9.95197 9.91317 10.899 9.90504 12.5577C9.89859 13.2904 10.1321 13.9412 10.5585 14.3718C10.9846 14.816 11.5959 15.0454 12.4417 15.0454C13.0522 15.0454 13.6651 14.8826 13.9872 14.7643V12.1364H12.2629V13.0173H12.9785V14.0605C12.8953 14.1058 12.7027 14.1347 12.4623 14.1347C11.6027 14.1347 11.0055 13.5271 11.0055 12.4981C11.0055 11.4184 11.6645 10.8859 12.5381 10.8859Z" fill="${bg}"/>
        <path d="M17.6673 10.9307V10.0057H14.8086V14.994H17.7637V14.0698H15.8601V12.8853H17.5648V11.9665H15.8601V10.9307H17.6673Z" fill="${bg}"/>
        </svg>`;
      }
      function createSvgPhone(where, bg) {
        where.innerHTML = `<svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M24.4395 19.7738L20.5787 15.9038C19.8097 15.1361 18.5362 15.1594 17.7404 15.9573L15.7953 17.9064C15.6724 17.8385 15.5452 17.7676 15.4114 17.6924C14.1831 17.0103 12.5019 16.0753 10.7329 14.3009C8.95854 12.5228 8.02484 10.8352 7.34216 9.60332C7.27012 9.47281 7.2011 9.34698 7.13294 9.22749L8.4384 7.92101L9.08021 7.27695C9.87723 6.47791 9.89921 5.20188 9.13199 4.43199L5.27113 0.56152C4.50392 -0.20729 3.22985 -0.183967 2.43282 0.615078L1.3447 1.71193L1.37443 1.74152C1.00957 2.20813 0.704683 2.7463 0.477793 3.32665C0.268644 3.87907 0.138428 4.40622 0.0788869 4.93445C-0.430915 9.1704 1.50041 13.0417 6.74179 18.2951C13.987 25.5561 19.8256 25.0076 20.0775 24.9808C20.6261 24.9151 21.1518 24.7837 21.6861 24.5758C22.2601 24.351 22.7967 24.0459 23.262 23.681L23.2858 23.7021L24.3881 22.6203C25.1835 21.8214 25.2064 20.5449 24.4395 19.7738Z" fill="${bg}"/>
        </svg>`;
      }
      function createSvgAddres(where, bg) {
        where.innerHTML = `<svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9.98535 22.4476V24.9859L9.37309 24.4901C9.27849 24.4134 7.02763 22.5815 4.7451 19.9546C1.59645 16.3307 0 13.0778 0 10.2865V10.0098C0 4.49037 4.47941 0 9.98535 0C15.4913 0 19.9707 4.49037 19.9707 10.0098V10.2865C19.9707 10.5209 19.9583 10.7589 19.9358 10.9998L17.9831 9.21401C17.5831 5.14371 14.1491 1.95312 9.98535 1.95312C5.55382 1.95312 1.94836 5.56741 1.94836 10.0098V10.2865C1.94836 15.0034 8.01105 20.7136 9.98535 22.4476ZM15.9765 21.0448H18.899V18.1152H15.9765V21.0448ZM9.98535 5.85938C12.2683 5.85938 14.1256 7.7213 14.1256 10.0098C14.1256 12.2983 12.2683 14.1602 9.98535 14.1602C7.70245 14.1602 5.84507 12.2983 5.84507 10.0098C5.84507 7.7213 7.70245 5.85938 9.98535 5.85938ZM9.98535 7.8125C8.77666 7.8125 7.79343 8.79814 7.79343 10.0098C7.79343 11.2212 8.77666 12.2071 9.98535 12.2071C11.1938 12.2071 12.1773 11.2212 12.1773 10.0098C12.1773 8.79814 11.1938 7.8125 9.98535 7.8125ZM23.687 19.7177L23.1392 19.2167V22.3522C23.1392 23.8123 21.9542 25 20.4977 25H14.3291C12.8727 25 11.6877 23.8123 11.6877 22.3522V19.2167L11.1399 19.7177L9.82685 18.2749L17.4133 11.3367L25 18.2749L23.687 19.7177ZM21.1908 17.4349L17.4133 13.9805L13.636 17.4349V22.352C13.636 22.7352 13.9469 23.0469 14.3291 23.0469H20.4977C20.8799 23.0469 21.1908 22.7352 21.1908 22.352V17.4349Z" fill="${bg}"/>
        </svg>`;
      }
      function createSvgName(where, bg) {
        where.innerHTML = `<svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12.3108 13.2262C13.7848 13.2262 14.9796 12.0311 14.9796 10.5572C14.9796 9.08316 13.7848 7.88821 12.3108 7.88821C10.8366 7.88821 9.64178 9.08316 9.64178 10.5572C9.64356 12.0304 10.8374 13.2242 12.3108 13.2262ZM12.3108 8.92587C13.2145 8.92587 13.9471 9.65845 13.9471 10.5624C13.9471 11.4661 13.2145 12.1989 12.3108 12.1989C11.4069 12.1989 10.6743 11.4661 10.6743 10.5624C10.6744 9.65861 11.407 8.92619 12.3108 8.92587Z" fill="${bg}"/>
        <path d="M12.3108 14.2122C11.2188 14.2041 10.1708 14.6425 9.40948 15.4254C8.63511 16.2152 8.21179 17.289 8.21179 18.4557C8.2126 18.7405 8.44313 18.9712 8.72804 18.972H15.8934C16.1783 18.9712 16.4088 18.7405 16.4096 18.4557C16.4096 17.289 15.9863 16.2152 15.2119 15.4254C14.4508 14.6425 13.4026 14.2041 12.3108 14.2122ZM9.28042 17.9395C9.36866 17.2645 9.67309 16.6363 10.1477 16.1481C10.719 15.5701 11.498 15.2447 12.3108 15.2447C13.1234 15.2447 13.9024 15.5701 14.4737 16.1481C14.9473 16.6368 15.2514 17.2648 15.341 17.9395H9.28042Z" fill="${bg}"/>
        <path d="M18.5057 0.784698H6.11583C4.69051 0.785344 3.53509 1.9406 3.53461 3.36592V21.641C3.53509 23.0663 4.69051 24.2215 6.11583 24.2222H18.5057C19.931 24.2215 21.0863 23.0663 21.0869 21.641V3.36592C21.0863 1.9406 19.931 0.785344 18.5057 0.784698ZM20.0544 21.641C20.052 22.4952 19.3599 23.1873 18.5057 23.1897H6.11583C5.26161 23.1873 4.56952 22.4952 4.5671 21.641V3.36592C4.56952 2.5117 5.26161 1.81961 6.11583 1.81719H18.5057C19.3599 1.81961 20.052 2.5117 20.0544 3.36592V21.641Z" fill="${bg}"/>
        <path d="M10.158 4.24868H14.288C14.573 4.24868 14.8042 4.0175 14.8042 3.73243C14.8042 3.44737 14.573 3.21619 14.288 3.21619H10.158C9.8728 3.21619 9.64178 3.44737 9.64178 3.73243C9.64178 4.0175 9.8728 4.24868 10.158 4.24868Z" fill="${bg}"/>
        </svg>`;
      }
    })
  }

  function runPreloaderConnect() {
    let counter = 0;
    idInterval = setInterval(() => {
      if (counter == 1) {
        startPreloader();
      }
      else counter++;

    }, 500);
    return idInterval;
  }
  function stopPreloaderConnect() {
    clearInterval(idInterval);
    stopPreloader();
  }

  function stopPreloader() {
    body.classList.remove("page-loading");
    preloaderArc.classList.add("preloader__completed");

    for (let i = 0; i < preloaderItem.length; i++) {
      preloaderItem[i].classList.add("preloader__semicircle__completed");
    }

    setTimeout(() => {
      preloaderArc.classList.add("preloader__none");
    }, 2000);
  }

  function startPreloader() {
    preloaderArc.classList.remove("preloader__none");
    preloaderArc.classList.remove("preloader__none");
    body.classList.add("page-loading");
    preloaderArc.classList.remove("preloader__completed");

    for (let i = 0; i < preloaderItem.length; i++) {
      preloaderItem[i].classList.remove("preloader__semicircle__completed");
    }

  }
})()

