
function getReceipt() {
	var text1 = "<h3>Your Ordered:</h3>";
	var runningTotal = 0;
	var sizeTotal = 0;
	var sizeArray = document.getElementsByClassName("size");
	for (var i = 0; i < sizeArray.length; i++) {
		if (sizeArray[i].checked) {
			var selectedSize = sizeArray[i].value;
		}
	}
	if (selectedSize === "Personal Pizza") {
		sizeTotal = 6;
	} else if (selectedSize === "Medium Pizza") {
		sizeTotal = 10;
	} else if (selectedSize === "Large Pizza") {
		sizeTotal = 14;
	} else if (selectedSize === "Extra Large Pizza") {
		sizeTotal = 16;
	}
	text1 = text1+selectedSize+"<br>................................................$"+sizeTotal+".00<br>";
	runningTotal = sizeTotal;
	console.log(selectedSize+" = $"+sizeTotal+".00");
	console.log("size text1: "+text1);
	console.log("subtotal: $"+runningTotal+".00");
	getSauce(runningTotal,text1);
};

function getSauce(runningTotal,text1) {
	var sauceTotal = 0;
	var selectedSauce = [];
	var sauceArray = document.getElementsByClassName("sauce");
	for (var j = 0; j < sauceArray.length; j++) {
		if (sauceArray[j].checked) {
			var selectedSauce = sauceArray[j].value;
			text1 = text1+selectedSauce+"<br>................................................$"+sauceTotal+".00<br>";
		}
	}
	runningTotal = (runningTotal + sauceTotal);
	console.log("sauce text1: "+text1);
	console.log("Purchase Total: "+"$"+runningTotal+".00");
	getCrust(runningTotal,text1);
};

function getCrust(runningTotal,text1) {
	var crustTotal = 0;
	var selectedCrust = [];
	var crustArray = document.getElementsByClassName("crust");
	for (var k = 0; k < crustArray.length; k++) {
		if (crustArray[k].checked) {
			selectedCrust.push(crustArray[k].value);
			console.log("selected crust item: ("+crustArray[k].value+")");
		}
	}
	var crustType = selectedCrust;
	if (crustType == "Cheese Stuffed Crust") {
		crustTotal = (crustTotal + 3);
		console.log("+ $3.00 for Stuffed Crust");
	} else {
		crustTotal = 0;
		console.log("No additional charge for this crust");
	}
	text1 = text1+selectedCrust+"<br>................................................$"+crustTotal+".00<br>";
	runningTotal = (runningTotal + crustTotal);
	console.log("crust text1: "+text1);
	console.log("Purchase Total: "+"$"+runningTotal+".00");
	getCheese(runningTotal,text1);
};

function getCheese(runningTotal,text1) {
	var cheeseTotal = 0;
	var selectedCheese = [];
	var cheeseArray = document.getElementsByClassName("cheese");
	for (var l = 0; l < cheeseArray.length; l++) {
		if (cheeseArray[l].checked) {
			selectedCheese.push(cheeseArray[l].value);
			console.log("selected cheese item: ("+cheeseArray[l].value+")");
		}
	}
	var cheeseType = selectedCheese;
	if (cheeseType == "Extra Cheese") {
		cheeseTotal = (cheeseTotal + 3);
		console.log("+ $3.00 for Extra Cheese");
	} else {
		cheeseTotal = 0;
		console.log("No additional charge for this cheese");
	}
	text1 = text1+selectedCheese+"<br>................................................$"+cheeseTotal+".00<br>";
	runningTotal = (runningTotal + cheeseTotal);
	console.log("cheese text1: "+text1);
	console.log("Purchase Total: "+"$"+runningTotal+".00");
	getMeat(runningTotal,text1);
};

function getMeat(runningTotal,text1) {
	var meatTotal = 0;
	var selectedMeat = [];
	var meatArray = document.getElementsByClassName("meats");
	for (var m = 0; m < meatArray.length; m++) {
		if (meatArray[m].checked) {
			selectedMeat.push(meatArray[m].value);
			console.log("selected meat item: ("+meatArray[m].value+")");
			text1 = text1+meatArray[m].value+"<br>";
		}
	}
	var meatCount = selectedMeat.length;
	if (meatCount > 1) {
		meatTotal = (meatCount - 1);
		text1 = text1+"................................................$"+meatTotal+".00<br>";
	} else {
		meatTotal = 0;
	}
	runningTotal = (runningTotal + meatTotal);
	console.log("total selected meat items: "+meatCount);
	console.log(meatCount+" meat - 1 free meat = "+"$"+meatTotal+".00");
	console.log("meat text1: "+text1);
	console.log("Purchase Total: "+"$"+runningTotal+".00");
	getVeggie(runningTotal,text1);
};

function getVeggie(runningTotal,text1) {
	var veggieTotal = 0;
	var selectedVeggie = [];
	var veggieArray = document.getElementsByClassName("veggies");
	for (var m = 0; m < veggieArray.length; m++) {
		if (veggieArray[m].checked) {
			selectedVeggie.push(veggieArray[m].value);
			console.log("selected veggie items: ("+veggieArray[m].value+")");
			text1 = text1+veggieArray[m].value+"<br>";
		}
	}
	var veggieCount = selectedVeggie.length;
	if (veggieCount > 1) {
		veggieTotal = (veggieCount - 1);
		text1 = text1+"................................................$"+veggieTotal+".00<br>";
	} else {
		veggieTotal = 0;
	}
	runningTotal = (runningTotal + veggieTotal);
	console.log("total selected veggie items: "+veggieCount);
	console.log(veggieCount+" veggie - 1 free veggie = "+"$"+veggieTotal+".00");
	console.log("veggie text1: "+text1);
	console.log("Purchase Total: "+"$"+runningTotal+".00");
	document.getElementById("showText").innerHTML=text1;
	document.getElementById("totalPrice").innerHTML = "<h3>Total: <strong>$"+runningTotal+".00"+"</strong></h3>";
};




