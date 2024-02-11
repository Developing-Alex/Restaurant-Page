import { contentLoader, headLoader } from "./page-load";
import "./style.css";
import FriedChicken from './gingham-fried-chicken.jpg';

function component(){
  const header = document.querySelector('header');
  
  header.prepend(headLoader());

  const content = document.getElementById('content');

  contentLoader().forEach(e => content.appendChild(e));

  const friedChicken = new Image();
  friedChicken.src = FriedChicken;
  friedChicken.id = 'friedChicken';

  content.appendChild(friedChicken);
}



component();