//*************************
// Problem 1:
// Barrels O' RUM

var barrels = function(small, large, total){
  var smallBarrel = 60;
  var largeBarrel = (totalCost - (small * smallBarrel)) / large;

  return largeBarrel;
};

//*************************
// Problem 2:
// Sailing the Seas

var shipFuelCost = function(fuelPrice, milesPerGallon){
  
  var earthMiles = 24901
  var fuelCost =((earthMiles / milesPerGallon) * fuelPrice) 

  return fuelCost;
};

//*************************
// Problem 3:
// GROG

const totalCostCoFruitJuice = costCoGallons * (costCoPurity/100);
//   - Total of Kirkland pure fruit juice:
//     - percentage pure fruit juice * number of gallons
    const totalKirklandsFruitJuice = kirklandsGallons * (kirklandsPurity/100);
//   - Add Costco pure fruit juice total + Kirkland pure fruit juice total
    const totalCombinedFruitJuice = totalCostCoFruitJuice + totalKirklandsFruitJuice;
// - Find the total amount of juice (gal):
//   - Total of Costco juice + Total of Kirkland Juice
    const totalJuice = costCoGallons + kirklandsGallons;
// - Calculate (total pure fruit juice) / (total juice)
    return totalCombinedFruitJuice/totalJuice;

};

//DO NOT EDIT BELOW THIS LINE//
module.exports = {
  barrels: barrels,
  shipFuelCost: shipFuelCost,
  calcFruitJuice: calcFruitJuice
};
