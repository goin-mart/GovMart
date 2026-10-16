'use client'
import Link from 'next/link'

export default function Home(){
  return(
    <main style={{minHeight:'100vh',background:'#f8faf8',fontFamily:'system-ui'}}>
      <div style={{background:'white',padding:'40px 20px',textAlign:'center',borderBottom:'4px solid #0a5c36'}}>
        <h1 style={{fontSize:48,margin:0,color:'#0a5c36'}}>GovMART</h1>
        <p>Grocery Shopping with Smart Membership Rewards</p>
        <div style={{marginTop:24,display:'flex',gap:12,justifyContent:'center'}}>
          <Link href="/user-dashboard" style={{background:'#0a5c36',color:'white',padding:'12px 20px',borderRadius:10,textDecoration:'none',fontWeight:700}}>User Dashboard</Link>
          <Link href="/admin" style={{background:'white',color:'#0a5c36',border:'2px solid #0a5c36',padding:'12px 20px',borderRadius:10,textDecoration:'none',fontWeight:700}}>Admin Panel</Link>
          <Link href="/store" style={{background:'#ff7a00',color:'white',padding:'12px 20px',borderRadius:10,textDecoration:'none',fontWeight:700}}>Store Billing</Link>
        </div>
      </div>
      <div style={{padding:20,maxWidth:800,margin:'20px auto'}}>
        <p>Plans: 100,300,500,1000,3000,5000,10000 - Admin editable</p>
        <p>Binary: Left 1 + Right 1 = Active. Daily cap = Plan amount. Toor Dal split 30 = 3+3+24</p>
      </div>
    </main>
  )
}
