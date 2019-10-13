'use strict';
var Seattle = {
    min: 23, max: 65, avg: 6.3, randomInRange: function (min, max) {
        var range = max - min;
        var rand = (Math.random() * range) + min;
        var randomnumber = Math.ceil(rand);
        return randomnumber;
    }
};
var total = 0;
var array1 = [];
for (var i = 6; i < 12; i++) {

    var result1 = Seattle.randomInRange(Seattle.min, Seattle.max);
    var cookiespurchased1 = Seattle.avg * result1;
    var cookiespurchased01 = Math.ceil(cookiespurchased1);

    var Shaimaa = i + 'am :' + cookiespurchased01 + ' cookies .';
    array1.push(Shaimaa);
    total += cookiespurchased01;
}


if (i = 12) {
    var result1 = Seattle.randomInRange(Seattle.min, Seattle.max);
    var cookiespurchased1 = Seattle.avg * result1;
    var cookiespurchased01 = Math.ceil(cookiespurchased1);
    var Shaimaa = i + 'pm :' + cookiespurchased01 + ' cookies .';
    array1.push(Shaimaa);
    total += cookiespurchased01;

}
for (var i = 1; i < 8; i++) {
    var result1 = Seattle.randomInRange(Seattle.min, Seattle.max);
    var cookiespurchased1 = Seattle.avg * result1;
    var cookiespurchased01 = Math.ceil(cookiespurchased1);
    var Shaimaa = i + 'pm :' + cookiespurchased01 + ' cookies .';
    array1.push(Shaimaa);
    total += cookiespurchased01;

}
var totall = 'Total: ' + total + ' cookies .';
array1.push(totall);
console.log('Seattle', array1);

var total2 = 0;
var Tokoy = {
    min: 3, max: 24, avg: 1.2, randomInRange: function (min, max) {
        var range = max - min;
        var rand = (Math.random() * range) + min;
        var randomnumber = Math.ceil(rand);
        return randomnumber;
    }
};
var array2 = [];
for (var i = 6; i < 12; i++) {

    var result1 = Tokoy.randomInRange(Tokoy.min, Tokoy.max);
    var cookiespurchased1 = Tokoy.avg * result1;
    var cookiespurchased01 = Math.ceil(cookiespurchased1);
    var Shaimaa = i + 'am :' + cookiespurchased01 + ' cookies .';
    array2.push(Shaimaa);
    total2 += cookiespurchased01;
}
if (i = 12) {
    var result1 = Tokoy.randomInRange(Tokoy.min, Tokoy.max);
    var cookiespurchased1 = Tokoy.avg * result1;
    var cookiespurchased01 = Math.ceil(cookiespurchased1);
    var Shaimaa = i + 'pm :' + cookiespurchased01 + ' cookies .';
    array2.push(Shaimaa);
    total2 += cookiespurchased01;
}


for (var i = 1; i < 8; i++) {
    var result1 = Tokoy.randomInRange(Tokoy.min, Tokoy.max);
    var cookiespurchased1 = Tokoy.avg * result1;
    var cookiespurchased01 = Math.ceil(cookiespurchased1);
    var Shaimaa = i + 'pm :' + cookiespurchased01 + ' cookies .';
    array2.push(Shaimaa);
    total2 += cookiespurchased01;

}
var totalll = 'Total: ' + total2 + ' cookies .';
array2.push(totalll);
console.log('Tokoy', array2);


var total3 = 0;
var Dubai = {
    min: 11, max: 38, avg: 3.7, randomInRange: function (min, max) {
        var range = max - min;
        var rand = (Math.random() * range) + min;
        var randomnumber = Math.ceil(rand);
        return randomnumber;
    }
};
var array3 = [];
for (var i = 6; i < 12; i++) {

    var result1 = Dubai.randomInRange(Dubai.min, Dubai.max);
    var cookiespurchased1 = Dubai.avg * result1;
    var cookiespurchased01 = Math.ceil(cookiespurchased1);
    var Shaimaa= i + 'am :' + cookiespurchased01 + ' cookies .';
    array3.push(Shaimaa);
    total3=+cookiespurchased01;

}
if (i = 12) {
    var result1 = Dubai.randomInRange(Dubai.min, Dubai.max);
    var cookiespurchased1 = Dubai.avg * result1;
    var cookiespurchased01 = Math.ceil(cookiespurchased1);
    var Shaimaa = i + 'pm :' + cookiespurchased01 + ' cookies .';
    array3.push(Shaimaa);
    total3=+cookiespurchased01;

}

for (var i = 1; i < 8; i++) {
    var result1 = Dubai.randomInRange(Dubai.min, Dubai.max);
    var cookiespurchased1 = Dubai.avg * result1;
    var cookiespurchased01 = Math.ceil(cookiespurchased1);
    var Shaimaa = i + 'pm :' + cookiespurchased01 + ' cookies .';
    array3.push(Shaimaa);
    total3=+cookiespurchased01;
}
var totallll = 'Total: ' + total3 + ' cookies .';
array3.push(totallll);
 console.log('Dubai', array3);

