// Finding the total shopping bill

var getTotalBill = function (items) {
	var total = 0;

	items.forEach(function (item) {
		total += item.cost * item.numberBought;
	});

	return total;
};

var items = [
	{ cost: 1.99, numberBought: 2 },
	{ cost: 4.95, numberBought: 1 },
	{ cost: 2.50, numberBought: 5 },
	{ cost: 9.87, numberBought: 2 },
	// Add an extra item to the shopping trip
	{ cost: 3.75, numberBought: 4 }
];

// Calculate and log the total cost
console.log("The total cost is $" + getTotalBill(items));


/* Further Adventures
 *
 * 1) Add an extra item to the shopping trip.
 *
 * 2) Change the function so that forEach iterates
 *    over itemCounts instead of itemCosts.
 *    Can you make it work?
 *
 * 3) Create a single array of objects with
 *    cost and numberBought properties.
 *
 *    items = [ { cost: 1.99, numberBought: 2 },
 *              { cost: 4.95, numberBought: 1 } ];
 *
 * 4) Update getTotalBill to accept a single array
 *    of items.
 *
 */