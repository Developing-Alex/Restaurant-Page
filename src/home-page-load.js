import Chef from './assets/images/pexels-sides-imagery-3351927.jpg';

const loadHeader = () => {
  const header = document.createElement('header');

  const title = document.createElement('h1');

  title.innerText = "Bishop's Birdhouse";
  title.id = 'title';

  const nav = document.createElement('nav');

  const homeBtn = document.createElement('button');
  homeBtn.id = 'home-btn';
  homeBtn.innerText = 'Home'

  const menuBtn = document.createElement('button');
  menuBtn.id = 'menu-btn';
  menuBtn.innerText = 'Menu';

  const contactBtn = document.createElement('button');
  contactBtn.id = 'contact-btn';
  contactBtn.innerText = 'Contact';

  const navArr = [homeBtn, menuBtn, contactBtn];

  navArr.forEach(e => nav.appendChild(e));
  
  header.appendChild(title);
  header.appendChild(nav);

  //const headerElements = [title, nav];

  //headerElements.forEach(element => header.appendChild(element));

  document.body.appendChild(header);

}

export default loadHeader;

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

  const orderOnline = document.createElement('p');
  orderOnline.id = 'order-online';
  orderOnline.innerText = 'Order online now available!'

  const contentArr = [heading, about, chefImage, orderOnline];

  contentArr.forEach(e => container.appendChild(e));

  return container;
}


export { homePageLoader }
