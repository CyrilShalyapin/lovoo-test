import { useContext, useMemo } from 'react'
import { ShopContext } from '../../context/shop-context'
import TextButton from '../text-button/text-button'
import './stepper.scss'

type StepperProps = {
  id: number
}

const Stepper = (props: StepperProps) => {
  const { id } = props
  const { addToCart, cartItems, deleteCartItem, removeFromCart, setCartItemAmount } = useContext(ShopContext);
  const count = useMemo(() => cartItems?.[id], [cartItems, id])

  return (
    <div className='stepper'>
      <div>
        <TextButton onClick={() => deleteCartItem(id)} text='Delete' />
        <TextButton onClick={() => removeFromCart(id)} text='-' />
        <input type="text" value={count} onChange={(e) => setCartItemAmount(id, Number(e.target.value))} />
        <TextButton onClick={() => addToCart(id)} text='+' />
      </div>
    </div>
  )
}

export default Stepper