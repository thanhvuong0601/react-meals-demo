import MealsItem from './MealsItem/MealsItem'
import classes from './AvailableMeals.module.css'
import Filter from '../Filter/Filter';
import {useState} from 'react'
const DUMMY_MEALS = [
    {
      id: 'm1',
      name: 'Salad',
      description: 'Heathy Food and vegetables',
      price: 22.99,
    },
    {
      id: 'm2',
      name: 'Grill beef ribs',
      description: 'Heathy Food and beef',
      price: 16.5,
    },
    {
      id: 'm3',
      name: 'Brown bread with eggs',
      description: 'Heathy food for breakfast',
      price: 12.99,
    },
    {
      id: 'm4',
      name: 'Fish with tomato sauce',
      description: 'Finest fish and veggies',
      price: 18.99,
    },
    {
      id: 'm5',
      name: 'Spaghetti',
      description: 'Heathy food...and high green...',
      price: 10.99,
    },
    {
      id: 'm6',
      name: 'Fruit Yogurt',
      description: 'Heathy food...and green...',
      price: 9.5,
    },
    
  ];
// const mealsItem = 
const AvailableMeals = () => {
  const initialList = [...DUMMY_MEALS]
  
  const [sorted, setSorted] = useState({items:initialList})
  const handlerSort = (value) => {
    switch (value) {
      case 0: 
          setSorted({
            items:[...DUMMY_MEALS]
          })
          break;
      case 1: 
          setSorted({
            items:sorted.items.sort((a,b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0))
          })
          break;
      case 2: 
          setSorted(
            {
              items:sorted.items.sort((a,b) => (b.name > a.name) ? 1 : ((a.name > b.name) ? -1 : 0))
            }
          )
          break; 
      case 3: 
          setSorted(
            {
              items:sorted.items.sort((a,b) => b.price - a.price)
            }
          )
          break; 
      case 4: 
          setSorted(
            {
              items:sorted.items.sort((a,b) => a.price- b.price)
            }
          )
          break;
     default:
       
       break;
   }
  }
 

    return (
      <>
        <Filter onSort = {handlerSort}/>          
        <div className = {classes.meals}> 
          <MealsItem meals = {sorted.items} />  
        </div>
      </>
    )
}
export default AvailableMeals