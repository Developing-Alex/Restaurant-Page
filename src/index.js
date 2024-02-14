import { contentLoader, headLoader } from "./page-load";
import "./style.css";


function component(){
  const header = document.querySelector('header');
  
  header.prepend(headLoader());

  const content = document.getElementById('content');

  content.appendChild(contentLoader());
}



component();