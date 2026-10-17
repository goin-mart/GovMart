'use client';
export default function UserPanel(){
  const earnings={self:45,referral:60,binary:240,cap:500};
  return (
    <div style={{padding:24,fontFamily:'system-ui',maxWidth:800,margin:'0 auto'}}>
      <h1>User Panel - /user</h1>
      <div style={{display:'grid',gridTemplateColumns:'1fr 1fr 1fr',gap:12,marginTop:20}}>
        <div style={{background:'#dbeafe',padding:16,borderRadius:12}}><b>Self</b><p style={{fontSize:24}}>Rs {earnings.self}</p></div>
        <div style={{background:'#dcfce7',padding:16,borderRadius:12}}><b>Referral</b><p style={{fontSize:24}}>Rs {earnings.referral}</p></div>
        <div style={{background:'#fef9c3',padding:16,borderRadius:12}}><b>Binary</b><p style={{fontSize:24}}>Rs {earnings.binary}</p></div>
      </div>
      <p style={{marginTop:16}}>Daily Cap: Rs {earnings.cap}</p>
      <div style={{marginTop:20,background:'#f6f6f6',padding:16,borderRadius:12}}>
        <b>My Referral Link</b>
        <p style={{marginTop:8,background:'#fff',padding:8,borderRadius:8,border:'1px solid #ddd'}}>https://govmart-omega.vercel.app/store?ref=theja123</p>
      </div>
    </div>
  )
}
