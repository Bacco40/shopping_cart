import './App.css';
import {useEffect,useState} from "react";
import Products from './components/Products';
import Navbar from './components/Navbar';
import About from './components/About';
import Home from './components/Home';
import Checkout from './components/Checkout';
import {BrowserRouter, Route, Routes} from 'react-router-dom';

function App() {
  const[items,setItems] = useState ([{}]);
  const[cart, setCart] = useState([]);
  const[quantity,setQuantity] = useState(0);

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
          return item.id === id ? { ...item, quantity: +item.quantity + 1 } : item
        })
      })
    }
  }

  const updateQuantity = (e) =>{
    const{id,value} = e.target;
    console.log(e.target)
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
      <BrowserRouter>
      <Navbar quantity={quantity}/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/products' element={<Products items={items} handleCartAdd={(e) => handleCartAdd(e) }/>}/>
          <Route path='/cart' element={<Checkout cart={cart} updateQuantity={(e) => updateQuantity(e)}/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
