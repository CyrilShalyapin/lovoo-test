import { useContext, useMemo } from 'react'
import { ShopContext } from '../../context/shop-context'
import TextButton from '../../components/text-button/text-button'
import CartItem from '../../components/cart-item/cart-item'
import { Link } from 'react-router-dom'
import './cart.scss'
import { ItemType } from '../../shared'

type CartProps = {
  items: ItemType[]
}

const Cart = (props: CartProps) => {
  const { cartItems } = useContext(ShopContext);
  return (
    <div className="cart">
      <h1>Cart</h1>
      <ol>
        {props.items.map(item => {
          const { id, price, title, thumbnail } = item;
          return cartItems?.[item.id] ?
            <li key={item.id}>
              <CartItem
                price={price}
                title={title}
                id={id}
                thumbnail={thumbnail}
              />
            </li> : false;
        })}
      </ol>
      <div>
        <Link to='/checkout'><TextButton text='Checkout' /></Link>
        <Link to='/'><TextButton text='Continue Shopping' /></Link>
      </div>
    </div>
  )
}

export default Cart