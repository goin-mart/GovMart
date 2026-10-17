'use client';
import { useState } from 'react';
import { calculateProductSplit } from '../../lib/commission.js';
const products=[
  {id:1,name:'Toor Dal 1kg',sale:150,wholesale:100,company:20},
  {id:2,name:'Rice 1kg',sale:80,wholesale:50,company:10},
  {id:3,name:'Oil 1L',sale:140,wholesale:100,company:15}
];
export default function Store(){
  const [cart,setCart]=useState([]);
  const add=(p)=>setCart([...cart,p]);
  const total=cart.reduce((s,p)=>s+p.sale,0);
  return (
    <div style={{padding:24,fontFamily:'system-ui',maxWidth:800,margin:'0 auto'}}>
      <h1>Store Panel - /store</h1>
      <p style={{opacity:0.6}}>Grocery Mart - Customer Shopping</p>
      <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:12,marginTop:20}}>
        {products.map(p=>{
          const split=calculateProductSplit({sale_price:p.sale,wholesale_price:p.wholesale,company_profit:p.company,self_percent:10,referral_percent:10});
          return (
            <div key={p.id} style={{border:'1px solid #ddd',padding:16,borderRadius:12}}>
              <b>{p.name}</b>
              <p>Rs {p.sale} - Net {split.net}</p>
              <button onClick={()=>add(p)} style={{marginTop:8,background:'green',color:'#fff',padding:'8px 12px',borderRadius:8,border:'none'}}>Add to Cart</button>
            </div>
          )
        })}
      </div>
      <div style={{marginTop:24,background:'#f6f6f6',padding:16,borderRadius:12}}>
        <b>Cart {cart.length} - Total Rs {total}</b>
        <p>On checkout: Company profit, Self 3, Referral 3, Binary 24 splits to 6</p>
        <button style={{marginTop:12,background:'black',color:'#fff',padding:'12px 20px',borderRadius:10,border:'none'}}>Checkout</button>
      </div>
    </div>
  )
}
