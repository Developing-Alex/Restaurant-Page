import headLoader from "./home-page-load";
import component from "./index";
import { homePageLoader } from "./home-page-load";

const menuPageLoader = (container) => {

  container.style.display = 'grid';
  container.style.gridTemplateColumns = 'repeat(2, 1fr)';

  const chicken = document.createElement('div');
  chicken.id = 'chicken-container';
  chicken.className = 'menu-item';

  const chickenTitle = document.createElement('h3');
  chickenTitle.id = 'chicken-title';
  chickenTitle.className = 'menu-item-title';
  chickenTitle.innerText = 'Barbeque Chicken';

  const chickenDescription = document.createElement('p');
  chickenDescription.id = 'chicken-description';
  chickenDescription.className = 'menu-item-description';
  chickenDescription.innerText = 'Dubbed "Best Chicken in America!". One half of a chicken is barbequed to mouth watering perfection, then smothered in our "Smokey, Spicey & Sweet" barbeque sauce!';

  chicken.appendChild(chickenTitle);
  chicken.appendChild(chickenDescription);

  const brisket = document.createElement('div');
  brisket.id = 'brisket-container';
  brisket.className = 'menu-item';

  const brisketTitle = document.createElement('h3');
  brisketTitle.id = 'brisket-title';
  brisketTitle.className = 'menu-item-title';
  brisketTitle.innerText = 'Brisket';

  const brisketDescription = document.createElement('p');
  brisketDescription.id = 'brisket-description';
  brisketDescription.className = 'menu-item-description';
  brisketDescription.innerHTML = `Succulent beef brisket smoked to perfection, incredible flavour all by itself but served with a side of our "Smokey, Spicey & Sweet" barbeque sauce to give it that extra <em>umph</em>!`;
  
  brisket.appendChild(brisketTitle);
  brisket.appendChild(brisketDescription);

  const menu = [chicken, brisket];

  menu.forEach(e => container.appendChild(e));

  return container;
}

export default menuPageLoader;