import React from 'react'
import { Routes , Route, } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Home from './Pages/Home'
import Singlepage from './Components/Singlepage'
// import Form from "./Components/Form"
import Suits from './Pages/Suits'
import Fashionsingle from './Components/Fashionsingle'
import Login from './Components/Login'
import Register from './Components/Register'
import Grocery from './Pages/Grocery'
import SInglebeauty from './Components/SInglebeauty'
import Food from './Pages/Food'
import FoodSinglepage from './Components/FoodSinglepage'
import Decoration from './Pages/Decoration'
import Decosingle from './Components/Decosingle'
import Appliances from './Pages/Appliances'
import Productslist from './Components/Productslist'
import Form from "./Components/Form"
import Productsinglepage from './Components/Productsinglepage'
import Delivery from './Pages/Delivery'
import Form1 from './Components/Form1'
import FreeDelivery from './Components/FreeDelivery'
import ProtectedRoutes from './Pages/ProtectedRoutes'
import Freedevsingal from './Components/Freedevsingal'
import Addtocart from './Components/Addtocart'
import { CartProvider } from './Components/CartContext';
import Listofproducts from './Components/Listofproducts'
import Update from './Components/Update'

const App = () => {
  return (
    <div>
       <CartProvider>
      <Navbar/>
       <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/:id' element={<Singlepage/>}/>
        <Route path='/fashion' element={<Suits/>}/>
        <Route path='/fashion/:id' element={<Fashionsingle/>}/>
        <Route path='/grocery' element={<Grocery/>}/>
        <Route path='/grocery/:id' element={<SInglebeauty/>}/>
        <Route path='/food' element={<Food/>}/>
        <Route path='/food/:id' element={<FoodSinglepage/>}/>
        <Route path='/decoration' element={<Decoration/>} />
        <Route path='/decoration/:id' element={<Decosingle/>} />
        <Route path='/product' element={<Appliances/>} />
        <Route element={<ProtectedRoutes/>}>
        <Route path='/form' element={<Form/>}/>
      <Route path='/form1' element={<Form1/>}/>
      </Route>
      <Route path='/product' element={<Productslist/>}/>
      <Route path='/product/:id' element={<Productsinglepage/>}/>
      {/* <Route path='/cart' element={<Addtocart/>} /> */}
      <Route path='/list' element={<Listofproducts/>}/>
      <Route path='/list/:id' element={<Update/>}/>
      <Route path='/addtocart' element={<Addtocart/>}/>
      <Route path='/freedel' element={<Delivery/>} />
      <Route path='/freedel' element={<FreeDelivery/>}/>
      <Route path='/freedel/:id' element={<Freedevsingal/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>


        
       </Routes>
       </CartProvider>
    </div>
  )
}

export default App


// import React from 'react';
// import { BrowserRouter as Router,Route, Routes } from 'react-router-dom';
// import Navbar from './Components/Navbar';
// import { CartProvider } from './Components/CartContext';
// import Home from "./Pages/Home";
// import Singlepage from './Components/Singlepage';
// import Addtocart from './Components/Addtocart'
// const App = () => {
//   return (
//     <Router>
//       <CartProvider>
//         <Navbar />
//         <Routes>
//           <Route path='/addtocart' element={<Addtocart/>}/>
//         <Route path="/" element={<Home />} />
//         <Route path="/:id" element={<Singlepage />} />
//         {/* Other routes or components */}
//         </Routes>
//       </CartProvider>
//     </Router>
//   );
// };

// export default App;



// App.js or wherever routing is set up
// import React from 'react';
// import { BrowserRouter as Router, Route } from 'react-router-dom';
// import Navbar from './Navbar';
// import Addtocart from './Addtocart';

// const App = () => {
//   return (
//     <Router>
//       <Navbar />
//       {/* Ensure that the Route for "/addtocart" renders the Addtocart component */}
//       <Route path="/addtocart" component={Addtocart} />
//     </Router>
//   );
// };

// export default App;
