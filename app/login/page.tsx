"use client";
import { signIn } from "next-auth/react";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = async () => {
    const res = await signIn("credentials", { email, password, redirect: false });
    if (res?.ok) router.push("/");
    else alert("Login Fail");
  };

  return (
    <div style={{minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', background: '#f3f4f6'}}>
      <div style={{background: 'white', padding: '32px', borderRadius: '12px', width: '350px'}}>
        <h1 style={{fontSize: '24px', fontWeight: 'bold', marginBottom: '16px'}}>Login Karo</h1>
        <input style={{width: '100%', border: '1px solid #ccc', padding: '10px', borderRadius: '6px', marginBottom: '10px'}} placeholder="Email" onChange={e => setEmail(e.target.value)} />
        <input type="password" style={{width: '100%', border: '1px solid #ccc', padding: '10px', borderRadius: '6px', marginBottom: '16px'}} placeholder="Password" onChange={e => setPassword(e.target.value)} />
        <button onClick={handleLogin} style={{width: '100%', background: 'black', color: 'white', padding: '12px', borderRadius: '6px'}}>Login</button>
      </div>
    </div>
  );
}