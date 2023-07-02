import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { ShopContextProvider } from './context/shop-context'
import Navbar from './components/navbar/navbar'
import { ItemType } from './shared'

const LazyAbout = React.lazy(() => import('./pages/about/about'))
const LazyCart = React.lazy(() => import('./pages/cart/cart'))
const LazyShop = React.lazy(() => import('./pages/shop/shop'))
const LazyCheckout = React.lazy(() => import('./pages/checkout/checkout'))

const App = () => {

  const [items, setItems] = useState<ItemType[]>([]);

  useEffect((): void => {
    console.log('get data')
    const getData = async (): Promise<void> => {
      try {
        const res: Response = await fetch('https://dummyjson.com/products')
        const data: {products: ItemType[]} = await res.json()
        setItems(data.products)
      } catch (error) {
        console.log(error)
      }
    }
    getData()
  }, [])

  return (
    <>
      <ShopContextProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path='/' element={<React.Suspense fallback='Loading...'><LazyShop items={items} /></React.Suspense>} />
            <Route path='/cart' element={<React.Suspense fallback='Loading...'><LazyCart items={items} /></React.Suspense>} />
            <Route path='/checkout' element={<React.Suspense fallback='Loading...'><LazyCheckout /></React.Suspense>} />
            <Route path='/about' element={<React.Suspense fallback='Loading...'><LazyAbout /></React.Suspense>} />
          </Routes>
        </Router>
      </ShopContextProvider>
    </>
  )
}

export default App
