import React from 'react';

class CartItem extends React.Component{
 
    render(){
        console.log('this.props', this.props);
        const {price, qty, item} = this.props.product;
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
                        src="https://www.flaticon.com/svg/vstatic/svg/992/992651.svg?token=exp=1615700718~hmac=1c9b7b9d5a225e22ee0069a05221c080" 
                        onClick={()=> this.props.onIncreaseQuantity(this.props.product)} />
                        <img alt="decrease" 
                        className="action-icons" 
                        src="https://www.flaticon.com/svg/vstatic/svg/992/992683.svg?token=exp=1615700643~hmac=ca1e5973141246a18733443c2dda0fd1" 
                        onClick={this.decreaseQuantity} />
                        <img alt="delete" 
                        className="action-icons" 
                        src="https://www.flaticon.com/svg/vstatic/svg/1214/1214428.svg?token=exp=1615701239~hmac=de5ce68dac21cee367bb47d45045531c" />
                    </div>
                </div>
            </div>
        );
    }
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