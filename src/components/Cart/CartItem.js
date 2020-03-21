import React from 'react'
const CartItem=(props)=>{
    const {id,title,img,price,total,count}=props.item;
    const {incrementHandler, decrementHandler,removeItemHandler}=props.value
    return(
        <div className='row my-2 text-capitalize text-center'>
            <div className='col-10 mx-auto col-lg-2'>
                <img src={img}
                style={{width:'5rem',
            height:'5rem'}}
            className='img-fluid'
            alt ='product' />
            </div>
          <div className='col-10 mx-auto col-lg-2'>
              <span className='d-lg-none'>
                  product :
              </span>{title}
          </div>
          <div className='col-10 mx-auto col-lg-2'>
              <span className='d-lg-none'>
                  price :
              </span>{price}
          </div>
          <div className='col-10 mx-auto col-lg-2 my-2 my-lg-0'>
              <div className='d-flex justify-content-center'>
                  <div>
                      <span className='btn btn-black mx-1' onClick={()=>decrementHandler(id)} 
                      >-</span>
                       <span className='btn btn-black mx-1'  >{count}</span>
                       <span className='btn btn-black mx-1' onClick={()=>incrementHandler(id)} 
                      >+</span>
                  </div>
              </div>
              </div>
              {/*  */}
              <div className='col-10 mx-auto col-lg-2'>
                 <div className='cart-icon' onClick={()=>removeItemHandler(id)}>
                 <i className='fas fa-trash' />
                 </div>
                
                  </div>
              <div className='col-10 mx-auto col-lg-2'>
    <strong>item total :  RS  {total}</strong>
              </div>
        </div>
    )
}
export default CartItem;