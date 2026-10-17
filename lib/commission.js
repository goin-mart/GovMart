// lib/commission.js - GovMart JS - Toor Dal: 150-100-20=30 = 3+3+24/6=4
export function calculateProductSplit(product) {
  const net = product.sale_price - product.wholesale_price - product.company_profit;
  const selfIncome = net * (product.self_percent / 100);
  const remaining1 = net - selfIncome;
  const referralIncome = net * (product.referral_percent / 100);
  const binaryPool = remaining1 - referralIncome;
  return { net, selfIncome, referralIncome, binaryPool };
}

export function distributeBinaryPool(binaryPool, activeMembers) {
  let eligible = activeMembers.filter(m => m.dailyEarned < m.planCap);
  if (eligible.length === 0) return [];
  let distributions = [];
  let remainingPool = binaryPool;
  let remainingMembers = [...eligible];
  while (remainingPool > 0.01 && remainingMembers.length > 0) {
    const share = remainingPool / remainingMembers.length;
    let nextRound = [];
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
