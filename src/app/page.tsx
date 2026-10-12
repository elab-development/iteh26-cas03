"use client"

import { useState } from "react";

export default function Home() {
  const [count, setCount] = useState(0)
  //let broj = 0

  return (
    <div className="bg-blue-500 text-white">
      <p>
        Ovo je page.tsx na pocetnoj stranici
      </p>
      <p>Brojac {count}</p>
      <button 
        onClick={()=>setCount(count + 1)}
        className="bg-yellow-500 text-white"
      >
        Povecaj brojac
      </button>
    </div>
  );
}
