import { createContext, useEffect, useState, ReactNode } from 'react'
import { CartItemType } from '../shared'

type ShopContextType = {
  addToCart: (id: number) => void,
  cartItems: CartItemType,
  deleteCart: () => void;
  deleteCartItem: (id: number) => void,
  getCartItemsFromSessionStorage: () => void, 
  removeFromCart: (id: number) => void,
  setCartItemAmount: (id: number, amount: number) => void,
}

type ShopContextProviderProps = {
  children: ReactNode
}


export const ShopContext = createContext<ShopContextType>({})

export const ShopContextProvider = (props: ShopContextProviderProps) => {
  const [cartItems, setCartItems] = useState<CartItemType>({})

  useEffect(() => {
    try {
      const rawCart: string | null = sessionStorage.getItem('lovooxkirylshopcart');
      if (rawCart !== null) {
        const cart = JSON.parse(rawCart)
        console.log('Cart from Session Storage', cart);
        setCartItems(cart)
      }
    } catch {
      console.log('failed to GET cart from session storage');
    }
  }, [])

  const saveCart = (cart: CartItemType) => {
    try {
      const json = JSON.stringify(cart)
      sessionStorage.setItem('lovooxkirylshopcart', json);
      console.log('cart saved', cart);
      
    } catch {
      console.log('failed to PUT cart to session storage');
    }
  }

  const getCartItemsFromSessionStorage = (): void => {
    try {
      const rawCart: string | null = sessionStorage.getItem('lovooxkirylshopcart');
      if (rawCart !== null) {
        const cart = JSON.parse(rawCart)
        console.log('Cart from Session Storage', cart);
        setCartItems(cart)
      }
    } catch {
      console.log('failed to GET cart from session storage');
    }
  }

  const addToCart = (id: number): void => {
    setCartItems((prev: CartItemType) => {
      const cart = {...cartItems, [id]: prev[id] ? prev[id] + 1 : 1}
      saveCart(cart)
      return cart
    })
  }

  const removeFromCart = (id: number): void => {
    if (cartItems[id] > 0) {
      setCartItems(prev => {
        const cart = {...cartItems, [id]: prev[id] - 1}
        if (cart[id] === 0) {
          delete cart[id]
        }
        saveCart(cart)
        return cart
      })
    }
  }

  const deleteCartItem = (id: number): void => {
    const cart = {...cartItems}
    delete cart[id]
    setCartItems(cart)
  }

  const setCartItemAmount = (id: number, amount: number): void => {
    const cart = {...cartItems}
    if (amount === 0) {
      delete cart[id]
    } else {
      cart[id] = amount
    }
    setCartItems(cart)
  }

  const deleteCart = (): void => {
    setCartItems({})
  }

  const contextValue: ShopContextType = { addToCart, cartItems, deleteCart, deleteCartItem, getCartItemsFromSessionStorage, removeFromCart, setCartItemAmount }
  return <ShopContext.Provider value={contextValue}>{props.children}</ShopContext.Provider>
}