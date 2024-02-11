const headLoader = () => {
  const title = document.createElement('h1');

  title.innerText = "Bishop's Birdhouse";
  title.id = 'title';

  return title;
}

const contentLoader = () => {

  const heading = document.createElement('h2');

  heading.textContent = 'Best Chicken in America!';
  //heading.id = 
  
  const about = document.createElement('p');

  about.textContent = 'lorem';
  about.id = 'hello';
  
  return [heading, about];
}

export { contentLoader, headLoader}