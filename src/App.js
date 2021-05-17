import React,{useState} from "react"
import './App.css';

const PAGE="products"
const CART="cart"

function App() {
  const [cart,setCart]=useState([])
  const[page,setPage]=useState(PAGE)
  const [products]=useState([
    {
      name:"Titan",
      cost:"4000Rs",
      image:"https://tse2.mm.bing.net/th?id=OIP.EQ3DNmRy7uGNb-1i1FAFrgHaIq&pid=Api&P=0&w=300&h=300"
    },
    {
      name:"Titan Raga",
      cost:"6000Rs",
      image:"https://n2.sdlcdn.com/imgs/a/n/w/Titan-Superb-Golden-Analog-Women-SDL254148294-1-b9e48.jpg"
    },
    {
      name:"Sonata",
      cost:"3000Rs",
      image:"https://staticimg.titan.co.in/Sonata/Catalog/8123WM03_1.jpg "
    },
    {
      name:"Sonata Women analog watch",
      cost:"1000Rs",
      image:"https://tse4.mm.bing.net/th?id=OIP.pkp0CY1XLPUx5ldWwbGJ5QHaHa&pid=Api&P=0&w=300&h=300" 
    },
    {
      name:"Titan Raga",
      cost:"3000Rs",
      image:"https://tse4.mm.bing.net/th?id=OIP.29OQGTG6sS8Fhe1Q14b_5QHaIq&pid=Api&P=0&w=300&h=300 " 
    },
    {
      name:"Titan Raga",
      cost:"3000Rs",
      image:"https://staticimg.titan.co.in/production/India/Titan/detail/NJ95043SM01.jpg" 
    }

  ])
  const addtocart=(product)=>{
    setCart([...cart,product]);
  }
  const RemoveCart=(productR)=>{
    setCart(cart.filter((product)=>product!==productR))
  }
  const navigate=(nextPage)=>{
    setPage(nextPage)
  }
  const renderProducts=() =>(
   
     <div>
      
      <h1>Products</h1>
      <div className="product">
      {products.map((product)=>(
        <div className="tyga" key={product.image}>
          <img src={product.image} alt=""/>
        <h3>{product.name}</h3>
        <p>{product.cost}</p>
        <button onClick={()=>addtocart(product)} className="add">Add to cart</button>
      </div>))}
     </div>

     </div>
    
  )
  const renderCarts=()=>(
    <div>
      
      <h1>Cart</h1>
      <div className="product">
      {cart.map((product)=>(
        <div className="tyga" key={product.image}>
          <img src={product.image} alt=""/>
        <h3>{product.name}</h3>
        <p>{product.cost}</p>
        <button onClick={()=>RemoveCart(product)} className="remove">Remove</button>
      </div>))}
     </div>

     </div>
  )
    return (
    <div className="App">
      <header>
        <div className="head">
        <div onClick={()=>navigate(PAGE)}>Products</div>
        <div onClick={()=>navigate(CART)} >Cart({cart.length})</div>
      
        </div>
      </header>
      {page===PAGE && renderProducts()}
      {page===CART && renderCarts()}
    </div>
  );
}

export default App;
