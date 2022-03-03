import './App.css';
import {useEffect,useState} from "react";
import Products from './components/Products';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Contacts from './components/Contacts';
import Checkout from './components/Checkout';
import ItemDetail from './components/itemDetail';
import { Route, Routes, useNavigate} from 'react-router-dom';

function App() {
  const[items,setItems] = useState ([{}]);
  const[cart, setCart] = useState([]);
  const[quantity,setQuantity] = useState(0);
  const[complete,setComplete] = useState(0);
  let redirect = useNavigate();

  const fetchItems = async () => {
      const data = await fetch('https://fakestoreapi.com/products', { mode: 'cors' });
      const json = await data.json();
      setItems(json);
  }

  const handleCartAdd = (e) => {
    const {id,name,value}= e.target;
    let isIn=false;
    for(let index=0;index<cart.length;index++){
      if(cart[index].id === id){
        isIn=index;
      }
    }
    if(isIn === false){
      let image='';
      let title='';
      for(let a=0;a<items.length;a++){
        if(+id === items[a].id){
          image=items[a].image;
          title=items[a].title;
        }
      }
      const list={
        id:`${id}`,
        price:`${name}`,
        quantity:`${value}`,
        image:`${image}`,
        title:`${title}`
      };
      setCart([...cart , list])
    }else{
      setCart(existingItems => {
        return existingItems.map(item => {
          return item.id === id ? { ...item, quantity: +item.quantity + +value } : item
        })
      })
    }
  }

  const updateQuantity = (e) =>{
    const{id,value} = e.target;
    setCart(existingItems => {
      return existingItems.map(item => {
        if(value ==="+"){
          return item.id === id ? { ...item, quantity: +item.quantity + 1 } : item
        }else{
          return item.id === id ? { ...item, quantity: +item.quantity - 1 } : item
        }
      })
    })
  }

  const handleCheckout = (e) =>{
    setTimeout(()=>redirect('/'),3000);
    setTimeout(()=>setComplete(0),3000);
    setComplete(1);
    setCart([]);
  }

  function adjustQuantity(){
    let num=0;
    for(let i=0;i<cart.length;i++){
      num=num+ +cart[i].quantity;
    }
    setQuantity(num);
  } 

  useEffect(()=>{
    adjustQuantity();
  },[cart])

  useEffect(()=>{
      fetchItems();
  },[])

  return (
    <div className="App">
      <Navbar quantity={quantity}/>
        <Routes>
          <Route path='/shopping_cart' element={<Home/>}/>
          <Route path='/products' element={
            <Products 
              items={items} 
              handleCartAdd={(e) => handleCartAdd(e) }
            />}
          />
          <Route path='/cart' element={
            <Checkout 
              cart={cart} 
              updateQuantity={(e) => updateQuantity(e)} 
              handleCheckout={(e) => handleCheckout(e)} 
              complete={complete} 
            />}
          />
          <Route path='/contacts' element={<Contacts/>}/>
          <Route path='/products/:id' element={<ItemDetail items={items} handleCartAdd={(e) => handleCartAdd(e) }/>}/>
        </Routes>
    </div>
  );
}

export default App;
