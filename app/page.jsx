'use client';
export default function Home(){
  const goUser = () => { window.location.href = '/user'; };
  const goStore = () => { window.location.href = '/store'; };
  return (
    <div style={{minHeight:'100vh',display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',fontFamily:'system-ui',background:'#fff'}}>
      <h1 style={{fontSize:'42px',fontWeight:800,textAlign:'center'}}>GovMart<br/>GOIN MART</h1>
      <p style={{marginTop:10,fontSize:18}}>Grocery MLM LIVE!</p>
      <div style={{display:'flex',gap:20,marginTop:28}}>
        <button onClick={goUser} style={{background:'blue',color:'#fff',padding:'18px 32px',borderRadius:12,border:'none',fontWeight:800,fontSize:16,cursor:'pointer'}}>USER - /user</button>
        <button onClick={goStore} style={{background:'green',color:'#fff',padding:'18px 32px',borderRadius:12,border:'none',fontWeight:800,fontSize:16,cursor:'pointer'}}>STORE - /store</button>
      </div>
      <p style={{marginTop:24,opacity:0.7,fontWeight:600}}>Toor Dal: 150-100-20=30 = 3+3+24/6=4</p>
      <p style={{marginTop:12,fontSize:12,opacity:0.4}}>Secret: /superadmin</p>
    </div>
  )
}
