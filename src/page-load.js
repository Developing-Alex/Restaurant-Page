import Chef from './assets/images/pexels-sides-imagery-3351927.jpg'

const headLoader = () => {
  const title = document.createElement('h1');

  title.innerText = "Bishop's Birdhouse";
  title.id = 'title';

  return title;
}

const contentLoader = () => {

  const contentContainer = document.createElement('div');
  contentContainer.id = 'content-container';

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

  contentArr.forEach(e => contentContainer.appendChild(e));

  
  
  return contentContainer;
}

export { contentLoader, headLoader}