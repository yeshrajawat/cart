import React from "react";
import CartItem from "./CartItem";



class Cart extends React.Component{

    constructor(){
        super();
        this.state={
            products:[{
                qty:1,
                price:79999,
                title:'Laptop'
                ,id:3
            },
        {
            qty:1,
            price:999,
            title:'Gaming Mouse'
            ,id:2
        },
        {
        
            qty:1,
            price:19999,
            title:'Mobile Phone'
            ,id:1
        }]
        }
    }


    handleIncreaseQuantity =(product)=>{
console.log('Hey Please Increase the qty of the product',product.title);
         
        const {products} = this.state;
        const index = products.indexOf(product);
        products[index].qty++;
        
        this.setState({
            products:products
        })
    } 


    handleDecreaseQuantity = (product)=>{
        const {products} = this.state;
        const index = products.indexOf(product);
        if(product.qty>0){
            products[index].qty --;
        this.setState({
            products:products
        })
        }

    
    }
    deleteProduct = (product)=>{
        const {products} = this.state;
        const index = products.indexOf(product);

        products.pop(product);
        this.setState({
            products:products
        })
    }
    render(){

        const {products} = this.state
        console.log(products);
        return (
            <div className="cart">
                
                {products.map((product) =>{
                   return  <CartItem product={product} key={product.id} onIncreaseQuantity={this.handleIncreaseQuantity} onDecreaseQuantity={this.handleDecreaseQuantity} deleteProduct={this.deleteProduct}/>
                })}


            </div>
        );
    }
}

export default Cart;