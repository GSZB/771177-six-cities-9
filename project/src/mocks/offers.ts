
const apartmentTypes = ['apartment', 'room', 'house', 'hotel'];
const householdItems = ['Hair dryer', 'Shampoo', 'Essentials', 'Bed linens', 'TV', 'Crib', 'Smoke alarm', 'First aid kit', 'Wifi', 'Refrigerator', 'Microwave'];
const names = ['Steve', 'Eric', 'Victor', 'Susan', 'Franz'];
const titles = ['Studio Koggeschip Amsterdam BB', 'Buenas Noches - The Loft', 'Master Bedroom on Canal of Amsterdam City Center', 'New amazing 4 person Jordaan Apartment'];
const rating = ['0%', '20%', '40%', '60%', '80%', '100%'];

function getRandomInt(min: number, max: number) {

  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function getRandomArrayElement(elements: string[]) {
  return elements[getRandomInt(0, elements.length - 1)];
}

// const getRandomPhotoUrl = () => `http://picsum.photos/248/152?r=${ getRandomInt(0, 100) }`;
// const getAmountOfGeneratedPhotos = () => [...new Set(Array.from({length: getRandomInt(1, 6)}, () => getRandomPhotoUrl()))];
const getAmountOfGeneratedHouseholdItems = () => [...new Set(Array.from({length: getRandomInt(1, 6)}, () => getRandomArrayElement(householdItems)))];


export const generateOffers = () => ({
  picture: `http://picsum.photos/248/152?r=${ getRandomInt(0, 100) }`,
  title: getRandomArrayElement(titles),
  description: 'Our uniquely decorated Koggeschip studio in the heart of historical Amsterdam is the perfect starting point for your city trip',
  isPremium: Boolean(getRandomInt(0, 1)),
  apartmentType: getRandomArrayElement(apartmentTypes),
  rating: getRandomArrayElement(rating),
  bedrooms: `${getRandomInt(0, 5)} bedrooms`,
  guests: `Max ${getRandomInt(0, 10)} adults`,
  price: `${getRandomInt(0, 500)} €`,
  householdItems: getAmountOfGeneratedHouseholdItems(),
  owner: {
    photo: `https://i.pravatar.cc/128?rnd=${getRandomInt(0, 100)}`,
    name: getRandomArrayElement(names),
    isPro: Boolean(getRandomInt(0, 1)),
  },
});

