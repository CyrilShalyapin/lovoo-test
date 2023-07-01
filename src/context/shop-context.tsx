import { createContext, useState, ReactNode } from 'react'
import { CartItemType } from '../shared'

type ShopContextType = {
  addToCart?: (id: number) => void,
  cartItems?: CartItemType,
  deleteCartItem?: (id: number) => void,
  removeFromCart?: (id: number) => void,
  setCartItemAmount?: (id: number, amount: number) => void,
}

type ShopContextProviderProps = {
  children: ReactNode
}

export const ShopContext = createContext<ShopContextType>({})

export const ShopContextProvider = (props: ShopContextProviderProps) => {
  const [cartItems, setCartItems] = useState<CartItemType>({})

  const addToCart = (id: number): void => {
    setCartItems((prev: CartItemType) => ({...cartItems, [id]: prev[id] ? prev[id] + 1 : 1}))
  }

  const removeFromCart = (id: number): void => {
    if (cartItems[id] > 0) {
      setCartItems(prev => ({...cartItems, [id]: prev[id] - 1}))
    }
  }

  const deleteCartItem = (id: number): void => {
    setCartItems({...cartItems, [id]: 0})
  }

  const setCartItemAmount = (id: number, amount: number): void => {
    setCartItems({...cartItems, [id]: amount})
  }

  console.log('cartItems', cartItems);

  const contextValue: ShopContextType = { addToCart, cartItems, deleteCartItem, removeFromCart, setCartItemAmount }
  return <ShopContext.Provider value={contextValue}>{props.children}</ShopContext.Provider>
}