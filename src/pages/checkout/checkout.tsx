import { SubmitHandler, useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'

type FormValues = {
  email: string
}

const Checkout = () => {
  const { register, handleSubmit } = useForm<FormValues>()
  const onSubmit: SubmitHandler<FormValues> = (data) => alert('order created for ' + data.email)
  return (
    <>
      <h1>Checkout</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="email">Email</label>
        <input id='email' {...register("email")} type="email" placeholder="Email" />
        <input type="submit" />
      </form>
      <Link to='/'>Back to Shop</Link>
    </>
  )
}

export default Checkout