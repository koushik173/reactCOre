import React,{useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  // var person ={
  //   name: "Koushik",
  //   job: "student"
  // }
  var allHeros = ["Hrittik","Salman","Shidhartta","Koushik", "Barun","Yash"];
  var allNiaka = ["Awisharia","Katrina","Kiara","Nora"];
  var productList = [
    {name:"Mobile", price: '$200'},
    {name: "Laptop", price: '$300'},
    {name:"HandWatch",price:'$99'},
    {name: "car", price: '$30000'}]

    
  
  return (
    <div className="App">
      <header className="App-header">
      <Counter> </Counter>
      <User> </User>
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <p>
          {/* Edit done <code>src/App.js</code> and save to reload. */}
        </p>
        {/* <h1>My Heading {person.name +" "+ person.job} </h1>

        <p>this is my first react paragraph</p> */}
        
        {/* <product productW = {productList[0]}></product> */}
        
        <ul>
          {
            allHeros.map(nayok=> <li>{nayok}</li> )
          }
          <h3>All Product</h3>
          {
            productList.map(pd=> <li>{pd.name +" : "+ pd.price}</li> )
          }
        </ul>
        {/* <Product pName={productList[0]}></Product>
        <Product pName={productList[1]}></Product> */}

        {
          productList.map(product=> <Product pName={product} ></Product> )
        }

        <Person Hero={allHeros[0]} naika = {allNiaka[0]} ></Person>
        <Person Hero= "Salman" naika = "Katrina"></Person>
        <Person Hero= "Shidhartta" naika ="Kiara"></Person>
        <Person Hero="Koushik" naika = "Nora"></Person>

      </header>
    </div>
  );
}
function Person(propt){
  const personStyle={
    border: '2px solid pink',
    margin: '10px'
  }
  return (
  <div style = {personStyle}>
      <h1>Hero Name: {propt.Hero}</h1>
      <h3>Heroin Name: {propt.naika}</h3> 
  </div>
  )
}


function Product(propt){
  const productStyle={
    border: '2px solid pink',
    margin: '20px',
    borderRadius: '5x',
    backgroundColor: 'orange',
    height: '300px',
    width: '200px',
    float: 'left'

    
  }
  const {name,price} = propt.pName;
  // const proName = propt.pName.name;
  // console.log(name);

  return(
    <div style={productStyle}>
      <h3>{name}</h3>
      <h5>Price: {price}</h5>
      <button>Buy Now</button>

    </div>
  )
}

function Counter(){
  const[count, setCount] = useState(10);
 
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={()=>setCount(count+1)}>Increase</button>
      <button onClick={()=>setCount(count-1)}>Decrease</button>
    </div>
  )
}
function User(){
  const [users, setUsers] = useState([]);
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res=> res.json())
    .then(data=> setUsers(data))
  },[])
  return (
    <div>
      <h3>Dynamic Users: {users.length}</h3>
     <ul>
      {
        users.map(user => <li>{user.name}</li> )
      }
     </ul>
    </div>

  )
}

export default App;
