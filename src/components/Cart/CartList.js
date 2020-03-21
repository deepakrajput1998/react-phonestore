import React from 'react'
import CartItem from './CartItem'
const CartList=(props)=>{
    const {cart}=props.value;
    console.log(cart,props.value,"ok");
    return(
        <div className='container-fluid'>
          {cart.map(item=>{
                return <CartItem key ={item.id} item={item} value={props.value}/>
          })}
            
        </div>
    )
}
export default CartList;