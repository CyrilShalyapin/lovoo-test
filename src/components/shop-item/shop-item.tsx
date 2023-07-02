import { useContext, useMemo } from 'react'
import { ShopContext } from '../../context/shop-context'
import TextButton from '../text-button/text-button'
import Stepper from '../stepper/stepper'
import './shop-item.scss'

type ShopItemProps = {
  description: string,
  id: number,
  price: number,
  thumbnail: string,
  title: string,
}

const ShopItem = (props: ShopItemProps) => {
  const {
    description,
    id,
    price,
    thumbnail,
    title,
  } = props

  const { addToCart, cartItems } = useContext(ShopContext);
  const count = useMemo(() => cartItems?.[id], [cartItems, id])


  return (
    <div className='shop-item'>
      <h3>{title}</h3>
      <div className='image'>
        <img src={thumbnail} alt="item thumbnail" loading='lazy' />
      </div>
      <p className='description'>{description}</p>
      <p>${price}</p>
      {
        count ? <Stepper id={id} /> :
          <div><TextButton onClick={() => addToCart(id)} text='Add to cart' /></div>
      }
    </div>
  )
}

export default ShopItem;
