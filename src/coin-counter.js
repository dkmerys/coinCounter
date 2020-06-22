const recursiveCounter = (totalAmountInPennies, coinChangeArr = [], counter = 0) => {
  const coins = [25, 10, 5, 1];
  if (counter >= 4) {
    return `It would take ${coinChangeArr[0]} quarters, ${coinChangeArr[1]} dimes, ${coinChangeArr[2]} nickles, and ${coinChangeArr[3]} pennies to form your change.`

  } else {
    const amount = Math.floor(totalAmountInPennies / coins[counter]);
    const remainder = totalAmountInPennies - (amount * coins[counter]);
    const newCoinArr = [...coinChangeArr, amount];
    return recursiveCounter(remainder, newCoinArr, counter + 1);
  }
}

const curriedCounter = (amount) => {
  return (quarter) => {
    return (dime) => {
      return (nickel) => {
        calcAmount = amount * 100
        quarters = Math.floor(calcAmount / quarter)
        dimeCalcAmount = calcAmount % quarter
        dimes = Math.floor(dimeCalcAmount / dime)
        nickelCalcAmount = dimeCalcAmount % dime
        nickels = Math.floor(nickelCalcAmount / nickel)
        pennies = nickelCalcAmount % nickel
        return `It will take ${quarters} quarters, ${dimes} dimes, ${nickels} nickels, and ${pennies} pennies to turn ${amount} into change.`
      }
    }
  }
}


const total = curriedCounter(5.83)(25)(10)(5)
const total2 = recursiveCounter(583)
console.log(total)
console.log(total2)