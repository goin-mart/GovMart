export default function Home() {
  return (
    <div style={{padding:20, textAlign:'center'}}>
      <h1>GovMart - GOIN MART</h1>
      <p>Grocery MLM + Subscription - LIVE!</p>
      <div style={{marginTop:20, display:'flex', gap:10, justifyContent:'center'}}>
        <a href="/admin" style={{padding:'10px 20px', background:'black', color:'white', borderRadius:8}}>Admin</a>
        <a href="/user-dashboard" style={{padding:'10px 20px', background:'blue', color:'white', borderRadius:8}}>User Dashboard</a>
        <a href="/store" style={{padding:'10px 20px', background:'green', color:'white', borderRadius:8}}>Store</a>
      </div>
      <p style={{marginTop:20}}>Plans: 100,300,500,1000,3000,5000,10000</p>
      <p>Toor Dal Example: 150-100-20=30 => 3 self + 3 referral + 24/6=4 binary</p>
    </div>
  )
}
