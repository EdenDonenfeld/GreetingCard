import React from 'react';
import './App.css';
import ProductCard from './components/ProductCard';

function App() {
  const imageUrl = "zoey.jpg";
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
        <ProductCard name="Zoey" price={66} imageUrl={imageUrl} />
        <ProductCard name="Zoey" price={66} imageUrl={imageUrl} />
        <ProductCard name="Zoey" price={66} imageUrl={imageUrl} />
    </div>
  );
}

export default App;
