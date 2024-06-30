// local storage
let mainColors = localStorage.getItem("color_option");
if (mainColors !== null) {
  document.documentElement.style.setProperty(
    "--main-color",
    localStorage.getItem("color_option")
  );
  // remove active color for all list items
  document.querySelectorAll(".colors-list-li").forEach((element) => {
    element.classList.remove("active");
    // add class on element
    if (element.dataset.color === mainColors) {
      element.classList.add("active");
    }
  });
}

// setting box
document.querySelector(".toggle-settings .fa-gear").onclick = function () {
  this.classList.toggle("fa-spin");
  document.querySelector(".setting-box").classList.toggle("open");
};
// switch colors
const colorsli = document.querySelectorAll(".colors-list");
colorsli.forEach((li) => {
  li.addEventListener("click", (e) => {
    document.documentElement.style.setProperty(
      "--main-color",
      e.target.dataset.color
    );
    // set color on local
    localStorage.setItem("color_option", e.target.dataset.color);
    // remove Active
    e.target.parentElement.querySelectorAll(".active").forEach((element) => {
      element.classList.remove("active");
    });
    // add active class
    e.target.classList.add("active");
  });
});
// rondom backgrond Option
let bgOption = true;
// variable to the Interval
let bgInterval;
// local storage bg
let bgLI = localStorage.getItem("bg_option");
// check local storage bg
if (bgLI !== null) {
  if ((bgOption = "true")) {
    bgOption = true;
  } else {
    bgOption = false;
  }
  document.querySelectorAll(".random-background span").forEach((element) => {
    element.classList.remove("active");
  });
  if (bgLI === "true") {
    document.querySelector(".random-background .yes").classList.add("active");
  } else {
    document.querySelector(".random-background .no").classList.add("active");
  }
}
// switch elementbackground
const randomBackEl = document.querySelectorAll(".random-background span");
randomBackEl.forEach((span) => {
  span.addEventListener("click", (e) => {
    // remove Active span
    e.target.parentElement.querySelectorAll(".active").forEach((element) => {
      element.classList.remove("active");
    });
    // add active span
    e.target.classList.add("active");
    if (e.target.dataset.bg === "yes") {
      bgOption = true;
      localStorage.setItem("bg_option", true, randomImgs());
    } else {
      bgOption = false;
      clearInterval(bgInterval);
      localStorage.setItem("bg_option", false);
    }
  });
});

// select landing page Element
let landingPage = document.querySelector(".landing-page");
// array images
let imgsArray = ["bg1.jpg", "bg2.jpg", "bg3.jpg", "bg4.jpg", "bg5.jpg"];
// function to Random Imgs
function randomImgs() {
  if (bgOption === true) {
    bgInterval = setInterval(() => {
      // get random
      let randomNumber = Math.floor(Math.random() * imgsArray.length);
      // Image url
      landingPage.style.backgroundImage =
        'url("imgs/' + imgsArray[randomNumber] + '")';
    }, 1000);
  }
}
randomImgs();

// skills selector
let OurSkills = document.querySelector(".skills");

window.onscroll = function () {
  // skills offset top
  let skillsOffsetTop = OurSkills.offsetTop;
  // skills Outer Height
  let skillsOutterHeight = OurSkills.offsetHeight;
  // window Hieght
  let windowHeight = this.innerHeight;

  //window scrollTop
  let windowScrollTop = this.pageYOffset;

  let allSkills = document.querySelectorAll(".skill-box .skill-power span");
  allSkills.forEach((skill) => {
    skill.style.width = skill.dataset.power;
  });
};
// Create popup with Image
let ourGallery = document.querySelectorAll(".gallery img");
ourGallery.forEach((img) => {
  img.addEventListener("click", (e) => {
    // create overlay element
    let overlay = document.createElement("div");
    // Add class to overlay
    overlay.className = "popup-overlay";
    // Append overlay to the body
    document.body.appendChild(overlay);
    // create The popup box
    let popupbox = document.createElement("div");
    // Add Class to the popup box
    popupbox.className = "popup-box";

    if (img.alt !== null) {
      // create heading
      let imgHeading = document.createElement("h3");
      // create text for heading
      let imgText = document.createTextNode(img.alt);
      // Append the text to the heading
      imgHeading.appendChild(imgText);
      // append the Heading to popup box
      popupbox.appendChild(imgHeading);
    }
    // create the Image
    let popupImage = document.createElement("img");
    // set Image Source
    popupImage.src = img.src;
    // add Image to popup
    popupbox.appendChild(popupImage);
    // Appenedmthe popup box to body
    document.body.appendChild(popupbox);
    //create close span
    let closeButton = document.createElement("span");
    // create the close button text
    let closeButtonText = document.createTextNode("X");
    // Append Text to close Button
    closeButton.appendChild(closeButtonText);
    // Add class button to the popup box
    closeButton.className = "close-button";
    // Add Close button to the popup
    popupbox.appendChild(closeButton);
  });
});
// close popup
document.addEventListener("click", function (e) {
  if (e.target.className == "close-button") {
    // remove current popup
    e.target.parentNode.remove();
    // remove overlay
    document.querySelector(".popup-overlay").remove();
  }
});
// select all bulleet
const allBullets = document.querySelectorAll(".nav-bullets .bullet");
allBullets.forEach((bullet) => {
  bullet.addEventListener("click", (e) => {
    document.querySelector(e.target.dataset.section).scrollIntoView({
      behavior: "smooth",
    });
  });
});
// All links
const allLinks = document.querySelectorAll(".links a");
allLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    document.querySelector(e.target.dataset.section).scrollIntoView({
      behavior: "smooth",
    });
  });
});
function handdleActive(ev){
  ev.target.parentElement.querySelectorAll(".active").forEach(element=>{
  element.classList.remove("active");
});
  ev.target.classList.add("active");
}

let bulletSpan = document.querySelectorAll(".bullet-option span");
let bulletContainer = document.querySelector(".nav-bullets");
let bulletLocalItem = localStorage.getItem("bullet_option");
if(bulletLocalItem !== null){
  bulletSpan.forEach(span =>{
    span.classList.remove("active");
  });
  if(bulletLocalItem==='block'){
    bulletContainer.style.display= 'block';
    document.querySelector(".bullet-option .yes").classList.add("active");
  }else{
    bulletContainer.style.display= 'none';
    document.querySelector(".bullet-option .no").classList.add("active");

  }
}
bulletSpan.forEach(span =>{
  span.addEventListener("click", (e) => {
    if(span.dataset.display ==='show'){
      bulletContainer.style.display = 'block';
      localStorage.setItem("bullet_option",'block');
    }else{
      bulletContainer.style.display = 'none';
      localStorage.setItem("bullet_option",'none');
    }
    handdleActive(e);
  })
});
// reset button
document.querySelector(".resetoption").onclick= function(){
  localStorage.clear();
  // reload window
  window.location.reload()
}
// Toggle menu
let toggleBtn = document.querySelector(".toggle-menu");
let tLinks = document.querySelector(".links");

toggleBtn.onclick = function(e){
  e.stopPropagation();
  this.classList.toggle("menu-active");
  tLinks.classList.toggle("open");
};
// click anywhere outside
document.addEventListener("click", (e)=>{
  if(e.target !== toggleBtn && e.target !== tLinks){
    // check if menu is open
    if(tLinks.classList.contains("open")){
      toggleBtn.classList.toggle("menu-active");
      tLinks.classList.toggle("open");
    }
  }
});
// stop propagation
tLinks.onclick = function(e){
  e.stopPropagation();
}