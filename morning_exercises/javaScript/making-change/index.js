// General Assembly, WDI (Web Development Immersive) Remote, Cohort 02 (R2D2)
// Copyright (C) 2016 Matt Brendzel under the GNU General Public License.
// See LICENSE for details.
"use strict";
/// DO NOT EDIT ABOVE THIS LINE ///

var makeChange = function(price, payment) {
  
  // Your Code Here
  // Given a price and payment amount
  // Calculate de change
  let change = payment - price;
  if (change<=0){
    return [0,0,0,0];
  } eslse
  //return an array like[Q, D, N, P]
  //calculatte quarters
  const quuters = Math.floor(change / 25);
  change = change % 25
  //calculate dimes
  const quuters = Math.floor(change / 10);
  change = change % 10
  //calculates nickels
  const quuters = Math.floor(change / 5);
  change = change % 5
  //calculate pennis
  const quuters = Math.floor(change);
  

  // if price is more than payment return[0,0,0]
  
};

