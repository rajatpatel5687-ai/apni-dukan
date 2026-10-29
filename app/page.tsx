"use client";
import { useEffect, useState } from "react";

export default function HomePage() {
  const [products, setProducts] = useState<any[]>([]);
  const [cart, setCart] = useState<any[]>([]);

  useEffect(() => {
    fetch("/api/products").then(res => res.json()).then(data => setProducts(data));
    const savedCart = localStorage.getItem("cart");
    if(savedCart) setCart(JSON.parse(savedCart));
  }, []);

  const addToCart = (product:any) => {
    const newCart = [...cart, product];
    setCart(newCart);
    localStorage.setItem("cart", JSON.stringify(newCart));
    alert(`${product.name} Cart me add ho gaya!`);
  };

  return (
    <div style={{padding: '24px', fontFamily: 'sans-serif'}}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
        <h1 style={{fontSize: '28px', fontWeight: 'bold'}}>Apni Dukan 🛒</h1>
        <div style={{display: 'flex', gap: '12px', alignItems: 'center'}}>
          <a href="/cart" style={{background: '#eee', padding: '8px 14px', borderRadius: '20px', fontWeight: 'bold', textDecoration: 'none', color: 'black'}}>Cart: {cart.length}</a>
          <a href="/login" style={{background: 'black', color: 'white', padding: '10px 18px', borderRadius: '8px', textDecoration: 'none'}}>Login</a>
        </div>
      </div>

      <div style={{marginTop: '30px', display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '20px'}}>
        {products.map((p:any) => (
          <div key={p.id} style={{border: '1px solid #ddd', padding: '16px', borderRadius: '10px', background: 'white'}}>
            <img src={p.image} alt={p.name} style={{width: '100%', height: '150px', objectFit: 'cover', borderRadius: '6px', marginBottom: '10px'}} />
            <h3 style={{fontWeight: 'bold', fontSize: '18px'}}>{p.name}</h3>
            <p style={{margin: '8px 0', color: '#555'}}>₹{p.price}</p>
            <button onClick={()=>addToCart(p)} style={{marginTop: '10px', width: '100%', padding: '10px', background: 'black', color: 'white', borderRadius: '6px', cursor: 'pointer'}}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}