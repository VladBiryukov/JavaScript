(() => {
   const containetPost = document.getElementsByClassName("blog__container_js")[0];
   const btnHiddenModal = document.getElementsByClassName("blog__close-modal_js")[0];
   const btnShowModal = document.getElementsByClassName("blog__add-post_js")[0];
   const btnAddNewPost = document.getElementsByClassName("blog__button_save-post_js")[0];
   const modal = document.getElementsByClassName("blog__modal_js")[0];
   const modalOverlay = document.getElementsByClassName("blog__overlay-modal_js")[0]
   const inputTitleModal = document.getElementsByClassName("blog__input_title_js")[0];
   const inputTextModal = document.getElementsByClassName("blog__input_text_js")[0];
   var answer = false;
   var obj;

   btnHiddenModal.addEventListener("click", hiddenModal);
   btnShowModal.addEventListener("click", showModal);
   modalOverlay.addEventListener("click", hiddenModal);
   btnAddNewPost.addEventListener("click", addNewPost);
   // загрузка страницы
   window.addEventListener("load", async function () {

      try {
         await get();// получаем данные 
         if (answer) {
            await createPost(); // обрабатываем и создаём посты на основе полученных данных
         }

      } catch (error) {
         console.log(error);
         console.log("нет ответа от сервера");
      }
   })
   // обработка  события keydown у инпута
   inputTitleModal.addEventListener("keydown", (e) => {
      if (e.keyCode == 13) {
         addNewPost();
      }
      else if (e.keyCode == 27) {
         hiddenModal();
      }
   })
   // обработка  события keydown у инпута
   inputTextModal.addEventListener("keydown", (e) => {
      if (e.keyCode == 13) {
         addNewPost();
      }
      else if (e.keyCode == 27) {
         hiddenModal();
      }
   })
   async function addNewPost() {
      try {
         if (checkInputPost()) {
            await newPost();
            if (answer) {
               inputPostValid();
               await removeAllPosts();
               await get();
               if (answer) {
                  await createPost();
                  hiddenModal();
               }
            }
         }
      } catch (error) {
         console.log(error);
      }
   }
   // отправить на сервер полученные данные из инпутов
   async function newPost() {
      var request = await fetch("http://localhost/blog", {
         method: "POST",
         headers: {
            'Content-Type': 'application/json'
         },
         body: JSON.stringify({
            title: `${inputTitleModal.value}`, text: `${inputTextModal.value}`
         })
      })
         .then(res => { if (res.ok) return res.text(), answer = true })
         .then(res => console.log(res))
         .catch(err => console.log(err), answer = false)
   }
   //удалить все записи 
   async function removeAllPosts() {
      const post = document.querySelectorAll(".blog__post")
      for (let i = 0; i < post.length; i++) {
         post[i].remove();
      }
   }
   //получаем
   async function get() {
      var request = await fetch("http://localhost/blog", {
         method: "GET"
      })
      console.log(request.ok);
      if (request.ok) {
         let res = await request.text();
         obj = JSON.parse(res);
         res => obj;
         return answer = true;
      }
      else {
         return answer = false;
      }
   }

   // обрабатываем
   async function createPost() {
      for (let i = 0; i < obj.length; i++) {
         let post = document.createElement("div");
         let titlePost = document.createElement("h2");
         let textPost = document.createElement("p");
         let deletePost = document.createElement("div");
         let inputChange = document.createElement("textarea")

         post.classList.add("blog__post");
         titlePost.classList.add("blog__name-post", "title_h2");
         textPost.classList.add("blog__text", "blog__text_post");
         deletePost.classList.add("blog__close-post", "close");
         inputChange.classList.add("blog__input-change", "blog__input-change_hidden");
         // присваиваем id 

         post.id = `${obj[i]._id}`;
         titlePost.innerHTML = `${obj[i].title}`;
         textPost.innerHTML = `${obj[i].text}`;


         post.insertAdjacentElement("beforeend", titlePost);
         post.insertAdjacentElement("beforeend", textPost);
         post.insertAdjacentElement("beforeend", deletePost);
         post.insertAdjacentElement("beforeend", inputChange);
         containetPost.insertAdjacentElement("beforeend", post);

         deletePost.addEventListener("click", async function () {
            var request = await fetch("http://localhost/blog", {
               method: "DELETE",
               headers: {
                  'Content-Type': 'application/json'
               },
               body: JSON.stringify({
                  _id: `${obj[i]._id}`
               })
            })

               .then(res => {
                  if (res.ok) {
                     res.text();
                     delPost();
                     return answer = true;
                  }
               })
               .catch(res => console.log("не удалось удалить пост"), answer = false)


         })
         async function delPost() {
            animationRemovePost();
            await delay(700);
            post.remove();
         }

         inputChange.onblur = hiddenInputChange
         titlePost.onclick = function () {
            showInputChange();
            inputChange.value = titlePost.innerHTML;
            inputChange.onkeydown = async function (e) {
               if (e.keyCode == 13) {
                  if (chechInputTItleChange()) {
                     await querySaveChangesTitle();
                     if (answer) {
                        saveToPage(titlePost);
                        hiddenInputChange();
                        emptyInputChange();

                     }
                  }
               }
            }
         }

         textPost.onclick = function () {
            showInputChange();
            inputChange.value = textPost.innerHTML;
            inputChange.onkeydown = async function (e) {
               if (e.keyCode == 13) {
                  if (chechInputTextChange()) {
                     await querySaveChangesText();
                     if (answer) {
                        saveToPage(textPost);
                        hiddenInputChange();
                        emptyInputChange();
                     }
                  }
               }
            }
         }

         function chechInputTextChange() {
            if (checkString(inputChange.value) && inputChange.value.length > titlePost.innerHTML.length) {
               inputChange.classList.remove("blog__input_ivalid_js");
               return true;
            }
            else {
               inputChange.classList.add("blog__input_ivalid_js");
            }
         }
         function chechInputTItleChange() {
            if (checkString(inputChange.value) && inputChange.value.length < textPost.innerHTML.length) {
               inputChange.classList.remove("blog__input_ivalid_js")
               return true;
            }
            else {
               inputChange.classList.add("blog__input_ivalid_js")
            }
         }


         async function querySaveChangesTitle() {
            var request = await fetch("http://localhost/blog", {
               method: "PUT",
               headers: {
                  'Content-Type': 'application/json'
               },
               body: JSON.stringify({
                  _id: `${obj[i]._id}`,
                  title: `${inputChange.value}`,
                  text: `${obj[i].text}`
               })
            })
               .then(res => { if (res.ok) { res => res.text() } })
               .then(res => answer = true)
               .catch(err => console.log(err))
         }

         async function querySaveChangesText() {
            var request = await fetch("http://localhost/blog", {
               method: "PUT",
               headers: {
                  'Content-Type': 'application/json'
               },
               body: JSON.stringify({
                  _id: `${obj[i]._id}`,
                  title: `${obj[i].title}`,
                  text: `${inputChange.value}`
               })
            })
               .then(res => { if (res.ok) { res => res.text() } })
               .then(res => answer = true)
               .catch(err => console.log(err))
         }


    
         function animationRemovePost() {
            titlePost.classList.add("transform_right");
            textPost.classList.add("transform_left");
            deletePost.classList.add("transform_right");
         }
         function emptyInputChange() {
            inputChange.value = "";
         }
         function saveToPage(thing) {
            thing.innerHTML = inputChange.value;
         }
         function hiddenInputChange() {
            inputChange.classList.add("blog__input-change_hidden");
         }
         function showInputChange() {
            inputChange.classList.remove("blog__input-change_hidden");
         }

      }
   }
   // вспомогательные функции

   // смотреть инпуты при сохранении нового поста
   function checkInputPost() {
      if (checkString(inputTitleModal.value)
         && checkString(inputTextModal.value)
         && inputTitleModal.value.length < inputTextModal.value.length) {
         return true;
      }
      else if (!checkString(inputTitleModal.value) && checkString(inputTextModal.value)) {
         inputTitleModal.classList.add("blog__input_ivalid_js");
         inputTextModal.classList.remove("blog__input_ivalid_js")
         return false;
      }
      else if (checkString(inputTitleModal.value) && !checkString(inputTextModal.value)) {
         inputTitleModal.classList.remove("blog__input_ivalid_js");
         inputTextModal.classList.add("blog__input_ivalid_js");
         return false;
      }
      else {
         inputTextModal.classList.add("blog__input_ivalid_js");
         inputTitleModal.classList.add("blog__input_ivalid_js");
         return false;
      }
   }
   // скрыть модальное окно
   async function hiddenModal() {
      modal.classList.add("blog__modal_hidden");
      inputPostValid();
      emptyInputPost();

   }
   // показать модальное окно
   async function showModal() {
      modal.classList.remove("blog__modal_hidden");
   }
   // удалить класс invalid у инпутов
   function inputPostValid() {
      inputTextModal.classList.remove("blog__input_ivalid_js");
      inputTitleModal.classList.remove("blog__input_ivalid_js");
   }
   // отчистить инпуты
   function emptyInputPost() {
      inputTitleModal.value = "";
      inputTextModal.value = "";
   }
   // ждать 
   async function delay(ms) {
      ms = ms || 2000;
      return new Promise((resolve) => {
         setTimeout(() => {
            resolve();
         }, ms);
      })
   }






   const inputPassword = document.getElementsByClassName("input_password_js")[0]
   let regPassword = RegExp(/^(?=.*[a-z])(?=.*[_])[a-z\d_]{4,12}$/)

   inputPassword.addEventListener("keydown", (e) => {
      setTimeout(() => {
         if (!regPassword.test(inputPassword.value)) {
            inputPassword.classList.add("invalid")
         }
         else inputPassword.classList.remove("invalid")

      }, 10);

   })





























})()
