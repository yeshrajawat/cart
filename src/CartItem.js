import React from 'react';

class CartItem extends React.Component{
    
   

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
        const {qty,price,title} = this.props.product;


        return(
            <div className='cart-item'>
               
                <div className='left-block'>
                    <img  src='' style={styles.image} alt="" />
                </div>
               
                <div className='right-block'>

                <div>{title}</div>
               
                <div>Rs {price*qty}</div>
               
                <div>Qty: {qty}</div>
               
                <div className='cart-item-actions'>
               
                    <img src='https://cdn-icons-png.flaticon.com/512/992/992651.png'
                        className='action-icons'
                        alt='increase'
                        onClick={()=> this.props.onIncreaseQuantity(this.props.product)}

                    />

                    <img src='https://cdn-icons-png.flaticon.com/512/992/992683.png' 
                    className='action-icons' 
                    alt='decrease'
                    onClick={ ()=> this.props.onDecreaseQuantity(this.props.product)}
                    />

                    <img src='https://cdn-icons-png.flaticon.com/512/1214/1214428.png'
                    className='action-icons' 
                    alt='delete'
                    onClick={()=>this.props.deleteProduct(this.props.product)}
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