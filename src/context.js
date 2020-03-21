import React,{Component} from 'react'
import {storeProducts,detailProduct} from './data'
const ProductContext=React.createContext();

class ProductProvider extends Component{
    state={
        products:storeProducts,
        detailProduct:detailProduct,
        cart:[],
        modalOpen:false,
        modalProduct:detailProduct,
        cartSubTotal:20,
        cartTax:30,
        cartTotal:50
    }
     
    componentDidMount(){
        this.setProducts();
    }
    setProducts=()=>{
        let tempProducts=[];
        storeProducts.forEach(item=>{
            const singleItem={...item};
            tempProducts=[...tempProducts,singleItem];

        });
        this.setState({products:tempProducts});
    }
    getItem=(id)=>{ 
        const product =this.state.products.find(item=>item.id===id);
        return product; 
    }
    detailHandler=(id)=>{
        const product=this.getItem(id);
     return ()=>  this.setState({detailProduct:product})
     };
    addToCart=(id)=>{
    let tempProducts=[...this.state.products];
    const index= tempProducts.indexOf(this.getItem(id));
    const product =tempProducts[index];
    product.inCart =true;
    product.count=1;
    const price=product.price;
    product.total=price;
   this.setState({products:tempProducts,cart:[...this.state.cart,product]}
       ,()=>this.addTotal() )
    };

    openModalHandler=id=>{
        const product=this.getItem(id);
        this.setState({modalProduct:product,
            modalOpen:true},console.log(this.state))
    };
    closeModalHandler=()=>{
        this.setState({modalOpen:false})
    }
    
    incrementHandler=(id)=>{
        let tempCart=[...this.state.cart];
        const selectProduct=tempCart.find(item=>item.id===id)
        const index =tempCart.indexOf(selectProduct);
        const product=tempCart[index];
        product.count+=1;
        product.total=product.count*product.price;
        this.setState({cart:[...tempCart]},()=>{this.addTotal()}
        )}
    decrementHandler=(id)=>{
        let tempCart=[...this.state.cart];
        const selectProduct=tempCart.find(item=>item.id===id)
        const index =tempCart.indexOf(selectProduct);
        const product=tempCart[index];
        product.count-=1;
        if(product.count===0){
            this.removeItemHandler(id)
            alert('can not decrease')
            return true;
        }
        else{
        product.total=product.count*product.price;
        this.setState({cart:[...tempCart]},()=>{this.addTotal()}
        )    }
    }
    removeItemHandler=(id)=>{
        let tempProducts=[...this.state.products];
        let tempCart =[...this.state.cart];
        tempCart=tempCart.filter(item=>item.id!=id);
        const index=tempProducts.indexOf(this.getItem(id));
        let removedProduct=tempProducts[index];
        removedProduct.inCart=false;
        removedProduct.count=0;
        removedProduct.total=0;
        this.setState({cart:[...tempCart],
        products:[...tempProducts]},()=>{
            this.addTotal()
        })
    
    }
    clearCartHandler=(id)=>{
        this.setState({cart:[]},
            ()=>{this.setProducts()
            this.addTotal()})
    }
    addTotal=()=>{
        let subTotal=0;
        this.state.cart.map(item=>(subTotal+=item.total));
        const tempTax=subTotal*0.1;
        const tax =parseFloat(tempTax.toFixed(2));
        const total=subTotal+tax;
        this.setState({cartSubTotal:subTotal,cartTax:tax,cartTotal:total})
    }

    render(){
        return(
            <ProductContext.Provider value={{
                ...this.state,
            detailHandler:this.detailHandler,
            addToCart:this.addToCart,
            openModalHandler:this.openModalHandler ,
            closeModalHandler:this.closeModalHandler, 
            incrementHandler:this.incrementHandler,
            decrementHandler:this.decrementHandler,
            removeItemHandler:this.removeItemHandler,
            clearCartHandler:this.clearCartHandler
            }}>
                {this.props.children}
            </ProductContext.Provider>
        )
    }
}
const ProductConsumer=ProductContext.Consumer;
export {ProductProvider,ProductConsumer};