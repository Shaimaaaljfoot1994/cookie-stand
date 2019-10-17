'use strict';

var clock = ['6 am','7 am','8 am','9 am','10 am','11 am','12 pm','1 pm','2 pm','3 pm','4 pm','5 pm','6 pm','7 pm'];//14

var con = document.getElementById('content-area');

var row; // hold on to footer row because we may delete and replace later

var table = document.createElement('table');
con.appendChild(table);
table.setAttribute('cellspacing','15px');

function addElement(tagName, con, text) {
  var element = document.createElement(tagName);
  con.appendChild(element);

  if (text) {
    element.textContent = text;
  }

  return element;
}

function Shop(location,min,max,avg){
  this.location = location;
  this.min = min;
  this.max = max;
  this.avgcookie = avg;
  this.cookNumArr = [];
  this.totalSale = 0;

  this.cook();
}

Shop.prototype.avgNumCus = function() {
  var rang = this.max - this.min;
  var rand = Math.random() * rang + this.min;
  return Math.ceil(rand);
};

Shop.prototype.cook = function() {
  for (var i = 0; i < clock.length ; i++) {  
    var cookEachHour = Math.ceil(this.avgNumCus() * this.avgcookie);
    // console.log(cookEachHour);
    this.cookNumArr.push( cookEachHour );    
    this.totalSale += cookEachHour;
  }
  console.log(this.cookNumArr);
};

Shop.prototype.renderRow = function(table){

  var supermarketRow = addElement('tr',table);
  addElement('td',supermarketRow, this.location);

  for (var i = 0; i < this.cookNumArr.length; i++) {
    var currentHourlySales = this.cookNumArr[i];
    addElement('td', supermarketRow, currentHourlySales);
  }

  addElement('td', supermarketRow, this.totalSale);
};

function uprow() {

  // access to all definitions in outside scopes , global 
  var hourRow = addElement('tr',table);

  addElement('th',hourRow);

  for(var i = 0; i < clock.length; i++) {
    addElement('th', hourRow, clock[i]);
  }

  addElement('th', hourRow, 'Daily Location Totals');
}

// stand-alone function
function createrow() {

  console.log('row');
  
  var tr = document.createElement('tr');

  row = tr;
  
  table.appendChild(tr);

  var td = document.createElement('td');
  
  tr.appendChild(td);
  
  td.textContent = 'Totals';

  var megaTotal = 0;

  // loop through totals
  for (var clockindex = 0; clockindex < clock.length; clockindex++) {
    
    td = document.createElement('td');
    
    tr.appendChild(td);

    var totalclockales = 0; // a number, the sum of all the sales for that hour for each shop

    for (var supermarketindex = 0; supermarketindex < shops.length; supermarketindex++) {
      var shop = shops[supermarketindex];
      totalclockales += shop.cookNumArr[clockindex];
    }

    td.textContent = totalclockales;

    megaTotal += totalclockales;
  }

  td = document.createElement('td');

  tr.appendChild(td);

  td.textContent = megaTotal;
}


var shops = [];
shops.push(new Shop('seattle', 23, 65, 6.3));
shops.push(new Shop('tokyo', 3, 24, 1.2));
shops.push(new Shop('dubai', 11, 38, 3.7));
shops.push(new Shop('paris', 20, 38, 2.3));
shops.push(new Shop('lima', 2, 16, 4.6));


uprow();

for(var i = 0; i < shops.length; i++) {
  var currentShop = shops[i];
  currentShop.renderRow(table);
}

createrow();

function submitHandler(event) {
  event.preventDefault();
  
  var location = event.target.location.value;
  var min = parseInt(event.target.min.value);
  var max = parseInt(event.target.max.value);
  var avarg = parseFloat(event.target.avarg.value);

  var newShop = new Shop(location, min, max, avarg);

  shops.push(newShop);

  table.removeChild(row);

  newShop.renderRow(table);

  createrow();

}
var form = document.getElementById('addShopForm');
form.addEventListener('submit', submitHandler);
