function createMenuItem(name, description) {
  const menuItem = document.createElement("div");
  menuItem.className = 'menu-item';

  const foodName = document.createElement("h3");
  foodName.innerHTML = name;
  foodName.className = 'menu-item-name';

  const foodDescription = document.createElement("p");
  foodDescription.innerHTML = description;
  foodDescription.className = 'menu-item-description';

  menuItem.appendChild(foodName);
  menuItem.appendChild(foodDescription);

  return menuItem;
}

export default function createMenu(container){

  //Meat Menu
  const meatContainer = document.createElement('div');
  meatContainer.id = 'meat-container';

  const meatTitle = document.createElement('h2');
  meatTitle.id = 'meat-title';
  meatTitle.className = 'menu-title';
  meatTitle.innerText = 'Meats';

  const chicken = createMenuItem(
    'Barbeque Chicken',
    'Dubbed "Best Chicken in America!". One half of a chicken is barbequed to mouth watering perfection, then smothered in our "Smokey, Spicey & Sweet" barbeque sauce!'
  );
  
  const brisket = createMenuItem(
    'Brisket',
    `Succulent beef brisket smoked to perfection, incredible flavour all by itself but served with a side of our "Smokey, Spicey & Sweet" barbeque sauce to give it that extra <em>umph</em>!`
  );
  const ribs = createMenuItem(
    'Baby Back Ribs',
    `Fall of the bone tender baby-back ribs that speak for themselves! Served with a side of our "Smokey, Spicey & Sweet" barbeque sauce!`
  )
  const pulledPork = createMenuItem(
    'Pulled Pork',
    `Pork shoulder so tender and juicy, you'll wanna call your meemaw to spread the word! Served with a side of our "Smokey, Spicey & Sweet" barbeque sauce!`
  );
  
  const meatMenu = [chicken, brisket, ribs,pulledPork];

  meatMenu.forEach(meat => meatContainer.appendChild(meat));

  //Sides Menu

  const sidesContainer = document.createElement('div');
  sidesContainer.id = 'sides-container';

  const sidesTitle = document.createElement('h2');
  sidesTitle.id = 'sides-title';
  sidesTitle.className = 'menu-title';
  sidesTitle.innerText = 'Sides';

  const beans = createMenuItem(
    'Baked Beans',
    "Grandma's recipe! A crowd favorite! Saucy, rich and complexe flavor that never disappoints!"
  );

  const cornBread = createMenuItem(
    'Honey Corn Bread',
    "Moist honey drizzled corn bread, hot and ready to enjoy!"
  );

  const macAndCheese = createMenuItem(
    "Mac-n-Cheese",
    "Melted into a rich and creamy cheese sauce, for the ultimate in cheesy deliciousness!"
  )

  const coleslaw = createMenuItem(
    'Coleslaw',
    "Light and creamy with a sweet tangyness that pairs well with our assortment of meats!"
  )

  const sidesMenu = [beans, cornBread, macAndCheese, coleslaw];

  sidesMenu.forEach(side => sidesContainer.appendChild(side));

  //Generating the whole menu 

  const menu = [meatTitle, meatContainer, sidesTitle, sidesContainer];

  menu.forEach(menuContainer => container.appendChild(menuContainer));

  return container
}

