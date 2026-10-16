'use client'
import { useEffect, useState } from 'react'
import { supabase } from '../../lib/supabase'

export default function Admin(){
  const [plans,setPlans]=useState<any[]>([])
  const [products,setProducts]=useState<any[]>([])

  useEffect(()=>{
    supabase.from('plans').select('*').order('amount').then(({data})=>setPlans(data||[]))
    supabase.from('products').select('*').then(({data})=>setProducts(data||[]))
  },[])

  return (
    <main style={{maxWidth:1200,margin:'auto',padding:20}}>
      <h1>GovMart Admin</h1>
      <p>Supabase: oqozckrrirecwjduqxsa.supabase.co</p>
      
      <h2>Plans (Editable)</h2>
      <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(180px,1fr))',gap:12}}>
        {plans.map(p=><div key={p.id} style={{background:'white',padding:14,borderRadius:12,border:'1px solid #ddd'}}>
          <b>₹{p.amount}</b><br/>
          Active: {p.is_active?'YES':'NO'}<br/>
          Self: {p.self_income_eligible?'YES':'NO'}<br/>
          ROI: {p.roi_eligible?'YES':'NO'}
        </div>)}
      </div>

      <h2 style={{marginTop:30}}>Products - Toor Dal Logic</h2>
      <table style={{width:'100%',background:'white',borderRadius:12,overflow:'hidden'}}>
        <thead style={{background:'#0a5c36',color:'white'}}><tr><th>Name</th><th>Wholesale</th><th>Company</th><th>Sale</th><th>Net</th><th>Self%</th><th>Ref%</th></tr></thead>
        <tbody>{products.map(pr=>{
          const net = (pr.sale_price||0)-(pr.wholesale_price||0)-(pr.company_profit||0)
          return <tr key={pr.id} style={{borderBottom:'1px solid #eee'}}><td>{pr.name}</td><td>{pr.wholesale_price}</td><td>{pr.company_profit}</td><td>{pr.sale_price}</td><td><b>{net}</b></td><td>{pr.self_percent}%</td><td>{pr.referral_percent}%</td></tr>
        })}{products.length===0&&<tr><td colSpan={7} style={{padding:20,textAlign:'center'}}>No products - Add in Supabase Table: products</td></tr>}</tbody>
      </table>

      <div style={{marginTop:20,background:'#fff7ed',padding:16,borderRadius:10}}>
        <b>Admin Actions:</b> Plans toggle active in Supabase table `plans` -> is_active. Products add with wholesale, company, sale, self%, referral%. Binary engine auto splits net profit via lib/commission.ts
      </div>
    </main>
  )
}
