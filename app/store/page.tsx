'use client'
import { useState } from 'react'
import { calculateProductSplit, distributeBinaryPool } from '../../lib/commission'

export default function Store(){
  const [cart,setCart]=useState([{name:'Toor Dal', wholesale:100, company:20, sale:150, self_percent:10, referral_percent:10, qty:1}])
  const split = calculateProductSplit({sale_price:150, wholesale_price:100, company_profit:20, self_percent:10, referral_percent:10})

  return (
    <main style={{maxWidth:900,margin:'auto',padding:20}}>
      <h1>Store Billing - GovMart</h1>
      <p>Enter Mobile -> Check Active -> Add Items -> Auto Binary Split</p>
      
      <div style={{background:'white',padding:16,borderRadius:12,marginTop:10}}>
        <h3>Current Bill - Toor Dal Example</h3>
        <p>Sale: ₹{150} - Wholesale ₹100 - Company ₹20 = Net ₹{split.net}</p>
        <p>Self Income (10%): ₹{split.selfIncome}</p>
        <p>Referral Income (10%): ₹{split.referralIncome}</p>
        <p>Binary Pool: ₹{split.binaryPool} split among matching active members</p>
        <p><b>6 Matching Active => ₹{ (split.binaryPool/6).toFixed(2)} each</b></p>
        <p style={{fontSize:12,color:'#666'}}>Daily cap enforced: If member dailyEarned + share {'>'} planCap, remaining goes to next eligible. See lib/commission.ts distributeBinaryPool()</p>
      </div>

      <button style={{marginTop:16,background:'#0a5c36',color:'white',padding:'12px 24px',borderRadius:10,border:'none',fontWeight:700}}>Generate Bill</button>
    </main>
  )
}
