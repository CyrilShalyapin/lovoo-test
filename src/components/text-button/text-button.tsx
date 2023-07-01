import './text-button.scss'

const TextButton = props => {
  const { onClick, text, ...rest } = props
  return <button type='button' onClick={onClick} className='text-button' {...rest}>{text}</button>
}

export default TextButton