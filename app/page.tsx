'use client'
import Link from 'next/link'
export default function Home(){
  return (
    <main style={{minHeight:'100vh'}}>
      <header style={{background:'white',padding:'30px',textAlign:'center',borderBottom:'4px solid #0a5c36'}}>
        <div style={{fontSize:62,fontWeight:900}}><span style={{fontSize:80,color:'#0a5c36'}}>G</span>ov<span style={{color:'#ff7a00',fontSize:74}}>M</span>ART</div>
        <p style={{color:'#555',margin:'8px 0 16px'}}>Grocery Shopping with Smart Membership Rewards</p>
        <div style={{display:'flex',gap:10,justifyContent:'center',flexWrap:'wrap'}}>
          <span style={{background:'#0a5c36',color:'white',padding:'6px 14px',borderRadius:20,fontSize:13}}>Supabase Connected ✅</span>
        </div>
        <div style={{marginTop:22,display:'flex',gap:12,justifyContent:'center',flexWrap:'wrap'}}>
          <Link href="/user-dashboard" style={{background:'#0a5c36',color:'white',padding:'12px 20px',borderRadius:10,textDecoration:'none',fontWeight:700}}>User Dashboard</Link>
          <Link href="/admin" style={{background:'white',color:'#0a5c36',border:'2px solid #0a5c36',padding:'12px 20px',borderRadius:10,textDecoration:'none',fontWeight:700}}>Admin Panel</Link>
          <Link href="/store" style={{background:'#ff7a00',color:'white',padding:'12px 20px',borderRadius:10,textDecoration:'none',fontWeight:700}}>Store Billing</Link>
        </div>
      </header>
    </main>
  )
}
