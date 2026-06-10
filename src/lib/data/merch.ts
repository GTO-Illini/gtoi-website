export interface MerchItem {
  name: string;
  price: string;
  image: string;
}

export const merch: MerchItem[] = [
  {
    name: "Hoodie With Logo",
    price: "$30",
    image: "/image-assets/merch_photos/hoodie.jpeg",
  },
  {
    name: "Pin Button With Logo",
    price: "$4",
    image: "/image-assets/merch_photos/pin_button.jpeg",
  },
  {
    name: "Playing Cards With Logo",
    price: "$10",
    image: "/image-assets/merch_photos/playing_cards.jpeg",
  },
];
