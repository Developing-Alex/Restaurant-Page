import Chef from './assets/images/pexels-sides-imagery-3351927.jpg';
import menuPageLoader from "./menu-load";

const headLoader = () => {
  const title = document.createElement('h1');

  title.innerText = "Bishop's Birdhouse";
  title.id = 'title';

  return title;
}

export default headLoader;

const homePageLoader = (container) => {

  container.style.display = 'flex';
  container.style.flexDirection = 'column';

  const heading = document.createElement('h2');

  heading.textContent = 'Best Chicken in America!';
  heading.id = 'heading';
  
  const about = document.createElement('p');

  about.textContent = `Voted Best Chicken in America three times in a row! We at Bishop's Birdhouse strive to bring you the best finger lickin' chicken experience the country has to offer!`;
  about.id = 'about';

  const chefImage = new Image();
  chefImage.src = Chef;
  chefImage.id = 'chef-image';

  const contentArr = [heading, about, chefImage];

  contentArr.forEach(e => container.appendChild(e));

  return container;
}


export { homePageLoader }
