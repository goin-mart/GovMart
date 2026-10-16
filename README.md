Gov Mart - Grocery MLM + Subscription
Tech: Next.js 14 + Supabase + Tailwind

Features Implemented (as per client spec)
Plans: 100,300,500,1000,3000,5000,10000 editable in admin
Account active only if plan active
Referral: L1 10% L2 5% (admin editable), Renewal L1 5% L2 2%
Self Purchase Income: only 1000,3000,5000,10000 plans, product-wise %
Referral Purchase Income: product-wise %
Binary Active Income: Need Left 1 + Right 1 direct => Matching Active. Then left/right purchases net profit split equally among active members. Daily cap = plan amount. Example Toor Dal net 30 => self 3, referral 3, binary pool 24 /6 =4 each.
ROI: 5000 & 10000 plans daily 8pm
Wallet: separate incomes, total, min withdraw plan-wise, admin charge %
Store Panel: Enter mobile => fetch active plan => billing => auto split
Setup Steps
Create Supabase project at supabase.com
Run supabase/schema.sql in SQL Editor
Enable Auth (Phone OTP)
Create Next.js: npx create-next-app@latest
Install: npm install @supabase/supabase-js
Copy .env.example to .env.local and fill SUPABASE_URL and ANON_KEY
Deploy to Vercel, connect domain later.
Next: Real commission split function (Postgres Function) will be added in supabase/functions
