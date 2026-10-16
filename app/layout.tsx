export const metadata = { title: 'GovMart - Grocery Membership', description: 'Grocery Shopping with Smart Membership Rewards' }
export default function RootLayout({children}:{children:React.ReactNode}){
  return <html lang="en"><head><link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700;900&display=swap" rel="stylesheet"/></head><body style={{margin:0,fontFamily:'Inter,system-ui',background:'#f8fdf9'}}>{children}</body></html>
}
