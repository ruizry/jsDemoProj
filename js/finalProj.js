//Major Sections of the Page
var menu = document.getElementById('menu');
var orderComplete = document.getElementById('orderComplete');

//List of names of what was ordered
var sizeSel = document.getElementById('item1');
var meatSel = document.getElementById('item2');
var cheeseSel = document.getElementById('item3');
var crustSel = document.getElementById('item4');
var sauceSel = document.getElementById('item5');
var vegSel = document.getElementById('item6');
var totalDisp = document.getElementById('totalDisp');

//List of values for each section of the receipt
var sizeAmt = document.getElementById('amt1');
var meatAmt = document.getElementById('amt2');
var cheeseAmt = document.getElementById('amt3');
var crustAmt = document.getElementById('amt4');
var sauceAmt = document.getElementById('amt5');
var vegAmt = document.getElementById('amt6');
var totalAmt = document.getElementById('totalAmt');

//Clears the menu and loads the order receipt
function displayReceipt() {
    //Initialize Amount Values
    var sizeVal = 0.00;
    var meatVal = 0.00;
    var cheeseVal = 0.00;
    var crustVal = 0.00;
    var sauceVal = 0.00;
    var vegVal = 0.00;
    var totalVal = 0.00;


    //Calculate Size
    var sizeChecked = $('[name=size]:checked').val();

    if (sizeChecked == "Personal Pizza")
        sizeVal += 6.00;
    else if(sizeChecked == "Medium Pizza")
        sizeVal += 10.00;
    else if(sizeChecked == "Large Pizza")
        sizeVal += 14.00;
    else
        sizeVal += 16.00;

    //Display Size Information
    sizeSel.innerHTML = sizeChecked;
    sizeAmt.innerHTML = "$" + sizeVal.toFixed(2).toString();


    //Calculate Meat Selection
    var meatArray = $("input:checkbox[name=meat]:checked").map(function()
    {
        return $(this).val()
    }).get();

    //Display Meat Selection Information
    if (meatArray.length === 0) {
        meatSel.innerHTML = "No Meat";
        meatAmt.innerHTML = "+$" + meatVal.toFixed(2).toString();
    }
    else {
        meatVal += (meatArray.length - 1);
        meatSel.innerHTML = meatArray;
        meatAmt.innerHTML = "+$" + meatVal.toFixed(2).toString();
    }


    //Calculate Cheese
    var cheeseChecked = $('[name=cheese]:checked').val();

    if (cheeseChecked == "Extra Cheese")
        cheeseVal += 3.00;

    //Display Cheese Information
    cheeseSel.innerHTML = cheeseChecked;
    cheeseAmt.innerHTML = "+$" + cheeseVal.toFixed(2).toString();


    //Calculate Crust
    var crustChecked = $('[name=crust]:checked').val();

    if (crustChecked == "Cheese Stuffed Crust")
        crustVal += 3.00;

    //Display Crust Information
    crustSel.innerHTML = crustChecked;
    crustAmt.innerHTML = "+$" + crustVal.toFixed(2).toString();


    //Display Sauce
    var sauceChecked = $('[name=sauce]:checked').val();

    sauceSel.innerHTML = sauceChecked;
    sauceAmt.innerHTML = "+$" + sauceVal.toFixed(2).toString();


    //Calculate Veg Selection
    var vegArray = $("input:checkbox[name=veg]:checked").map(function()
    {
        return $(this).val()
    }).get();

    //Display Veg Selection Information
    if (vegArray.length === 0) {
        vegSel.innerHTML = "No Veg";
        vegAmt.innerHTML = "+$" + vegVal.toFixed(2).toString();
    }
    else {
        vegVal += (vegArray.length - 1);
        vegSel.innerHTML = vegArray;
        vegAmt.innerHTML = "+$" + vegVal.toFixed(2).toString();
    }

    //Calculate Total
    totalVal = sizeVal + meatVal + cheeseVal + crustVal + sauceVal + vegVal;
    //Display Total
    totalDisp.innerHTML = "TOTAL PRICE:";
    totalAmt.innerHTML = "$" + totalVal.toFixed(2).toString();

    //Remove Menu element and load Receipt Eelement
    menu.style.display = "none";
    orderComplete.style.display = "block";
}

//Clears receipt and reloads the menu
function orderAgain() {
    menu.style.display = "block";
    orderComplete.style.display = "none";
}