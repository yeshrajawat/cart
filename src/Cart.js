import React from "react";
import CartItem from "./CartItem";



const  Cart= (props)=>{

     

        const products = props.product;
        console.log('Cart Component console ',props);
        return (
            <div className="cart">
                
                {products.map((product) =>{
                   return  <CartItem product={product} key={product.id} onIncreaseQuantity={props.onIncreaseQuantity} onDecreaseQuantity={props.onDecreaseQuantity} deleteProduct={props.deleteProduct}/>
                })}


            </div>
        );
    }

export default Cart;