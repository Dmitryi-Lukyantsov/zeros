module.exports = function zeros(expression) {
  let arrNum = expression.split('*');
  let newArrNum = [];
  let mulNum = 1n;
  let result = 0;

  arrNum.forEach(item => {
    if (item.lastIndexOf('!!')) {
      let twoFactorial = 1n;
      let itemNum = item.slice(0, -2);
      
      for ( ; itemNum >= 1; itemNum -= 2) {
        twoFactorial *= BigInt(itemNum);
      }
      newArrNum.push(twoFactorial);
    };

    if (item.lastIndexOf('!')) {
      let oneFactorial = 1n;
      let itemNum = item.slice(0, -1);

      for ( ; itemNum >= 1; itemNum--) {
        oneFactorial *= BigInt(itemNum);
      }
      newArrNum.push(oneFactorial);
    }
  });

  newArrNum.forEach(item => {
    mulNum = mulNum * BigInt(item);
  })
  
  while (mulNum % 10n == 0) {
    mulNum /= 10n
    result++
  }

  console.log(result)
  return result;
}

// function zeros(expression) {
//   let arrNum = expression.split('*');
//   let newArrNum = [];
//   let mulNum = 1n;
//   let result = 0;

//   arrNum.forEach(item => {
//     if (item.lastIndexOf('!!')) {
//       let twoFactorial = 1n;
//       let itemNum = item.slice(0, -2);
      
//       for ( ; itemNum >= 1; itemNum -= 2) {
//         twoFactorial *= BigInt(itemNum);
//       }
//       newArrNum.push(twoFactorial);
//     };

//     if (item.lastIndexOf('!')) {
//       let oneFactorial = 1n;
//       let itemNum = item.slice(0, -1);

//       for ( ; itemNum >= 1; itemNum--) {
//         oneFactorial *= BigInt(itemNum);
//       }
//       newArrNum.push(oneFactorial);
//     }
//   });

//   newArrNum.forEach(item => {
//     mulNum = mulNum * item;
//   })
  
//   while (mulNum % 10n == 0) {
//     mulNum /= 10n
//     result++
//   }

//   console.log(result)
//   return result;
// }

// zeros('5!') //1
// zeros('9!!*10!!*7!!') // 3
// zeros('90!!*10!!') //11
// zeros('1!!*2!!*3!!*4!!*5!!*6!!*7!!*8!!*9!!*10!!') //4
