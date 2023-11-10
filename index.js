// spiral js
    const myTags = [
    'JavaScript', 'CSS', 'HTML',
    'C', 'React' ,'Figma',
    'Python', 'Java', 'GitHub',
    'AdobeXD', 'Photoshop', 'UI/UX',
    'Illutration', 'MsSQL', 'C#',
];

var tagCloud = TagCloud('.content', myTags,{

// radius in px
radius: 240,

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

// // Get all elements matching the selector '.nav li'
// const elements = document.querySelectorAll('.nav li');

// // Function to handle the click event on elements
// function handleElementClick(event) {
//     // Remove the 'active' class from all elements
//     elements.forEach(element => element.classList.remove('active'));

//     // Add the 'active' class to the clicked element
//     this.classList.add('active');
// }

// // Add click event listeners to all elements matching the selector
// elements.forEach(element => element.addEventListener('click', handleElementClick));

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







