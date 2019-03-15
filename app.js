
'use-strict';

var hours =  ['6am','7am','8am','9am','10am','11am','12am','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm','Daily Location Total'];
var data = [];
var table = document.getElementById('cookieStats');

/* Constructor function to calculate cookie sales */
function CookiesLocation(minCustomersPerHour, maxCustomersPerHour, avgCookieSalesPerCustomer) {
  this.minCustomersPerHour = minCustomersPerHour;
  this.maxCustomersPerHour = maxCustomersPerHour;
  this.avgCookieSalesPerCustomer = avgCookieSalesPerCustomer;

  this.customersPerHour = function(){
    var min = Math.ceil(this.minCustomersPerHour);
    var max = Math.floor(this.maxCustomersPerHour);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  },

  this.cookiesSoldPerHour = function(){
    return Math.round(this.customersPerHour() * this.avgCookieSalesPerCustomer,0);
  },

  this.totalCookiesSoldInADay = 0,

  this.output = function(){
    var locationDetails = [];
    var totalCookiesPerDay = 0;

    for (var i=1; i < hours.length; i++){
      var cookies = this.cookiesSoldPerHour();
      locationDetails[i] = cookies;
      totalCookiesPerDay = totalCookiesPerDay + cookies;
    }
    this.totalCookiesSoldInADay = totalCookiesPerDay;
    locationDetails[i] = this.totalCookiesSoldInADay;
    return locationDetails;
  };
}

function createHeader() {
  var tempData = [];
  for(var i=0; i<hours.length; i++) {
    tempData = tempData + '<th>' + hours[i] + '</th>';
  }
  var newRow = document.createElement('tr');
  newRow.innerHTML = '<th>' + tempData + '</th>';
  table.appendChild(newRow);
}

function createRow(array) {
  var tempData =[];
  for(var i=0; i<array.length; i++) {
    tempData = tempData + '<td>' + array[i] + '</td>';
  }
  data.push(tempData);
}

function render(tableRow) {
  for(var j=0; j<tableRow.length;j++){
    var newRow = document.createElement('tr');
    newRow.innerHTML = tableRow[j];
    table.appendChild(newRow);
  }
}

function createFooter() {
  var tempData = [];
  var cookies = 0;
  for(var i=1; i<hours.length+1; i++) {
    cookies = seaTacCookieDetails[i] + firstAndPikeCookieDetails[i] + seattleCenterCookieDetails[i]+capitolHillCookieDetails[i]+alkiCookieDetails[i];
    tempData = tempData + '<td>' + cookies + '</td>';
  }
  var newRow = document.createElement('tfoot');
  newRow.innerHTML = '<td>' + 'Totals' + tempData + '</td>';
  table.appendChild(newRow);
}

// Create Header Row
createHeader();

//Create Pike Place Market stats
var firstAndPike = new CookiesLocation(23,65,6.3);
var firstAndPikeCookieDetails = firstAndPike.output();
firstAndPikeCookieDetails[0]='1st and Pike';
data = [];
createRow(firstAndPikeCookieDetails);
render(data);

//Create SeaTac Airport stats
var seaTacAirport = new CookiesLocation(3,24,1.2);
var seaTacCookieDetails = seaTacAirport.output();
seaTacCookieDetails[0]='SeaTac Airport';
data = [];
createRow(seaTacCookieDetails);
render(data);

//Create Seattle Center stats
var seattleCenter = new CookiesLocation(11,38,3.7);
var seattleCenterCookieDetails = seattleCenter.output();
seattleCenterCookieDetails[0]='Seattle Center';
data = [];
createRow(seattleCenterCookieDetails);
render(data);

//Create Capitol Hill stats
var capitolHill = new CookiesLocation(20,38,2.3);
var capitolHillCookieDetails = capitolHill.output();
capitolHillCookieDetails[0]='Capitol Hill';
data = [];
createRow(capitolHillCookieDetails);
render(data);

//Create Alki stats
var alki = new CookiesLocation(20,38,2.3);
var alkiCookieDetails = alki.output();
alkiCookieDetails[0]='Alki';
data = [];
createRow(alkiCookieDetails);
render(data);

//Write Total as Footer
createFooter();
