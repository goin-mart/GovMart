// lib/commission.ts - Gov Mart Commission Engine
// Toor Dal Example: sale 150 - wholesale 100 - company 20 = net 30
// net 30 = self 3 + referral 3 + binary 24 split 6 = 4 each

export type Product = {
  sale_price: number;
  wholesale_price: number;
  company_profit: number;
  self_percent: number; // e.g. 10
  referral_percent: number; // e.g. 10
};

export function calculateProductSplit(product: Product) {
  const net = product.sale_price - product.wholesale_price - product.company_profit;
  const selfIncome = net * (product.self_percent / 100);
  const remaining1 = net - selfIncome;
  const referralIncome = net * (product.referral_percent / 100);
  const binaryPool = remaining1 - referralIncome;
  return { net, selfIncome, referralIncome, binaryPool };
}

export type ActiveMember = {
  userId: string;
  dailyEarned: number;
  planCap: number;
};

export function distributeBinaryPool(binaryPool: number, activeMembers: ActiveMember[]) {
  let eligible = activeMembers.filter(m => m.dailyEarned < m.planCap);
  if (eligible.length === 0) return [];

  let distributions: { userId: string; amount: number }[] = [];
  let remainingPool = binaryPool;
  let remainingMembers = [...eligible];

  while (remainingPool > 0.01 && remainingMembers.length > 0) {
    const share = remainingPool / remainingMembers.length;
    let nextRound: ActiveMember[] = [];
    for (let m of remainingMembers) {
      const canTake = m.planCap - m.dailyEarned;
      const take = Math.min(share, canTake);
      distributions.push({ userId: m.userId, amount: take });
      m.dailyEarned += take;
      remainingPool -= take;
      if (m.dailyEarned < m.planCap - 0.01) nextRound.push(m);
    }
    remainingMembers = nextRound;
    if (share < 0.01) break;
  }
  return distributions;
}
