import './App.css'
import React, {useState} from 'react'
import Header  from './Components/Header/Header'
import Meals  from './Components/Meals/Meals'
import Cart from './Components/Cart/Cart'
import CartContextProvider from './Store/CartContextProvider'
import OrderSucccess from './Components/Modal/OrderSucccess'


function App() {
  const [isShowOrder, setIsShowOrder] = useState(false)
  const [isShowCart, setIsShowCart] = useState(false)
  const showCart = () => {
    setIsShowCart(!isShowCart)
  }

  const showOrder = () => {
    setIsShowCart(false)

    setIsShowOrder(!isShowOrder)
  }
  return (
    <CartContextProvider>
      
      {isShowCart && <Cart onCloseCart = {showCart} onOrder = {showOrder}/>}
      {isShowOrder && <OrderSucccess onClose = {showOrder} />}
      <Header onShowCart = {showCart}/>
      <Meals />
    </CartContextProvider>
      
  );
}

export default App;
