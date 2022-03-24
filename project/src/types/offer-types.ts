type Owner = {
  photo: string,
  name: string,
  isPro: boolean,
}

export type OfferCard = {
  picture: string,
  title: string,
  description: string,
  isPremium: boolean,
  apartmentType: string,
  rating: string,
  bedrooms: string,
  guests: string,
  price: string,
  householdItems: string[],
  owner: Owner,
}
