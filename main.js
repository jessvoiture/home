// side panel
$('.sp-clicker').click(function(e) {

  // show side panel
  $('.sidepanel').toggleClass("show-sp"); 
  $('.sp-clicker').toggleClass("move-clicker"); 

  // rotate arrow
  $('i').toggleClass("rotate-i"); 

  // stop scrolling when side panel is visible
  $('body').toggleClass("no-scroll"); 



  e.preventDefault();

});

$('.label-wrapper').click(function(e) {

  // hide side panel
  $('.sidepanel').removeClass("show-sp"); 
  $('.sp-clicker').removeClass("move-clicker"); 

  // stop scrolling when side panel is visible
  $('body').removeClass("no-scroll"); 

  // rotate arrow
  $('i').removeClass("rotate-i"); 

  e.preventDefault();

});

// hover to show image
let attached = false;

var imgHeight;

const getElmtImage = (elmt) => {
  return elmt.querySelector(".hover-image")
}

const getImageHeight = (elmt) => {
  return elmt.querySelector(".hover-image").height;
}

const followMouse = (elmt, event, height) => {
  elmt.style.left = (event.x + 100) + "px";
  elmt.style.top = (event.y - height) + "px";
}

function showImage(elmt) {
  const image = getElmtImage(elmt)
  if (!attached) {
    attached = true;
    image.style.display = "block";
    height = image.height;
    document.addEventListener("pointermove", function(event) {
      followMouse(image, event, height)
    });
  }
}

function hideImage(elmt) {
  const image = getElmtImage(elmt)
  attached = false;
  image.style.display = "none";
  document.removeEventListener("pointermove", followMouse);
}