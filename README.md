# Coin Counter - React Week 1

## by Dan Merys & Ethan Firpo (6/22/2020)

## Description

This site is built to practice using a functional programming schema, including variable immutability, function currying, writing pure functions, declarative programming, and recursion. It takes an inputted dollar amount and outputs the smallest number of coins, in what denominations, is needed to add up to that amount.
## Technology

#### JavaScript

## Specs

| Behavior | Input | Output|
|-------|-------|-------|
|Program will accept input in form of a currency amount|$5.83|$5.83|
|Program will count how many quarters can "fit" in given amount | $5.83| 23|
|Program will subtract that amount in quarters from initial input| $5.83 - $5.75| $0.08|
|Program will count how many dimes can "fit" in the remaining amount after previous step| $0.08| 0|
|Program will subtract that amount in dimes from new remainder| $0.08 - $0.00| $0.08|
|Program will count how many nickles can "fit" in the remaining amount from previous step| $.08| 1|
|Program will subract that amount in nickles from new remainder | $0.08 - $0.05| $0.03|
|Program will count how many pennies can "fit" in the remaining amount from previous step| $.03| 3|
|Program will output how many quarters, dimes, nickles, and pennies "fit" in initial input| $5.83| Quarters: 23, Dimes: 0, Nickles: 1, Pennies:3|

## Legal

#### MIT License

### Copyright (c) 2020 Daniel Merys and Ethan Alexander Firpo

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.  

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.