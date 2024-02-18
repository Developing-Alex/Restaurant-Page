import { homePageLoader } from "./home-page-load";
import headLoader from "./home-page-load";
import menuPageLoader from "./menu-load";
import contactLoader from "./contact-load";
import "./style.css";


export default function component() {
  const header = document.createElement('header');

  document.body.appendChild(header);

  const nav = document.createElement('nav');

  const homeBtn = document.createElement('button');
  homeBtn.id = 'home-btn';
  homeBtn.innerText = 'Home'

  const menuBtn = document.createElement('button');
  menuBtn.id = 'menu-btn';
  menuBtn.innerText = 'Menu';

  const contactBtn = document.createElement('button');
  contactBtn.id = 'contact-btn';
  contactBtn.innerText = 'Contact';

  const navArr = [homeBtn, menuBtn, contactBtn];

  navArr.forEach(e => nav.appendChild(e));
  header.appendChild(nav);

  //Generates the name of the restaurant inside of the header which prepends the navbar
  header.prepend(headLoader());

  const content = document.createElement('div');
  content.id = ('content');

  document.body.appendChild(content);
  
  const contentContainer = document.createElement('div');
  contentContainer.id = 'content-container';

  //this function is used in conjection with button specific functions to generate content in the contentContainer
  const contentGenerator = (innerContent) => {
    content.appendChild(innerContent)
  };
  
  //button specific function to be called with an event listener
  const menuCompontent = () => {
    while(contentContainer.firstChild){
      contentContainer.removeChild(contentContainer.firstChild);
    }
    contentGenerator(menuPageLoader(contentContainer));
  };

  

  menuBtn.addEventListener('click', menuCompontent);

  //Initial generation of content upon loading the webpage at the home screen
  contentGenerator(homePageLoader(contentContainer));



  // export homePageContent function
  //const homePageContent = () => content.appendChild(homePageLoader(contentContainer));

  
  

  //button specific function to be called with an event listener
  const homeComponent = () => {
    while(contentContainer.firstChild){
      contentContainer.removeChild(contentContainer.firstChild);
    }
    contentGenerator(homePageLoader(contentContainer));
  };

  homeBtn.addEventListener('click', homeComponent);

  

  const contactComponent = () => {
    while(contentContainer.firstChild){
      contentContainer.removeChild(contentContainer.firstChild);
    }
    contentGenerator(contactLoader(contentContainer));
  };

  contactBtn.addEventListener('click', contactComponent);

}
