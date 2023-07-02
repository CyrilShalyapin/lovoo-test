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
  const { cartItems, deleteCart } = useContext(ShopContext);
  const isEmpty = useMemo(() => Object.keys(cartItems).length === 0, [cartItems])

  return (
    <div className="cart">
      <h1>Cart</h1>
      <ol>
        {props.items.map(item => {
          const { id, price, title, thumbnail } = item;
          return cartItems[item.id] ?
            <li key={item.id}>
              <CartItem
                id={id}
                price={price}
                thumbnail={thumbnail}
                title={title}
              />
            </li> : false;
        })}
      </ol>
      {isEmpty && <p>Cart is empty</p>}
      <div>
        {!isEmpty && <Link to='/checkout'><TextButton text='Checkout' /></Link>}
        <Link to='/'><TextButton text='Continue Shopping' /></Link>
        {!isEmpty && <TextButton onClick={deleteCart} text='Clear cart' />}
      </div>
    </div>
  )
}

export default Cart