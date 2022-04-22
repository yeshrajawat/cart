import React from 'react';

class CartItem extends React.Component{
    
    constructor(){
        super();

        this.state = {
            title:"Mobile Phone",
            price: "999",
            qty:1,
            img:''
        }
    }

    increaseQuantity = ()=>{
        //Set State form 1

        // this.setState({
        //     qty:this.state.qty+1
        // });

        //Set State form 2
        this.setState((prevState) => {
                return {
                    qty:prevState.qty+1
                }
        })
    }

    decreaseQuantity = ()=>{

        if(this.state.qty>0){
           this.setState((prevState) => {
               return {
                   qty:prevState.qty-1
               }
           })
        } 
        
    }
    
    
    
    render(){

        const {title,price,qty} = this.state;


        return(
            <div className='cart-item'>
               
                <div className='left-block'>
                    <img  src='' style={styles.image} alt="Product" />
                </div>
               
                <div className='right-block'>

                <div>{title}</div>
               
                <div>Rs {price}</div>
               
                <div>Qty: {qty}</div>
               
                <div className='cart-item-actions'>
               
                    <img src='https://cdn-icons-png.flaticon.com/512/992/992651.png'
                        className='action-icons'
                        alt='increase'
                        onClick={this.increaseQuantity}

                    />

                    <img src='https://cdn-icons-png.flaticon.com/512/992/992683.png' 
                    className='action-icons' 
                    alt='decrease'
                    onClick={this.decreaseQuantity.bind(this)}
                    />

                    <img src='https://cdn-icons-png.flaticon.com/512/1214/1214428.png'
                    className='action-icons' 
                    alt='delete'
                    />
               
                </div>
             
             </div>
            
            </div>
        );
    }
}
const styles={
    image:{
        height:110,
        width:110,
        borderRadius:4
    }
}
export default CartItem;