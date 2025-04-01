let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
  positionIndicator();
  scrollFunction();
}

function positionIndicator() {
  sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 101;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');
    if (top >= offset && top < offset + height) {
      navlinks.forEach(links => {
        links.classList.remove('active');
        document.querySelector('[href*=' + id + ']').classList.add('active');
      });
    }
    var totalPageHeight = document.body.scrollHeight + 44;
    var scrollPoint = window.scrollY + window.innerHeight;
    if (scrollPoint >= totalPageHeight) {
      navlinks.forEach(links => {
        links.classList.remove('active');
        document.querySelector('[href*=entry]').classList.add('active');
      });
    }
  });
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
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

function scrollFunction() {
  if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
    document.getElementById("navbar").style.padding = "15px 10px";
    document.getElementById("title").style.fontSize = "20px";
  } else {
    document.getElementById("navbar").style.padding = "40px 10px";
    document.getElementById("title").style.fontSize = "30px";
  }
}

// Travel Modal (#1)
var modal1 = document.getElementById("modal1");
var travelImg = document.getElementById("travelmodal");
var caption1 = document.getElementById("travelCaption");
travelImg.onclick = function () {
  modal1.style.display = "block";
  caption1.innerHTML = this.alt;
}
var span1 = document.getElementsByClassName("closeTravel")[0];
span1.onclick = function () {
  modal1.style.display = "none";
  modal2.style.display = "none";
}

// Food Modal(#2)
var modal2 = document.getElementById("modal2");
var foodImg = document.getElementById("foodmodal");
var caption2 = document.getElementById("foodCaption");
foodImg.onclick = function () {
  modal2.style.display = "block";
  caption2.innerHTML = this.alt;
}
var span2 = document.getElementsByClassName("closeFood")[0];
span2.onclick = function () {
  modal2.style.display = "none";
}

// Squirrel Modal(#3)
var modal3 = document.getElementById("modal3");
var squirrelImg = document.getElementById("squirrelmodal");
var caption3 = document.getElementById("squirrelCaption");
squirrelImg.onclick = function () {
  modal3.style.display = "block";
  caption3.innerHTML = this.alt;
}
var span3 = document.getElementsByClassName("closeSquirrel")[0];
span3.onclick = function () {
  modal3.style.display = "none";
}

// Olympic Modal(#4)
var modal4 = document.getElementById("modal4");
var olympicImg = document.getElementById("olympicmodal");
var caption4 = document.getElementById("olympicCaption");
olympicImg.onclick = function () {
  modal4.style.display = "block";
  caption4.innerHTML = this.alt;
}
var span4 = document.getElementsByClassName("closeOlympic")[0];
span4.onclick = function () {
  modal4.style.display = "none";
}

// Swim Modal(#5)
var modal5 = document.getElementById("modal5");
var swimImg = document.getElementById("swimmodal");
var caption5 = document.getElementById("swimCaption");
swimImg.onclick = function () {
  modal5.style.display = "block";
  caption5.innerHTML = this.alt;
}
var span5 = document.getElementsByClassName("closeSwim")[0];
span5.onclick = function () {
  modal5.style.display = "none";
}

// Hamster Modal(#6)
var modal6 = document.getElementById("modal6");
var hamsterImg = document.getElementById("hamstermodal");
var caption6 = document.getElementById("hamsterCaption");
hamsterImg.onclick = function () {
  modal6.style.display = "block";
  caption6.innerHTML = this.alt;
}
var span6 = document.getElementsByClassName("closeHamster")[0];
span6.onclick = function () {
  modal6.style.display = "none";
}



