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

  const menu = [chicken, brisket, babyBackRibs, pulledPork];

  menu.forEach(e => container.appendChild(e));

  return container;
}

export default menuPageLoader;