let attached = false;

var imgHeight;

const getElmtImage = (elmt) => {
  return elmt.querySelector("img")
}

const getImageHeight = (elmt) => {
  return elmt.querySelector("img").height;
}

const followMouse = (elmt, event, height) => {
  elmt.style.left = event.x + "px";
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