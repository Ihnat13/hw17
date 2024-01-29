const balances = ['$123.10', '$61 123.23', '$1,321,123.10', '$0.00', '$799.50', '$1 916 161 123.25']

const balanceNums = balances.map(balance => Number(balance.match(/[0-9.]+/g).join('')))
console.log(balanceNums)
