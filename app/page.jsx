import Link from 'next/link';
export default function Home(){
  return (
    <div style={{minHeight:'100vh',display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',fontFamily:'system-ui',background:'#fff'}}>
      <h1 style={{fontSize:'42px',fontWeight:800}}>GovMart - GOIN MART</h1>
      <p style={{marginTop:10,fontSize:18}}>Grocery MLM LIVE!</p>
      <div style={{display:'flex',gap:16,marginTop:24}}>
        <Link href='/user' style={{background:'blue',color:'#fff',padding:'12px 20px',borderRadius:10,textDecoration:'none',fontWeight:600}}>User</Link>
        <Link href='/store' style={{background:'green',color:'#fff',padding:'12px 20px',borderRadius:10,textDecoration:'none',fontWeight:600}}>Store</Link>
      </div>
      <p style={{marginTop:24,opacity:0.7}}>Toor Dal: 150-100-20=30 = 3+3+24/6=4</p>
      <p style={{marginTop:12,fontSize:12,opacity:0.4}}>Admin hidden - go to /superadmin</p>
    </div>
  )
}
