import React from 'react';

const CartItem = (props) =>{
 
    
        console.log('props', props);
        const {price, qty, item} = props.product;
        return(
            <div className="cart-item">
                <div className = "left-block">
                    <img style={styles.image} />
                </div>
                <div className = "right-block">
                    <div style={ {fontSize: 25} }>{item}</div>
                    <div style ={ {color:'#777'}}> Rs {price}</div>
                    <div style ={ {color:'#777'}}>Qty: {qty}</div>
                    <div className="cart-item-actions">
                        {/* buttons */}
                        <img alt="increase" 
                        className="action-icons" 
                        src="https://image.flaticon.com/icons/svg/992/992651.svg" 
                        onClick={()=> props.onIncreaseQuantity(props.product)} />
                        <img alt="decrease" 
                        className="action-icons" 
                        src="https://image.flaticon.com/icons/svg/1665/1665612.svg" 
                        onClick={()=> props.onDecreaseQuantity(props.product)} />
                        <img alt="delete" 
                        className="action-icons" 
                        src="https://image.flaticon.com/icons/svg/1214/1214428.svg" 
                        onClick={()=> props.onDeleteItem(props.product.id)}
                        />
                    </div>
                </div>
            </div>
        );
    
}
const styles = {
    image:{
        height: 100,
        width: 100,
        borderRadius: 4,
        background: '#ccc'
    }
}
export default CartItem;