import { homePageLoader } from "./home-page-load";
import loadHeader from "./home-page-load";
import createMenu from "./menu-load";
import contactLoader from "./contact-load";
import "./style.css";


export default function component() {
  loadHeader();

  const content = document.createElement('div');
  content.id = ('content');

  document.body.appendChild(content);
  
  const contentContainer = document.createElement('div');
  contentContainer.id = 'content-container';

  //this function is used in conjection with button event handler to generate content in the contentContainer
  const contentGenerator = (innerContent) => {
    content.appendChild(innerContent)
  };

   //Initial generation of content upon loading the webpage at the home screen
   contentGenerator(homePageLoader(contentContainer)); 

   //Event handler for home button
   const homeComponent = () => {
    while(contentContainer.firstChild){
      contentContainer.removeChild(contentContainer.firstChild);
    }
    contentGenerator(homePageLoader(contentContainer));
  };

  document.getElementById('home-btn').onclick = homeComponent;

  
  //Event handler for menu button
  const menuCompontent = () => {
    while(contentContainer.firstChild){
      contentContainer.removeChild(contentContainer.firstChild);
    }
    contentGenerator(createMenu(contentContainer));
  };

  document.getElementById('menu-btn').onclick = menuCompontent;

  //Event handler for contact button
  const contactComponent = () => {
    while(contentContainer.firstChild){
      contentContainer.removeChild(contentContainer.firstChild);
    }
    contentGenerator(contactLoader(contentContainer));
  };

  document.getElementById('contact-btn').onclick = contactComponent;

}
