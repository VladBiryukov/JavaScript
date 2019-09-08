parallax()
function parallax() {
   var imgParallax = document.getElementsByClassName("parallax__img_js")[0],
      parallaxOverlay = document.getElementsByClassName("parallax__overlay_js")[0],

      arBackground = [
         "rgba(196, 196, 196, 0)",
         "rgba(196, 196, 196, 0.7)"
      ];
   // простой параллакс эфект, ничего лешнего
   document.addEventListener("scroll", function (e) {
      imgParallax.style.transform = `translateY(${window.pageYOffset / 10}px)`;
   })

   parallaxOverlay.addEventListener("mouseover", () => {
      parallaxOverlay.style.background = arBackground[0];
   })

   parallaxOverlay.addEventListener("mouseout", () => {
      parallaxOverlay.style.background = arBackground[1];

   })
}