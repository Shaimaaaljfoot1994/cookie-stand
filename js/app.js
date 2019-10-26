'use strict';
var footerRow ;

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
function Cookieshop(shoplocation, min, max, avg) {
    this.shoplocation = shoplocation;
    this.min = min;
    this.max = max;
    this.avg = avg;
    this.total = 0;
    this.numberofcookiesperhour = [];
    // this.calculatenumberofcookies ();

};
var locationsnames = [];


locationsnames.push(new Cookieshop('seattle', 23, 65, 6.3));
locationsnames.push(new Cookieshop('tokyo', 3, 24, 1.2));
locationsnames.push(new Cookieshop('dubai', 11, 38, 3.7));
locationsnames.push(new Cookieshop('paris', 20, 38, 2.3));
locationsnames.push(new Cookieshop('lima', 2, 16, 4.6));

Cookieshop.prototype.randomInRange = function () {
    var range = this.max - this.min;
    var rand = (Math.random() * range) + this.min;
    var randomnumber = Math.ceil(rand);
    return randomnumber;
};
Cookieshop.prototype.calculatenumberofcookies = function () {
    for (var i = 0; i < hours.length; i++) {
        var result1 = this.randomInRange(this.min, this.max);
        var cookiespurchased1 = Math.ceil(this.avg * result1);
        this.numberofcookiesperhour.push(cookiespurchased1);
        this.total += cookiespurchased1;
    }
}
for (var i = 0; i < locationsnames.length; i++) {
    console.log('totaldata', locationsnames[i]);
    locationsnames[i].calculatenumberofcookies();
}

var contentArea = document.getElementById('content-area');
var cookietable = document.createElement('table');
contentArea.appendChild(cookietable);
function renderHeaderRow(table) {

    var headerRow = document.createElement('tr');
    table.appendChild(headerRow);
    var Header = document.createElement('th');
    headerRow.appendChild(Header);
    Header.textContent = '     ';
    for (var i = 0; i < hours.length; i++) {
        var hoursstring = document.createElement('th');
        headerRow.appendChild(hoursstring);
        hoursstring.textContent = hours[i];
    }
    var totalcookiesperlocation = document.createElement('th');
    headerRow.appendChild(totalcookiesperlocation);
    totalcookiesperlocation.textContent = 'Daily Location Total';
}
renderHeaderRow(cookietable);
Cookieshop.prototype.renderDataRows = function () {
    var dataRow = document.createElement('tr');
    cookietable.appendChild(dataRow);

    var shoplocationNames = document.createElement('th');
    dataRow.appendChild(shoplocationNames);
    shoplocationNames.textContent = this.shoplocation;

    for (var i = 0; i < this.numberofcookiesperhour.length; i++) {

        var cookiesperhour = document.createElement('td');
        dataRow.appendChild(cookiesperhour);
        cookiesperhour.textContent = this.numberofcookiesperhour[i];
    }
    var totalcookies = document.createElement('td');
    dataRow.appendChild(totalcookies);
    totalcookies.textContent = this.total;
};
for (var i = 0; i < locationsnames.length; i++) {

    this.locationsnames[i].renderDataRows();

}

function renderfooterRows(table) {
     footerRow = document.createElement('tr');
    table.appendChild(footerRow);
    //store a footer row in globle variable for later
    var totalsperhour = document.createElement('td');
    footerRow.appendChild(totalsperhour);
    totalsperhour.textContent = 'Totals';
    var totaloftotal = 0;
    for (var hourIndex = 0; hourIndex < hours.length; hourIndex++) {
        var td = document.createElement('td');

        footerRow.appendChild(td);

        var totalHourSales = 0;
        for (var shopIndex = 0; shopIndex < locationsnames.length; shopIndex++) {
            var shop = locationsnames[shopIndex];
            totalHourSales += shop.numberofcookiesperhour[hourIndex];
        }
        td.textContent = totalHourSales;

        totaloftotal += totalHourSales;
    }
    var td = document.createElement('td');

    footerRow.appendChild(td);

    td.textContent = totaloftotal;
}
renderfooterRows(cookietable);


function submitHandler(event) {
    event.preventDefault();
    var shoplocation = event.target.shoplocation.value;
    console.log('shoplocation', shoplocation);
    var min = parseInt(event.target.min.value);
    console.log('min', min);
    var max =parseInt (event.target.max.value);
    console.log('max', max);
    var avg = parseFloat(event.target.avg.value);
    console.log('avg', avg);
    var newlocation = new Cookieshop(shoplocation, min, max, avg);
    console.log('new location', newlocation)
    newlocation.calculatenumberofcookies();
    locationsnames.push(newlocation);
//    cookietable.removeChild(footerRow);
    newlocation.renderDataRows();
    renderfooterRows(cookietable);
};
var newcookieform = document.getElementById("Addcookieshoplocation");
newcookieform.addEventListener('submit', submitHandler);