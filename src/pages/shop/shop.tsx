import React from 'react'
import { ItemType } from '../../shared'
import './shop.scss'

type ShopProps = {
  items: ItemType[],
}

const LazyShopItem = React.lazy(() => import('../../components/shop-item/shop-item'))

const Shop = (props: ShopProps) => {
  return (
    <div className='shop'>
      {
        props.items.map(item => {
          return (
            <React.Suspense key={item.id} fallback='Loading Item...'>
              <LazyShopItem
                description={item.description}
                id={item.id}
                price={item.price}
                thumbnail={item.thumbnail}
                title={item.title}
              />
            </React.Suspense>
          )}
        )
      }
    </div>
  )
}

export default Shop