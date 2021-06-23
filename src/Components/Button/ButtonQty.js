import classes from'./ButtonQty.module.css'
import { useReducer, useState, useRef } from 'react'

import { useContext } from 'react'
import { CartContext } from '../../Store/CartContext'
const ButtonQty = (props) => { 
    const cartCtx = useContext(CartContext)

    const handlerDecreQty = () => {
      setQuantity(quantity-1)
       cartCtx.decreaseQty(props.item)
    }
    const handlerIncreQty = () => {
       setQuantity(quantity+1)
       cartCtx.increaseQty(props.item)

    }

    const handlerChangeQty = (item,e) => {
      const value = Number(e.target.value)
      setQuantity(value)
      cartCtx.changeQuantity(item,value)
    }
    const handlerBlur = (item) => {
      if(quantity===0) {
        setQuantity(1)
      cartCtx.changeQuantity(item,1)
      }
    }
    const [quantity, setQuantity] = useState(props.item.quantity)
    return <div className = {classes['wrap-btn']}>
            <button className ={classes['btn-qty']} onClick = {handlerDecreQty} disabled = {quantity===1?true:false}>-</button>
            <input type="input" value = {quantity}  onChange={(e) => handlerChangeQty(props.item,e)} onBlur ={()=> handlerBlur(props.item)}/>

            <button className ={classes['btn-qty']} onClick = {handlerIncreQty}>+</button>
    </div>
    
  

     
}
export default ButtonQty