module.exports = function zeros(expression) {
  let arrNum = expression.split('*');
  let newArrNum = [];
  let mulNum = 1;
  let result = 0;

  arrNum.forEach(item => {
    if (item.lastIndexOf('!!')) {
      let twoFactorial = 1;
      let itemNum = item.slice(0, -2);
      
      for ( ; itemNum >= 1; itemNum -= 2) {
        twoFactorial *= itemNum;
        if (twoFactorial % 10 === 0) {
          twoFactorial /= 10
          result++
        }
      }
      newArrNum.push(twoFactorial);
    };

    if (item.lastIndexOf('!')) {
      let oneFactorial = 1;
      let itemNum = item.slice(0, -1);

      for ( ; itemNum >= 1; itemNum--) {
        oneFactorial *= itemNum;
        if (oneFactorial % 10 === 0) {
          oneFactorial /= 10
          result++
        }
      }
      newArrNum.push(oneFactorial);
    }
  });
 
  newArrNum.forEach(item => {
    mulNum = mulNum * item;
    if (mulNum % 10 === 0) {
      mulNum /= 10
      result++
    }
  })

  return (result);
}


