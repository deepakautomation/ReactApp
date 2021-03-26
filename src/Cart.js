import React from 'react';
import CartItem from './CartItem'

class Cart extends React.Component{
    constructor(){
        super();
        this.state={
            products:[
                {
                    price: 999,
                    item: "Mobile",
                    qty: 1,
                    img: '',
                    id:1
                },
                {
                    price: 99,
                    item: "Watch",
                    qty: 1,
                    img: '',
                    id:2
                },
                {
                    price: 100,
                    item: "TV",
                    qty: 1,
                    img: '',
                    id:3
                },
            ]
        }
       // this.increaseQuantity  = this.increaseQuantity.bind(this);
     
    }

    handleIncreaseQuantity = (product)=>{ // this function will accept a product to be increased
        console.log('Hey Increase the quantity by 1 of', product);
        const {products} = this.state; // get products which are in form of array from state
        //get index of product(line no 36) in the products array
        const index = products.indexOf(product);

        products[index].qty += 1;

        //set state
        this.setState({
            products:products // right side products is the product in line 42, 38. LHS is the main products arr
        })
    }
    render(){
        const {products} = this.state;
        return (
            <div class = "cart">
                {products.map((product) =>{
                    return <CartItem 
                    product={product} 
                    key={product.id}
                    onIncreaseQuantity={this.handleIncreaseQuantity}

                    />
                })}
            </div>
        )
    }
}

export default Cart;