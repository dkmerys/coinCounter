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

const coinCounter = (amount) => {
  if (amount >= .25) {
    quarters = Math.floor(amount / .25)
    return coinCounter(amount % .25)
    // console.log(amount % .25)
  } else {
    if (amount >= .10) {
      dimes = Math.floor(amount / .10)
      return coinCounter(amount - (dimes * .10))
      // console.log(amount - (dimes * .10))
    } else {
      if (amount >= .05 && !dimes) {
        dimes = 0
        nickles = Math.floor(amount / .05)
        return coinCounter(amount - (nickles * .05))
      } else if (amount >= .05 && dimes) {
        nickles = Math.floor(amount / .05)
        return coinCounter(amount - (nickles * .05))
      } else {
        if (amount < .05 && !dimes && !nickles) {
          dimes = 0
          nickles = 0
          pennies = Math.floor(amount / .01)
          return `${quarters} quarters, ${dimes} dimes, ${nickles} nickles, and ${pennies} pennies are needed to convert your amount to coins.`
        }
        else if (amount < .05 && !dimes) {
          dimes = 0
          pennies = Math.floor(amount / .01)
          return `${quarters} quarters, ${dimes} dimes, ${nickles} nickles, and ${pennies} pennies are needed to convert your amount to coins.`
        }
        else if (amount < .05 && !nickles) {
          nickles = 0
          pennies = Math.floor(amount / .01)
          return `${quarters} quarters, ${dimes} dimes, ${nickles} nickles, and ${pennies} pennies are needed to convert your amount to coins.`
        }
        else {
          pennies = Math.floor(amount / .01)
          return `${quarters} quarters, ${dimes} dimes, ${nickles} nickles, and ${pennies} pennies are needed to convert your amount to coins.`
        }
      }
    }
  }
}

console.log(coinCounter(5.83))