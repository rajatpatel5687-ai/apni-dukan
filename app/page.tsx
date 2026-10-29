"use client";
import { useState } from "react";

const products = [
  { id: 1, name: "Linen Wool Coat", desc: "Classic structured outerwear in natural linen-wool", price: "₹20,999", img: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=500" },
  { id: 2, name: "Silk Pleated Shirt", desc: "Relaxed fit silk shirt with pleated detail", price: "₹10,499", img: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=500" },
  { id: 3, name: "Tailored Wool Trousers", desc: "High-waist tailored trousers with pleated detail", price: "₹11,799", img: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=500" },
  { id: 4, name: "Leather Crossbody Bag", desc: "Minimal leather crossbody with gold clasp", price: "₹18,499", img: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=500" },
];

export default function Home() {
  const [cart, setCart] = useState(0);
  return (
    <div className="bg-[#FEFBF6] text-black min-h-screen selection:bg-black selection:text-white">
      {/* Top Bar */}
      <div className="bg-[#0A0A0A] text-[#FEFBF6] text-center py-3 text-[11px] tracking-[0.2em] font-sans">
        COMPLIMENTARY SHIPPING ON ORDERS OVER ₹10,000 • RETURNS WITHIN 30 DAYS
      </div>

      {/* Navbar - Zara Style */}
      <nav className="sticky top-0 z-50 bg-[#FEFBF6]/80 backdrop-blur-md flex justify-between items-center px-8 md:px-16 py-6 border-b border-black/5">
        <h1 className="text-[38px] font-serif font-light tracking-tight leading-none">Apni Dukan</h1>
        <div className="hidden md:flex gap-10 text-[13px] tracking-widest font-sans">
          <span className="cursor-pointer">SHOP</span>
          <span className="cursor-pointer">COLLECTIONS</span>
          <span className="cursor-pointer">EDITORIAL</span>
          <span className="cursor-pointer">ABOUT</span>
        </div>
        <div className="flex gap-6 items-center font-sans text-sm">
          <span className="cursor-pointer">🔍</span>
          <span className="cursor-pointer">👤</span>
          <span className="cursor-pointer relative">👜 <span className="absolute -top-2 -right-2 bg-black text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full">{cart}</span></span>
        </div>
      </nav>

      {/* Hero - Apple + Zara */}
      <section className="grid md:grid-cols-2 min-h-[85vh] items-center bg-[#F8F3EC]">
        <div className="px-8 md:px-16 py-20">
          <h2 className="text-[60px] md:text-[85px] font-serif leading-[0.9] tracking-tight">
            CURATED FOR<br/>THE MODERN
          </h2>
          <p className="mt-6 text-xl font-serif opacity-70">Timeless pieces. Crafted with intent.</p>
          <button className="mt-10 bg-black text-[#FEFBF6] px-12 py-4 rounded-full text-sm tracking-widest hover:bg-zinc-800 transition">
            Shop the Collection
          </button>
          <p className="mt-12 text-[12px] tracking-[0.2em] font-sans opacity-60">EXPLORE NEW ARRIVAL • FALL 2024</p>
        </div>
        <div className="h-[85vh] bg-cover bg-center" style={{backgroundImage: "url('https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=800')"}} />
      </section>

      {/* Featured */}
      <section className="px-8 md:px-16 py-20">
        <h3 className="text-center text-sm tracking-[0.2em] mb-12 font-sans">FEATURED SELECTION</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {products.map((p) => (
            <div key={p.id} className="group cursor-pointer" onClick={() => setCart(cart+1)}>
              <div className="bg-[#F8F3EC] aspect-[3/4] overflow-hidden">
                <img src={p.img} alt={p.name} className="w-full h-full object-cover group-hover:scale-105 transition duration-700" />
              </div>
              <div className="mt-5 text-center">
                <h4 className="font-serif text-lg">{p.name}</h4>
                <p className="text-[12px] opacity-60 mt-1 font-sans px-2">{p.desc}</p>
                <p className="mt-3 font-sans font-medium">{p.price}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <footer className="bg-black text-white text-center py-6 text-[11px] tracking-widest font-sans">
        © 2024 APNI DUKAN • PRIVACY • TERMS • CONTACT
      </footer>
    </div>
  );
}