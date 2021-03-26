import React from 'react';
import CartItem from './CartItem';
import Cart from './Cart';
import Navbar from './Navbar';
import { render } from '@testing-library/react';

class App extends React.Component {
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

handleDecreaseQuantity = (product)=>{ // this function will accept a product to be decrease
    const {products} = this.state; // get products which are in form of array from state
    //get index of product(line no 36) in the products array
    const index = products.indexOf(product);

    products[index].qty -= 1;

    //set state
    this.setState({
        products:products // right side products is the product in line 42, 38. LHS is the main products arr
    })
}

handleDeleteProduct = (id)=>{ 
    const {products} = this.state; 
  
    const items = products.filter((item)=> item.id !== id);

    //set state
    this.setState({
        products:items
    })
}

getCartCount = ()=>{ 
  const {products} = this.state; 

  let count = 0;

  products.forEach((product) =>{
    count += product.qty;
  })
  return count;
}
  
getCartTotal = ()=>{ 
  const {products} = this.state; 

  let total = 0;

  products.forEach((product) =>{
    total = total + product.qty*product.price;
  })
  return total;
}

render(){
  const {products} = this.state;
  return (
    <div className="App">
      <Navbar count = {this.getCartCount()}/>
      <Cart 
      products={products}
      onIncreaseQuantity={this.handleIncreaseQuantity}
      onDecreaseQuantity={this.handleDecreaseQuantity}
      onDeleteItem={this.handleDeleteProduct}/>
      <div>Total = {this.getCartTotal()}</div>
    </div>
  );
  }
}


export default App;
