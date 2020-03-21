import React from 'react'
const EmptyCartColum=()=>{
    return(
       <div className='container ml-5'>
           <div className='row'>
               <div className='col-10 mx-auto text-center text-title' >
                   <h1>
                       your cart is currently empty
                   </h1>
               </div>
           </div>
       </div>   
    );
}
export default EmptyCartColum;