import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json([
    { id: 1, name: "T-Shirt", price: 499, image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=300" },
    { id: 2, name: "Jeans", price: 1299, image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=300" },
    { id: 3, name: "Shoes", price: 1999, image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=300" },
    { id: 4, name: "Cap", price: 299, image: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=300" },
  ]);
}