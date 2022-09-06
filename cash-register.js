const equivalencies = [
  ['PENNY', 0.01],
  ['NICKEL', 0.05],
  ['DIME', 0.1],
  ['QUARTER', 0.25],
  ['ONE', 1],
  ['FIVE', 5],
  ['TEN', 10],
  ['TWENTY', 20],
  ['ONE HUNDRED', 100],
];

function checkCashRegister(price, cash, cid) {
  let change = {
    status: '',
    change: [],
  };

  let priceAndPaymentDifference = cash - price;
  const cidSum = cid.reduce((acc, val) => {
    if (!isNaN(acc + val[1])) {
      return acc + val[1];
    }
  }, 0);

  if (cidSum - priceAndPaymentDifference < 0) {
    return (change = {
      status: 'INSUFFICIENT_FUNDS',
      change: [],
    });
  }

  if (cidSum - priceAndPaymentDifference === 0) {
    return (change = {
      status: 'CLOSED',
      change: cid,
    });
  }

  const onlyAvailablesEquivalencies = findOnlyAvailablesEquivalencies(
    equivalencies,
    priceAndPaymentDifference
  );

  while (priceAndPaymentDifference !== 0) {
    const moneyToSubstract =
      onlyAvailablesEquivalencies[onlyAvailablesEquivalencies.length - 1][1];

    if (cid[onlyAvailablesEquivalencies.length - 1][1] - moneyToSubstract < 0) {
      onlyAvailablesEquivalencies.splice(
        onlyAvailablesEquivalencies.length - 1,
        1
      );
    }
    cid[onlyAvailablesEquivalencies.length - 1][1] -= moneyToSubstract;
    priceAndPaymentDifference = priceAndPaymentDifference - moneyToSubstract;
  }

  return (change = {
    status: 'OPEN',
    change: cid,
  });
}

function findOnlyAvailablesEquivalencies(
  equivalencies,
  priceAndPaymentDifference
) {
  const availablesEquivalencies = [];

  for (let i = 0; i < equivalencies.length; i++) {
    if (equivalencies[i][1] <= priceAndPaymentDifference) {
      availablesEquivalencies.push(equivalencies[i]);
    }
  }
  return availablesEquivalencies;
}

console.log(
  checkCashRegister(19.5, 20, [
    ['PENNY', 1.01],
    ['NICKEL', 2.05],
    ['DIME', 3.1],
    ['QUARTER', 4.25],
    ['ONE', 90],
    ['FIVE', 55],
    ['TEN', 20],
    ['TWENTY', 60],
    ['ONE HUNDRED', 100],
  ])
);
// console.log(
//   checkCashRegister(3.26, 100, [
//     ['PENNY', 1.01],
//     ['NICKEL', 2.05],
//     ['DIME', 3.1],
//     ['QUARTER', 4.25],
//     ['ONE', 90],
//     ['FIVE', 55],
//     ['TEN', 20],
//     ['TWENTY', 60],
//     ['ONE HUNDRED', 100],
//   ])
// );
// console.log(
//   checkCashRegister(19.5, 20, [
//     ['PENNY', 0.5],
//     ['NICKEL', 0],
//     ['DIME', 0],
//     ['QUARTER', 0],
//     ['ONE', 0],
//     ['FIVE', 0],
//     ['TEN', 0],
//     ['TWENTY', 0],
//     ['ONE HUNDRED', 0],
//   ])
// );
// console.log(
//   checkCashRegister(19.5, 20, [
//     ['PENNY', 0.01],
//     ['NICKEL', 0],
//     ['DIME', 0],
//     ['QUARTER', 0],
//     ['ONE', 0],
//     ['FIVE', 0],
//     ['TEN', 0],
//     ['TWENTY', 0],
//     ['ONE HUNDRED', 0],
//   ])
// );
