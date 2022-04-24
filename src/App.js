import React from "react";
import Cart from "./Cart";
import Navbar from "./Navbar";
class App extends React.Component {

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

getProductCount= ()=>{
  let count = 0;
  const {products} = this.state;
    products.forEach((product)=>{
      count = count + product.qty;
    })
    console.log(count);
    return count;
}
 
getTotalAmount= ()=>{
let amount = 0;
const{products} = this.state;

products.forEach((product)=>{
  amount = amount + (product.qty * product.price)
})
return amount
}

  render(){

const {products} = this.state;
console.log('App Component console ',products);

  return (

    <div className="App">
     
      <Navbar count={this.getProductCount()}/>
     <h1>Cart</h1>
      <Cart product={products} onIncreaseQuantity={this.handleIncreaseQuantity} onDecreaseQuantity={this.handleDecreaseQuantity} deleteProduct={this.deleteProduct} />
      <h1>Total Amount is {this.getTotalAmount()}</h1>
    
    </div>
  );
}
}

export default App;
