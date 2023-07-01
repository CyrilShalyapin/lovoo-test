export type ItemType = {
  description: string,
  id: number,
  price: number,
  title: string,
  thumbnail: string,
}

export type CartItemType = {
  [index: number]: number;
}
