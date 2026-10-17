'use client';
import { useState } from 'react';
import { calculateProductSplit } from '../../lib/commission.js';
export default function SuperAdmin(){
  const [sale,setSale]=useState(150);
  const [whole,setWhole]=useState(100);
  const [company,setCompany]=useState(20);
  const [selfP,setSelfP]=useState(10);
  const [refP,setRefP]=useState(10);
  const result=calculateProductSplit({sale_price:Number(sale),wholesale_price:Number(whole),company_profit:Number(company),self_percent:Number(selfP),referral_percent:Number(refP)});
  const perPerson=result.binaryPool>0? (result.binaryPool/6).toFixed(2):0;
  return (
    <div style={{padding:24,fontFamily:'system-ui',maxWidth:800,margin:'0 auto'}}>
      <h1 style={{fontSize:28,fontWeight:800}}>SuperAdmin - Boss Panel</h1>
      <p style={{opacity:0.6}}>Secret Link: /superadmin - Only for Theja</p>
      <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:12,marginTop:20}}>
        <label>Sale Price <input type='number' value={sale} onChange={e=>setSale(e.target.value)} style={{width:'100%',padding:8,border:'1px solid #ccc',borderRadius:8}}/></label>
        <label>Wholesale <input type='number' value={whole} onChange={e=>setWhole(e.target.value)} style={{width:'100%',padding:8,border:'1px solid #ccc',borderRadius:8}}/></label>
        <label>Company Profit <input type='number' value={company} onChange={e=>setCompany(e.target.value)} style={{width:'100%',padding:8,border:'1px solid #ccc',borderRadius:8}}/></label>
        <label>Self % <input type='number' value={selfP} onChange={e=>setSelfP(e.target.value)} style={{width:'100%',padding:8,border:'1px solid #ccc',borderRadius:8}}/></label>
        <label>Referral % <input type='number' value={refP} onChange={e=>setRefP(e.target.value)} style={{width:'100%',padding:8,border:'1px solid #ccc',borderRadius:8}}/></label>
      </div>
      <div style={{marginTop:20,background:'#f6f6f6',padding:16,borderRadius:12}}>
        <p><b>Toor Dal Formula:</b> {sale}-{whole}-{company} = {result.net}</p>
        <p>Net {result.net} = Self {result.selfIncome} + Referral {result.referralIncome} + Binary {result.binaryPool}</p>
        <p>Binary {result.binaryPool} / 6 = {perPerson} each</p>
        <p style={{marginTop:8,fontWeight:700}}>= {result.selfIncome}+{result.referralIncome}+{result.binaryPool}/6={perPerson} => 3+3+4 model LIVE</p>
      </div>
      <div style={{marginTop:24}}>
        <h3>Products (Add to Supabase later)</h3>
        <ul>
          <li>Toor Dal - 150</li>
          <li>Rice 1kg - 80</li>
          <li>Oil 1L - 140</li>
        </ul>
      </div>
    </div>
  )
}
