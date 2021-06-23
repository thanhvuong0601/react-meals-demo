import classes from './MealsItem.module.css'
import ButtonAddToCart from '../../Button/ButtonAddToCart'
import styled from 'styled-components'
const Image = styled.div`
    background-image: url(${props => props.data});
    padding-top: 100%;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
`
const img = [
    'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
    'https://images.unsplash.com/photo-1544025162-d76694265947?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=749&q=80',
    'https://images.unsplash.com/photo-1513442542250-854d436a73f2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=558&q=80',
    'https://images.unsplash.com/photo-1518779578993-ec3579fee39f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=375&q=80',
    'https://images.unsplash.com/photo-1516100882582-96c3a05fe590?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80',
    'https://images.unsplash.com/photo-1501959915551-4e8d30928317?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80'

]
const MealsItem = (props) => {
  
    const mealsItem = props.meals.map((meal,i)=> {
        return (
            <div className={classes.meal} key={meal.id}>    
                    <Image data = {img[i]} />
                             
                    <h3>{meal.name}</h3>
                    <div>
                        <span className={classes.description}>{meal.description}</span>
                    </div>
                    <div>
                        <span className={classes.price}>{meal.price} $</span> 
                    </div> 
                    <div>
                        <ButtonAddToCart data = {meal}/>
                    </div> 
            </div>
                         
          
    ) })
    return mealsItem

   
}
export default MealsItem