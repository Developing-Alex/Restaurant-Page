import headLoader from "./home-page-load";
import component from "./index";

const menuPageLoader = (container) => {

  container.style.display = 'grid';

  const chicken = document.createElement('div');
  chicken.id = 'chicken-container';

  const chickenTitle = document.createElement('h3');
  chickenTitle.id = 'chicken-title';
  chickenTitle.innerText = 'Barbequed Chicken';

  const chickenDescription = document.createElement('p');
  chickenDescription.id = 'chicken-description';
  chickenDescription.innerText = 'Dubbed "Best Chicken in America!". One half of a chicken is barbequed to mouth watering perfection, then smothered in our "Smokey, Spicey & Sweet" barbeque sauce!';

  chicken.appendChild(chickenTitle);
  chicken.appendChild(chickenDescription);



  //component().homeBtnComponent();
  const menu = [chicken];

  menu.forEach(e => container.appendChild(e));

  return container;
}

export default menuPageLoader;
//menuPageLoader();

/*function homeBtnComponent() {
  const homeBtn = document.getElementById('home-btn');

  homeBtn.addEventListener('click', component.homePageContent, { once: true })
}*/