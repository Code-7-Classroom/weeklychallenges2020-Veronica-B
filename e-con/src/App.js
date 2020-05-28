import React from 'react';
import ProductCard from './components/product.js';
import Navbar from './components/navbar.js';
import Footer from './components/footer.js';
// import Filter from './components/filter'
import './App.css'

class App extends React.Component {
  render(){
  return (
    <div>
      <Navbar />
      {/* <Filter /> */}
    <div className="background-color">
         <div className="background_color grid-borders">
      <ProductCard />
      </div>
    </div>
    <Footer />
    </div>
  );
}
}

export default App;
