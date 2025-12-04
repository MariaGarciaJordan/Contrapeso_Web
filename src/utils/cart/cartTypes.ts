export interface CartItem {
  id: string;
  name: string;
  price: number;
  qty: number;
  image: string;
}

export interface CartState {
  items: CartItem[];
  total: number;
}
