
/**
 * Define Global Variables
 * 
*/
const sections =Array.from(document.querySelectorAll('section'));
const navigationList = document.getElementById("navbar__list");

/**
 * End Global Variables
 * Begin Main Functions
 * 
*/

// build the nav
function createNavList(){
  for( const section of sections){
    const element=document.createElement('li');
    const secID = section.id;
    const secDataNav = section.dataset.nav;
    element.innerHTML=`<a href="#${secID}" data-nav="${secID}" class="menu__link">${secDataNav}</a>`;
    navigationList.appendChild(element);
  }
}
createNavList();


//when clicking an item in navbar ,the link should scroll to the appropriate section
function scroll(item) {
  item.preventDefault();
  const eventData=item.target.dataset.nav;
  if(eventData){
    document.getElementById(`${eventData}`).scrollIntoView({behavior:"smooth"});
  }};
  
navigationList.addEventListener("click",scroll);

// Add class active to section when near top of viewport
//the active section of navbar highlighted
//active states with getboundingclientrect function
function activation() {
	const elements=document.getElementsByTagName("section");
  for(elem of elements){
    const Link = navigationList.querySelector(`[data-nav=${elem.id}]`);
	if(!(elem.getBoundingClientRect().top >= -350 && elem.getBoundingClientRect().top <= 150)){

    elem.classList.remove("your-active-class");
    Link.classList.remove("active-link");
    }
  else{

    elem.classList.add("your-active-class");
    Link.classList.add("active-link");
    }
  }}

window.onscroll = function () {
   activation();
 };



/**
 * End Main Functions
 **/



