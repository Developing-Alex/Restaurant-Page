const headLoader = () => {
  const title = document.createElement('h1');

  title.innerText = "Bishop's Birdhouse";
  title.id = 'title';

  return title;
}

const contentLoader = () => {

  const heading = document.createElement('h2');

  heading.textContent = 'Best Chicken in America!';
  heading.id = 'heading'
  
  const about = document.createElement('p');

  about.textContent = `Voted Best Chicken in America three times in a row! We at Bishop's Birdhouse strive to bring you the best finger lickin' chicken experience the country has to offer!`;
  about.id = 'about';
  
  return [heading, about];
}

export { contentLoader, headLoader}