import React from 'react';
import ProductCard from './components/product.js';
import Navbar from './components/navbar.js';
import Footer from './components/footer.js'
import './App.css'

class App extends React.Component {
  render(){
  return (
    <div>
      <Navbar />
    <div className="background-color">
         <div className="grid background_color grid-borders">
      <ProductCard />
      </div>
    </div>
    <Footer />
    </div>
  );
}
}

export default App;
