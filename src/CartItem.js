import React from 'react';

const  CartItem = (props)=>  {
    

        const {qty,price,title} = props.product;
        console.log( 'CartItem component console ',props);

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
                        onClick={()=> props.onIncreaseQuantity(props.product)}

                    />

                    <img src='https://cdn-icons-png.flaticon.com/512/992/992683.png' 
                    className='action-icons' 
                    alt='decrease'
                    onClick={ ()=> props.onDecreaseQuantity(props.product)}
                    />

                    <img src='https://cdn-icons-png.flaticon.com/512/1214/1214428.png'
                    className='action-icons' 
                    alt='delete'
                    onClick={()=>  props.deleteProduct(props.product)}
                    />
               
                </div>
             
             </div>
            
            </div>
        );
    }

const styles={
    image:{
        height:110,
        width:110,
        borderRadius:4
    }
}
export default CartItem;