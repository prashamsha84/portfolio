// spiral js
    const myTags = [
    'JavaScript', 'CSS', 'HTML',
    'Bootstrap', 'React' ,'Figma',
    'Python', 'Java', 'GitHub',
    'AdobeXD', 'Photoshop', 'UI/UX',
    'Illutration', 'MsSQL', 'C#',
];

var tagCloud = TagCloud('.content', myTags,{

// radius in px
radius: 160,

// animation speed
// slow, normal, fast
maxSpeed: 'fast',
initSpeed: 'fast',

// 0 = top
// 90 = left
// 135 = right-bottom
direction: 145,

// interact with cursor move on mouse out
keep: true

}); 
var colors = ['#00FFFF'];

document.querySelector('.content').style.color = colors;


//nav-active
const sections = document.querySelectorAll("section[id]");
window.addEventListener("scroll", scrollActive); 

function scrollActive() {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    sectionId = current.getAttribute("id");

    if (scrollY > sectionTop && 
        scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".nav-links a[href*=" + sectionId + "]")
        .classList.add("active-link");
    } else {
      document
        .querySelector(".nav-links a[href*=" + sectionId + "]")
        .classList.remove("active-link");
    }
  });
}

// scroll animation

function scrollbm() {
  var scrolls = document.querySelectorAll(".scroll-bm");

  for (var i = 0; i <  scrolls.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = scrolls[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      scrolls[i].classList.add("active");
    } else {
      scrolls[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", scrollbm);






