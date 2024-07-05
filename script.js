let popup = document.getElementById("popup");
let ovl = document.getElementById("overlay");
let tzk = document.getElementById("card");
let color_algo = document.getElementById("cl");

            
function openPopup(){                
    popup.classList.add("open-popup");
    optionTazaku.classList.add("open-option");
    ovl.classList.add("ovl");
}

function closePopup(){
    ovl.classList.remove("ovl");
    popup.classList.remove("open-popup");
    optionTazaku.classList.remove("open-option");
}

 let cardColor = [
       "black","#fdb7c2","#a1e9ff","#3f3152","#fbe1a4","#acf4b4","#d1585f","#f5f4f0"
]

 let fontColor = [
        "white", "#e4478c", "#005665", "#ebdbf8", "#6c2803","#007179","white","black"
]

function color(z){
    var a = getComputedStyle(z);
    var b = a.backgroundColor;
    var c = cardColor.indexOf(b);
    var d = fontColor[c];
    document.getElementById("popup").style.backgroundColor = b;
}

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.querySelectorAll(".slides");
  if (n > slides.length) {
    slideIndex = 1
  }
  if (n < 1) {
    slideIndex = slides.length
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slides[slideIndex - 1].style.display = "block";
}

function openPopup_story() {
  popupstory.classList.add("open-popup_story");
    ovl.classList.add("ovl");
}

function closePopup_story() {
  popupstory.classList.remove("open-popup_story");
  ovl.classList.remove("ovl");
  close(returnValue)
}
