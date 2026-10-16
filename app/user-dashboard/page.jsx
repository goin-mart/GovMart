'use client'
import { useState } from 'react'

export default function UserDashboard(){
  const [mobile,setMobile]=useState('')
  return (
    <main style={{maxWidth:900,margin:'auto',padding:20}}>
      <h1>User Dashboard</h1>
      <input value={mobile} onChange={e=>setMobile(e.target.value)} placeholder="Enter Mobile to Check Plan" style={{padding:12,width:'100%',maxWidth:320,borderRadius:10,border:'1px solid #ccc'}}/>
      <div style={{marginTop:20,display:'grid',gridTemplateColumns:'1fr 1fr',gap:16}}>
        <div style={{background:'white',padding:16,borderRadius:12}}><h3>Active Plan</h3><p>{mobile?'Checking for '+mobile:'Enter mobile'}</p><p>Self Income Eligible: Plan 1000+ only</p></div>
        <div style={{background:'white',padding:16,borderRadius:12}}><h3>Referral Tree</h3><p>Left: 0 | Right: 0 | Matching Active: 0</p><p>Left 1 + Right 1 = 1 Matching</p></div>
        <div style={{background:'white',padding:16,borderRadius:12}}><h3>Wallet</h3><p>Referral: ₹0<br/>Renewal: ₹0<br/>Self Purchase: ₹0<br/>Referral Purchase: ₹0<br/>Binary: ₹0<br/>ROI: ₹0</p></div>
        <div style={{background:'white',padding:16,borderRadius:12}}><h3>Daily Binary Cap</h3><p>Today Earned: ₹0 / Plan Cap</p><p>Plan 100 = Max 100/day. Excess goes to next matching members via distributeBinaryPool()</p></div>
      </div>
    </main>
  )
}
