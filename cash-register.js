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

  const priceDifference = cash - price;
  const cidSum = cid.reduce((acc, val) => {
    if (!isNaN(acc + val[1])) {
      return acc + val[1];
    }
  }, 0);

  if (cidSum - priceDifference < 0) {
    return (change = {
      status: 'INSUFFICIENT_FUNDS',
      change: [],
    });
  }
  if (cidSum - priceDifference === 0) {
    return (change = {
      status: 'CLOSED',
      change: cid,
    });
  }
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
