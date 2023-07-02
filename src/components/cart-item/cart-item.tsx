import Stepper from '../stepper/stepper'
import './cart-item.scss'

type CartItemProps = {
  id: number,
  price: number,
  title: string,
  thumbnail: string,
}

const CartItem = (props: CartItemProps) => {
  const {id, price, title, thumbnail} = props;
  return (
    <div className='cart-item'>
      <div className='image'>
        <img src={thumbnail} alt='image' loading='lazy'/>
      </div>
      <p className='title'>{title}</p>
      <p className='price'>${price}</p>
      <Stepper id={id} />
    </div>
  )
}

export default CartItem