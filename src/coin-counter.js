// function coinCounter(amount) {
//   if (amount % .25 == 0) {
//     quarters = (amount / .25)
//     return ("{quarters} Quarters are needed.")
//   }
//   else {
//     quarters = (Math.floor(amount / .25))
//     if ( )
//   }
// }

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

// const coinCounter = (amount) => {
//   // if (amount >= .25) {
//   const altAmount = amount * 100
//   const quarters = Math.floor(altAmount / 25)
//   const dimesRemainder = altAmount % 25
//   console.log(dimesRemainder)
//   return (dimesRemainder) => {
//     const dimes = Math.floor(dimesRemainder / 10)
//     console.log(dimes)
//     const nicklesRemainder = dimesRemainder % 10
//     return (nicklesRemainder) => {
//       const nickles = Math.floor(nicklesRemainder / 5)
//       const pennies = nicklesRemainder % 5
//       finalString = `It will take ${ quarters } quarters, ${ dimes } dimes, ${ nickles } nickles, and ${ pennies } pennies to turn ${ amount } into change.`
//       return finalString
//     }
//   }
// }


// if (amount >= .10) {
//   dimes = Math.floor(amount / .10)
//   return coinCounter(amount - (dimes * .10))
//   // console.log(amount - (dimes * .10))
// } else {
//   if (amount >= .05 && !dimes) {
//     dimes = 0
//     nickles = Math.floor(amount / .05)
//     return coinCounter(amount - (nickles * .05))
//   } else if (amount >= .05 && dimes) {
//     nickles = Math.floor(amount / .05)
//     return coinCounter(amount - (nickles * .05))
//   } else {
//     if (amount < .05 && !dimes && !nickles) {
//       dimes = 0
//       nickles = 0
//       pennies = Math.floor(amount / .01)
//       return `${ quarters } quarters, ${ dimes } dimes, ${ nickles } nickles, and ${ pennies } pennies are needed to convert your amount to coins.`
//     }
//     else if (amount < .05 && !dimes) {
//       dimes = 0
//       pennies = Math.floor(amount / .01)
//       return `${ quarters } quarters, ${ dimes } dimes, ${ nickles } nickles, and ${ pennies } pennies are needed to convert your amount to coins.`
//     }
//     else if (amount < .05 && !nickles) {
//       nickles = 0
//       pennies = Math.floor(amount / .01)
//       return `${ quarters } quarters, ${ dimes } dimes, ${ nickles } nickles, and ${ pennies } pennies are needed to convert your amount to coins.`
//     }
//     else {
//       pennies = Math.floor(amount / .01)
//       return `${ quarters } quarters, ${ dimes } dimes, ${ nickles } nickles, and ${ pennies } pennies are needed to convert your amount to coins.`
//     }
//   }
// }
// }
// }

// const coinCounter = (amount) => {
//   if (amount < .05 && amount > 0) {
//     pennies = Math.floor(amount / .01)
//     return
//   }
// }

const total = recursiveCounter(583)

console.log(total)