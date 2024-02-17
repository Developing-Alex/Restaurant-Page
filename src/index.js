import { homePageLoader } from "./home-page-load";
import headLoader from "./home-page-load";
import menuPageLoader from "./menu-load";
import "./style.css";


export default function component() {
  const header = document.querySelector('header');

  //Generates the name of the restaurant inside of the header which prepends the navbar
  header.prepend(headLoader());

  const content = document.getElementById('content');
  
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

  const menuBtn = document.getElementById('menu-btn');

  menuBtn.addEventListener('click', menuCompontent);

  //Initial generation of content upon loading the webpage at the home screen
  contentGenerator(homePageLoader(contentContainer));



  // export homePageContent function
  //const homePageContent = () => content.appendChild(homePageLoader(contentContainer));

  
  const homeBtn = document.getElementById('home-btn');

  //button specific function to be called with an event listener
  const homeComponent = () => {
    while(contentContainer.firstChild){
      contentContainer.removeChild(contentContainer.firstChild);
    }
    contentGenerator(homePageLoader(contentContainer));
  };

  homeBtn.addEventListener('click', homeComponent);

}

component();