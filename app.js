
'use-strict';

var hours =  ['','6am','7am','8am','9am','10am','11am','12am','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm','Daily Location Total'];
var data = [];
var table = document.getElementById('cookieStats');

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

  this.output = function(hours){
    var locationDetails = [];
    var totalCookiesPerDay = 0;

    for (var i=1; i < hours.length - 1; i++){
      var cookies = this.cookiesSoldPerHour();
      locationDetails[i] = [`${cookies} cookies`];
      totalCookiesPerDay = totalCookiesPerDay + cookies;
    }
    this.totalCookiesSoldInADay = `${totalCookiesPerDay} cookies`;
    locationDetails[i] = this.totalCookiesSoldInADay;
    return locationDetails;
  };
}

function createRow(hoursArray) {
  var tempData =[];
  for(var i=0; i<hoursArray.length; i++) {
    tempData = tempData + '<td>' + hoursArray[i] + '</td>';
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

// Create Header Row
createRow(hours);
render(data);

//Create Pike Place Market stats
var firstAndPike = new CookiesLocation(23,65,6.3);
var cookieDetails = firstAndPike.output(hours);
cookieDetails[0]='1st and Pike';
data = [];
createRow(cookieDetails);
render(data);

//Create SeaTac Airport stats
var seaTacAirport = new CookiesLocation(3,24,1.2);
cookieDetails = seaTacAirport.output(hours);
cookieDetails[0]='SeaTac Airport';
data = [];
createRow(cookieDetails);
render(data);

//Create Seattle Center stats
var seattleCenter = new CookiesLocation(11,38,3.7);
cookieDetails = seattleCenter.output(hours);
cookieDetails[0]='Seattle Center';
data = [];
createRow(cookieDetails);
render(data);

//Create Capitol Hill stats
var capitolHill = new CookiesLocation(20,38,2.3);
cookieDetails = capitolHill.output(hours);
cookieDetails[0]='Capitol Hill';
data = [];
createRow(cookieDetails);
render(data);

//Create Alki stats
var alki = new CookiesLocation(20,38,2.3);
cookieDetails = alki.output(hours);
cookieDetails[0]='Alki';
data = [];
createRow(cookieDetails);
render(data);

