"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function CartPage() {
  const [cart, setCart] = useState<any[]>([]);
  const router = useRouter();

  useEffect(() => {
    const saved = localStorage.getItem("cart");
    if (saved) setCart(JSON.parse(saved));
  }, []);

  const removeItem = (index:number) => {
    const newCart = cart.filter((_, i) => i !== index);
    setCart(newCart);
    localStorage.setItem("cart", JSON.stringify(newCart));
  };

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  const handleCheckout = () => {
    alert(`Order Placed! Total ₹${total} - Payment Successful!`);
    localStorage.removeItem("cart");
    setCart([]);
    router.push("/");
  };

  return (
    <div style={{padding: '24px', fontFamily: 'sans-serif', maxWidth: '600px', margin: '0 auto'}}>
      <h1 style={{fontSize: '28px', fontWeight: 'bold', marginBottom: '20px'}}>Tumhara Cart 🛒</h1>
      
      {cart.length === 0 ? (
        <div style={{textAlign: 'center', marginTop: '50px'}}>
          <p>Cart khali hai</p>
          <a href="/" style={{display: 'inline-block', marginTop: '12px', background: 'black', color: 'white', padding: '10px 18px', borderRadius: '8px', textDecoration: 'none'}}>Shopping Karo</a>
        </div>
      ) : (
        <>
          {cart.map((item, index) => (
            <div key={index} style={{display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #eee', padding: '12px 0'}}>
              <div><b>{item.name}</b> - ₹{item.price}</div>
              <button onClick={()=>removeItem(index)} style={{color: 'red', background: 'none', border: 'none', cursor: 'pointer'}}>Hatao</button>
            </div>
          ))}
          <div style={{marginTop: '20px', fontSize: '20px', fontWeight: 'bold'}}>Total: ₹{total}</div>
          <button onClick={handleCheckout} style={{marginTop: '20px', width: '100%', padding: '14px', background: 'green', color: 'white', borderRadius: '8px', fontSize: '16px', fontWeight: 'bold', cursor: 'pointer'}}>Checkout Karo</button>
        </>
      )}
    </div>
  );
}