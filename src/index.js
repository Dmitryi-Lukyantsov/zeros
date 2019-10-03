module.exports = function zeros(expression) {
  let arrNum = expression.split('*');
  let newArrNum = [];
  let mulNum = 1n;
  let result = 0;
  
  arrNum.forEach(item => {
    if (item.charAt(item.length - 2) === '!') {
      let twoFactorial = 1n;
      let itemNum = item.slice(0, -2);
      
      for ( ; itemNum >= 1; itemNum -= 2) {
        twoFactorial *= BigInt(itemNum);
      }
      newArrNum.push(twoFactorial);
    };

    if (item.charAt(item.length - 2) !== '!') {
      let oneFactorial = 1n;
      let itemNum = item.slice(0, -1);

      for ( ; itemNum >= 1; itemNum--) {
        oneFactorial *= BigInt(itemNum);
      }
      newArrNum.push(oneFactorial);
    }
  });

  newArrNum.forEach(item => {
    mulNum = mulNum * item;
  })
  
  mulNum += ''
  
  while (mulNum.charAt(mulNum.length - 1) === '0') {
    mulNum = mulNum.slice(0, -1)
    result++
  }
  
  return result;
}

