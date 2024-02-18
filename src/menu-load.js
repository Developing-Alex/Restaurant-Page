export default function menuPageLoader(container){  
  
  //Meats

  const meatContainer = document.createElement('div');
  meatContainer.id = 'meat-container';

  const meatTitle = document.createElement('h2');
  meatTitle.id = 'meat-title';
  meatTitle.className = 'menu-title'
  meatTitle.innerText = 'Meats';

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


  const babyBackRibs = document.createElement('div');
  babyBackRibs.id = 'baby-back-ribs-container';
  babyBackRibs.className = 'menu-item';

  const babyBackRibsTitle = document.createElement('h3');
  babyBackRibsTitle.id = 'baby-back-ribs-title';
  babyBackRibsTitle.className = 'menu-item-title';
  babyBackRibsTitle.innerText = 'Baby-Back Ribs';

  const babyBackRibsDescription = document.createElement('p');
  babyBackRibsDescription.id = 'baby-back-ribs-description';
  babyBackRibsDescription.className = 'menu-item-description';
  babyBackRibsDescription.innerHTML = `Fall of the bone tender baby-back ribs that speak for themselves! Served with a side of our "Smokey, Spicey & Sweet" barbeque sauce!`;
  
  babyBackRibs.appendChild(babyBackRibsTitle);
  babyBackRibs.appendChild(babyBackRibsDescription);

  const pulledPork = document.createElement('div');
  pulledPork.id = 'pulled-pork-container';
  pulledPork.className = 'menu-item';

  const pulledPorkTitle = document.createElement('h3');
  pulledPorkTitle.id = 'pulled-pork-title';
  pulledPorkTitle.className = 'menu-item-title';
  pulledPorkTitle.innerText = 'Pulled Pork';

  const pulledPorkDescription = document.createElement('p');
  pulledPorkDescription.id = 'pulled-pork-description';
  pulledPorkDescription.className = 'menu-item-description';
  pulledPorkDescription.innerHTML = `Pork shoulder so tender and juicy, you'll wanna call your meemaw to spread the word! Served with a side of our "Smokey, Spicey & Sweet" barbeque sauce!`;
  
  pulledPork.appendChild(pulledPorkTitle);
  pulledPork.appendChild(pulledPorkDescription);

  const meatMenu = [chicken, brisket, babyBackRibs, pulledPork];

  meatMenu.forEach(e => meatContainer.appendChild(e));

  //Sides

  const sidesContainer = document.createElement('div');
  sidesContainer.id = 'sides-container';

  const sidesTitle = document.createElement('h2');
  sidesTitle.id = 'sides-title';
  sidesTitle.className = 'menu-title';
  sidesTitle.innerText = 'Sides';

  const bakedBeans = document.createElement('div');
  bakedBeans.id = 'baked-beans-container';
  bakedBeans.className = 'menu-item';

  const bakedBeansTitle = document.createElement('h3');
  bakedBeansTitle.id = 'baked-beans-title';
  bakedBeansTitle.className = 'menu-item-title';
  bakedBeansTitle.innerText = 'Baked Beans';

  const bakedBeansDescription = document.createElement('p');
  bakedBeansDescription.id = 'baked-beans-description';
  bakedBeansDescription.className = 'menu-item-description';
  bakedBeansDescription.innerText = "Grandma's recipe! A crowd favorite! Saucy, rich and complexe flavor that never disappoints!";

  bakedBeans.appendChild(bakedBeansTitle);
  bakedBeans.appendChild(bakedBeansDescription);

  const cornBread = document.createElement('div');
  cornBread.id = 'corn-bread-container';
  cornBread.className = 'menu-item';

  const cornBreadTitle = document.createElement('h3');
  cornBreadTitle.id = 'corn-bread-title';
  cornBreadTitle.className = 'menu-item-title';
  cornBreadTitle.innerText = 'Honey Corn Bread';

  const cornBreadDescription = document.createElement('p');
  cornBreadDescription.id = 'corn-bread-description';
  cornBreadDescription.className = 'menu-item-description';
  cornBreadDescription.innerText = "Moist honey drizzled corn bread, hot and ready to enjoy!";

  cornBread.appendChild(cornBreadTitle);
  cornBread.appendChild(cornBreadDescription);

  const macAndCheese = document.createElement('div');
  macAndCheese.id = 'mac-n-cheese-container';
  macAndCheese.className = 'menu-item';

  const macAndCheeseTitle = document.createElement('h3');
  macAndCheeseTitle.id = 'mac-n-cheese-title';
  macAndCheeseTitle.className = 'menu-item-title';
  macAndCheeseTitle.innerText = 'Mac-n-Cheese';

  const macAndCheeseDescription = document.createElement('p');
  macAndCheeseDescription.id = 'mac-n-cheese-description';
  macAndCheeseDescription.className = 'menu-item-description';
  macAndCheeseDescription.innerText = "Melted into a rich and creamy cheese sauce, for the ultimate in cheesy deliciousness!";

  macAndCheese.appendChild(macAndCheeseTitle);
  macAndCheese.appendChild(macAndCheeseDescription);

  const coleslaw = document.createElement('div');
  coleslaw.id = 'colslaw-container';
  coleslaw.className = 'menu-item';

  const coleslawTitle = document.createElement('h3');
  coleslawTitle.id = 'coleslaw-title';
  coleslawTitle.className = 'menu-item-title';
  coleslawTitle.innerText = 'Coleslaw';

  const coleslawDescription = document.createElement('p');
  coleslawDescription.id = 'colslaw-description';
  coleslawDescription.className = 'menu-item-description';
  coleslawDescription.innerText = "Light and creamy with a sweet tangyness that pairs well with our assortment of meats!";

  coleslaw.appendChild(coleslawTitle);
  coleslaw.appendChild(coleslawDescription);

  const sidesMenu = [bakedBeans, cornBread, macAndCheese, coleslaw];

  sidesMenu.forEach(e => sidesContainer.appendChild(e));

  const menu = [meatTitle, meatContainer, sidesTitle, sidesContainer]

  menu.forEach(e => container.appendChild(e));

  return container;
}