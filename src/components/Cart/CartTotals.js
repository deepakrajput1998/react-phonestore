import React from 'react'
import {Link} from 'react-router-dom'
import PaypalButton from './PaypalButton'
const CartTotals =(props)=>{
const {cartSubTotal,cartTax,cartTotal,clearCartHandler}=props.value
 return ( <React.Fragment>
      <div className='container'>
          <div className ='row'>
              <div className='col-10 mt-2 ml-sm-5 ml-md-auto col-sm-8 text-capitalize text-right'>
                  <Link to='/'>
                      <button 
                      className ='btn btn-outline-danger text-uppercase mb-3 px-5' type='button'
                      onClick={()=>clearCartHandler()} >
                          Clear Cart 
                      </button>
                  </Link>
                  <h5> <span className='text-title'> subTotal:</span>
                    <strong>Rs {cartSubTotal}</strong>
                  </h5>

                  <h5> <span className='text-title'> tax:</span>
                    <strong>Rs {cartTax}</strong>
                  </h5>
                  <h5> <span className='text-title'> total:</span>
                    <strong>Rs {cartTotal}</strong>
                  </h5>
                <PaypalButton total={cartTotal} clearCart={clearCartHandler} history={props.history}/>
              </div>
          </div>
      </div>


 </React.Fragment>)
}
export default CartTotals;