

/*hiding divs by default*/

// simple function determines if el is in viewport
function elInView(el){
  let VP = el.getBoundingClientRect();  //rtrns the size of an element and its rel. position to vp
  return (
    VP.top>= 0 &&
    VP.left>= 0 &&
    VP.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    VP.right <= (window.innerWidth || document.documentElement.clientWidth)
    ); // If the element is in the viewport, the function returns true. Otherwise, it returns false.
};

// add inView class to the LI that are within Viewport
let listItems = document.querySelectorAll(".timeline li");

function callbackF(){
  for(let i = 0; i < listItems.length; i++){ // loops through all list items applying elinview func
    if (elInView(listItems[i])){ // if item returns true from elinview func the list item class update
      listItems[i].classList.add("in-vp");
    }
  }
};

// runs above function whenever user scrolls or reloads screen
window.addEventListener("load", callbackF);
window.addEventListener('scroll', callbackF);

