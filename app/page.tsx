'use client'
import Link from 'next/link'

export default function Home(){
  return (
    <main style={{minHeight:'100vh', background:'#f8faf8'}}>
      <header style={{background:'white',padding:'40px 20px',textAlign:'center',borderBottom:'4px solid #0a5c36'}}>
        <div style={{fontSize:62,fontWeight:900, letterSpacing:-1}}>
          <span style={{fontSize:80,color:'#0a5c36'}}>G</span>ov<span style={{color:'#ff7a00',fontSize:74}}>M</span>ART
        </div>
        <p style={{color:'#666',fontSize:18, marginTop:10}}>Grocery Shopping with Smart Membership Rewards</p>
        
        <div style={{marginTop:18, display:'flex', gap:10, justifyContent:'center'}}>
          <span style={{background:'#0a5c36',color:'white',padding:'8px 14px',borderRadius:20,fontSize:13,fontWeight:700}}>Govmart - Supabase Connected ✅</span>
          <span style={{background:'#ff7a00',color:'white',padding:'8px 14px',borderRadius:20,fontSize:13,fontWeight:700}}>GitHub: goin-mart/GovMart</span>
        </div>

        <div style={{marginTop:28,display:'flex',gap:12,justifyContent:'center',flexWrap:'wrap'}}>
          <Link href="/user-dashboard" style={{background:'#0a5c36',color:'white',padding:'14px 24px',borderRadius:12,textDecoration:'none',fontWeight:800, fontSize:16}}>User Dashboard</Link>
          <Link href="/admin" style={{background:'white',color:'#0a5c36',border:'2px solid #0a5c36',padding:'14px 24px',borderRadius:12,textDecoration:'none',fontWeight:800, fontSize:16}}>Admin Panel</Link>
          <Link href="/store" style={{background:'#ff7a00',color:'white',padding:'14px 24px',borderRadius:12,textDecoration:'none',fontWeight:800, fontSize:16}}>Store Billing</Link>
        </div>
      </header>

      <div style={{padding:20, maxWidth:900, margin:'0 auto', display:'grid', gap:16, marginTop:20}}>
        <div style={{background:'white',padding:20,borderRadius:16,borderLeft:'6px solid #ff7a00'}}>
          <b>📦 Plans:</b> 100,300,500,1000,3000,5000,10000 - Admin editable. Self income only for 1000+
        </div>
        <div style={{background:'white',padding:20,borderRadius:16,borderLeft:'6px solid #0a5c36'}}>
          <b>👥 Binary Active:</b> Left 1 + Right 1 direct = Matching Active. Daily cap = Plan amount. members = 4 each
        </div>
      </div>
    </main>
  )
}
