import Location from './assets/images/location.jpg';

export default function contactLoader(container){
  container.style.display = 'flex';
  container.style.flexDirection = 'column';

  const orderClick = document.createElement('button');
  orderClick.id = 'order-click';
  orderClick.innerText = 'Order Here';

  const contactInfoContainer = document.createElement('div');
  contactInfoContainer.id = 'contact-info-container';

  const phoneNumber = document.createElement('p');
  phoneNumber.className = 'contact-info';
  phoneNumber.innerText = 'Phone: 123-456-7890';

  const address = document.createElement('p');
  address.className = 'contact-info';
  address.innerText = 'Address: 777 Broadway Ave West, Minneapolis, MN 55412';

  const contactInfo = [phoneNumber, address];

  contactInfo.forEach(e => contactInfoContainer.appendChild(e));

  const locationMap = new Image();
  locationMap.src = Location;
  locationMap.id = 'location-map';

  const contactArr = [orderClick ,contactInfoContainer, locationMap];

  contactArr.forEach(e => container.appendChild(e));

  return container;
}