var total4=0
var Paris = {
    min: 20, max: 38, avg: 2.3, randomInRange: function (min, max) {
        var range = max - min;
        var rand = (Math.random() * range) + min;
        var randomnumber = Math.ceil(rand);
        return randomnumber;
    }
};
var array4 = [];
for (var i = 6; i < 12; i++) {

    var result1 = Paris.randomInRange(Paris.min, Paris.max);
    var cookiespurchased1 = Paris.avg * result1;
    var cookiespurchased01 = Math.ceil(cookiespurchased1);
    var Shaimaa = i + 'am :' + cookiespurchased01 + ' cookies .';
    array4.push(Shaimaa);
    total4=+cookiespurchased01 ;
}
if (i = 12) {
    var result1 = Paris.randomInRange(Paris.min, Paris.max);
    var cookiespurchased1 = Paris.avg * result1;
    var cookiespurchased01 = Math.ceil(cookiespurchased1);
    var Shaimaa = i + 'pm :' + cookiespurchased01 + ' cookies .';
    array4.push(Shaimaa);
    total4=+cookiespurchased01 ;


}

for (var i = 1; i < 8; i++) {
    var result1 = Paris.randomInRange(Paris.min, Paris.max);
    var cookiespurchased1 = Paris.avg * result1;
    var cookiespurchased01 = Math.ceil(cookiespurchased1);
    var Shaimaa = i + 'pm :' + cookiespurchased01 + ' cookies .';
    array4.push(Shaimaa);
    total4=+cookiespurchased01 ;

}
var totalllll = 'Total: ' + total4 + ' cookies .';
array4.push(totalllll); 
console.log('Paris', array4);

var total5=0
var Lima = {
    min: 2, max: 16, avg: 4.6, randomInRange: function (min, max) {
        var range = max - min;
        var rand = (Math.random() * range) + min;
        var randomnumber = Math.ceil(rand);
        return randomnumber;
    }
};
var array5 = [];
for (var i = 6; i < 12; i++) {

    var result1 = Lima.randomInRange(Lima.min, Lima.max);
    var cookiespurchased1 = Lima.avg * result1;
    var cookiespurchased01 = Math.ceil(cookiespurchased1);
    var Shaimaa = i + 'am :' + cookiespurchased01 + ' cookies .';
    array5.push(Shaimaa);
    total5=+cookiespurchased01;
}
if (i = 12) {
    var result1 = Lima.randomInRange(Lima.min, Lima.max);
    var cookiespurchased1 = Lima.avg * result1;
    var cookiespurchased01 = Math.ceil(cookiespurchased1);
    var Shaimaa = i + 'pm :' + cookiespurchased01 + ' cookies .';
    array5.push(Shaimaa);
    total5=+cookiespurchased01;
}

for (var i = 1; i < 8; i++) {
    var result1 = Lima.randomInRange(Lima.min, Lima.max);
    var cookiespurchased1 = Lima.avg * result1;
    var cookiespurchased01 = Math.ceil(cookiespurchased1);
    var Shaimaa = i + 'pm :' + cookiespurchased01 + ' cookies .';
    array5.push(Shaimaa);
    total5=+cookiespurchased01;
}
var totallllll = 'Total: ' + total5 + ' cookies .';
array5.push(totallllll); 
console.log('Lima', array5);








var paragraph = document.createElement('p');

paragraph.textContent = 'Seattle';

var contentArea = document.getElementById('content-area');

contentArea.appendChild(paragraph);

var ul = document.createElement('ul');

contentArea.appendChild(ul);

// var li = document.createElement('li');
for (var i = 0; i < 15; i++) {
    var li = document.createElement('li');
    li.textContent = array1[i];
    ul.appendChild(li);
};

var paragraph = document.createElement('p');

paragraph.textContent = 'Tokyo';

var contentArea = document.getElementById('content-area');

contentArea.appendChild(paragraph);

var ul = document.createElement('ul');

contentArea.appendChild(ul);

// var li = document.createElement('li');
for (var i = 0; i < 15; i++) {
    var li = document.createElement('li');
    li.textContent = array2[i];
    ul.appendChild(li);
};
var paragraph = document.createElement('p');

paragraph.textContent = 'Dubai';

var contentArea = document.getElementById('content-area');

contentArea.appendChild(paragraph);

var ul = document.createElement('ul');

contentArea.appendChild(ul);

// var li = document.createElement('li');
for (var i = 0; i < 15; i++) {
    var li = document.createElement('li');
    li.textContent = array3[i];
    ul.appendChild(li);
};
var paragraph = document.createElement('p');

paragraph.textContent = 'Paris';

var contentArea = document.getElementById('content-area');

contentArea.appendChild(paragraph);

var ul = document.createElement('ul');

contentArea.appendChild(ul);

// var li = document.createElement('li');
for (var i = 0; i < 15; i++) {
    var li = document.createElement('li');
    li.textContent = array4[i];
    ul.appendChild(li);
};
var paragraph = document.createElement('p');

paragraph.textContent = 'Lima';

var contentArea = document.getElementById('content-area');

contentArea.appendChild(paragraph);

var ul = document.createElement('ul');

contentArea.appendChild(ul);

// var li = document.createElement('li');
for (var i = 0; i < 15; i++) {
    var li = document.createElement('li');
    li.textContent = array5[i];
    ul.appendChild(li);
};

