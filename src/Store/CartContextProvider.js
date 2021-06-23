import { useReducer,useState} from "react"
import { CartContext } from "./CartContext"
const CartContextProvider = (props) => {
  
    const handlerReducer = (prevState, actions) => {
        const findIndex = (data) => {
            const index = prevState.items.findIndex(item => {
                return item.id === data.id
            })
            return index
        }
        const newItems = (index,action) => {
            const existingItem = prevState.items[index]
            let quantity;
            if(action.type==='ADD') {
                quantity= existingItem.quantity+1
            }
            else if(action.type==='DECREASE') {
                quantity= existingItem.quantity-1

            }
            else if(action.type==='CHANGE') {
                quantity=action.quantity
            }
            let updatedItem = {
                           ...existingItem,
                           quantity:quantity
                       }
            let UpdatedItems = [...prevState.items]
            UpdatedItems[index] = updatedItem
            return UpdatedItems

        }
        const totalAmount = (cartItem) => {
            const amount = cartItem.reduce((total,item) => {
                return total + item.quantity*item.price
            },0)
            return amount
        }

     
       switch (actions.type) {
           case 'ADD':
               {
                    const index = findIndex(actions.item)
                //    const index = prevState.items.findIndex(item => {
                //        return item.id === actions.item.id
                //    })
                   if(index === -1) {
                       actions.item.quantity = 1
                      const items = prevState.items.concat(actions.item)
                       return {
                           items:items,
                           totalAmount:totalAmount(items)
                       }
                     
                   }
                   else {
                       const items = newItems(index,actions)
                     return {
                          items:items,
                            totalAmount:totalAmount(items)          
                    }
                    // ////////////// Re-view ////////////////////
                    // Before clean code
                    //    const existingItem = prevState.items[index]
                    //    let updatedItem = {
                    //        ...existingItem,
                    //        quantity: existingItem.quantity+1
                    //    }
                    //    let UpdatedItems = [...prevState.items]
                    //    UpdatedItems[index] = updatedItem
                       
                   }
               }   
            case 'DECREASE': {
                const index = findIndex(actions.item)

                const items = newItems(index,actions)
                return {
                     items:items,
                       totalAmount:totalAmount(items)
                }
                // Before clean code
                // const existingItem = prevState.items[index]
                //     let updatedItem = {
                //         ...existingItem,
                //         quantity: existingItem.quantity-1
                //     }
                //     let UpdatedItems = [...prevState.items]
                //     UpdatedItems[index] = updatedItem
                    
                //   return { items:UpdatedItems}

                    ////////////////////////////////
            }
            case 'REMOVE': {
                const updatedItems = prevState.items.filter(item => {
                    return item.id !== actions.id
                })
                return {
                    items: updatedItems,
                    totalAmount:totalAmount(updatedItems)

                }
            }
            case 'CHANGE': {
                const index = findIndex(actions.item)
                const items = newItems(index,actions)
                

                return {
                    items:items,
                    totalAmount:totalAmount(items)
                }


            }
            case 'RESET': {
                return {
                    items:[],
                    totalAmount:0
                }
            }
          
           default:
               return prevState;
       }
    }

    

    const addItem = (item) => {
        dispatchCart({type:'ADD',item:item})
    }
    const removeItem = (id) => {
        console.log(id);
       dispatchCart({type:'REMOVE',id:id})
    }
// sử dụng USESTATE
    // const addItem = (data) => {
       
    //     const index = cart.items.findIndex(item => {
    //         return item.id === data.id
    //     })
    //     if(index === -1) {
    //         data.quantity = 1
    //         setCart({
    //             items:cart.items.concat(data)
    //         })
    //     }
    //     else {
    //         cart.items[index].quantity ++
    //         return {
    //             items:cart.items
    //         } 
        
    //     }
      
    // }
    // const [cart, setCart] = useState(defaultState)
    const decreaseQtyCart = (item) => {
        dispatchCart({type:"DECREASE",item:item})
    }
    const increaseQtyCart = (item) => {
        dispatchCart({type:"ADD",item:item})
    }
   const changeQuantity = (item,value) => {
        dispatchCart({type:'CHANGE',item:item,quantity:value})
   }
   const resetCart = () => {
       dispatchCart({type:'RESET'})
   }
 
    const defaultState = {
        items:[],
        totalAmount:0

        
    }
    
    const [cart, dispatchCart] = useReducer(handlerReducer,defaultState)

    const defaultContext = {
        items:cart.items,
        totalAmount:cart.totalAmount,
        addItem:addItem,
        removeItem:removeItem,
        decreaseQty:decreaseQtyCart,
        increaseQty:increaseQtyCart,
        changeQuantity:changeQuantity,
        resetCart:resetCart,
       
    }

   
    return (
        <CartContext.Provider value = {defaultContext}>
            {props.children}
        </CartContext.Provider>
    )
}
export default CartContextProvider