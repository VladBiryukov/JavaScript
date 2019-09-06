var user = {
    name: "Стас",
    sName: "Стасов",
    age: 11,
    frieds: ["Name1", "Name2", "Name3", "Name4", "Name5"]
}


var card = document.createElement("div")
var avatar = document.createElement("div")
var title = document.createElement("div")
var text = document.createElement("p")
var footer = document.createElement("div")
var message = document.createElement("div")
var like = document.createElement("div")
var stars = document.createElement("div")

card.classList.add("card", "card_js")
avatar.classList.add("avatar", "avatar_js")
title.classList.add("title", "title_js")
text.classList.add("text", "text_js")
footer.classList.add("footer", "foote_js")
message.classList.add("message", "message_js")
like.classList.add("like", "like_js")
stars.classList.add("stars", "stars_js")

title.innerHTML = "emilia"
text.innerHTML = "dawdawdawd awdawdaw awdawdawd awdawd"
var wrap = document.getElementsByClassName("wrap_js")[0]

wrap.insertAdjacentElement("beforeend", card);

card.insertAdjacentElement("beforeend", avatar);
card.insertAdjacentElement("beforeend", title);
card.insertAdjacentElement("beforeend", text);
card.insertAdjacentElement("beforeend", footer);
footer.insertAdjacentElement("beforeend", message);
footer.insertAdjacentElement("beforeend", like);
footer.insertAdjacentElement("beforeend", stars);


// avatar