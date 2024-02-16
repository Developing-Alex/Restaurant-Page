import { homePageLoader } from "./home-page-load";
import headLoader from "./home-page-load";
import menuPageLoader from "./menu-load";
import "./style.css";


function component(func) {
  const header = document.querySelector('header');

  header.prepend(headLoader());

  const content = document.getElementById('content');

  const contentContainer = document.createElement('div');
  contentContainer.id = 'content-container';

  const menuBtn = document.getElementById('menu-btn');

  const contentGenerator = (innerContent) => {
    content.appendChild(innerContent)
  };
  
  //needs to remove current content in contentContiner before generating
  const menuCompontent = () => contentGenerator(menuPageLoader(contentContainer));

  menuBtn.addEventListener('click', menuCompontent);

  contentGenerator(homePageLoader(contentContainer));



  // export homePageContent function
  //const homePageContent = () => content.appendChild(homePageLoader(contentContainer));

  
  //^^This will live in the menu-page-load and contact-page-load
  //homeBtnComponent();

  //homePageContent();

  return {
    homePageContent
  }
}

export default component
component();
