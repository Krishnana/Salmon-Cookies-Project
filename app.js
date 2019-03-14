
'use-strict';

var hours =  ['6am','7am','8am','9am','10am','11am','12am','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'];

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
    var locationDetails = ['',0];
    var totalCookiesPerDay = 0;

    for (var i=0; i < hours.length; i++){
      var cookies = this.cookiesSoldPerHour();
      locationDetails[i] = [hours[i], `${cookies} cookies`];
      totalCookiesPerDay = totalCookiesPerDay + cookies;
    }
    this.totalCookiesSoldInADay = `${totalCookiesPerDay} cookies`;
    return locationDetails;
  };
}
//Create Pike Place Market stats
var firstAndPike = new CookiesLocation(23,65,6.3);
var listName = 'firstAndPike';
writeCookiesPerHour(firstAndPike.output(hours),listName);
createList('li',listName,'Total', firstAndPike.totalCookiesSoldInADay);

//Create seaTacAirport stats
var seaTacAirport = new CookiesLocation(3,24,1.2);
listName = 'seaTacAirport';
writeCookiesPerHour(seaTacAirport.output(hours),listName);
createList('li',listName,'Total',seaTacAirport.totalCookiesSoldInADay);


//Create seattleCenter stats
var seattleCenter = new CookiesLocation(11,38,3.7);
listName = 'seattleCenter';
writeCookiesPerHour(seattleCenter.output(hours),listName);
createList('li',listName,'Total',seattleCenter.totalCookiesSoldInADay);

//Create capitolHill stats
var capitolHill = new CookiesLocation(20,38,2.3);
listName = 'capitolHill';
writeCookiesPerHour(capitolHill.output(hours),listName);
createList('li',listName,'Total',capitolHill.totalCookiesSoldInADay);

//Create capitolHill stats
var alki = new CookiesLocation(2,16,4.6);
listName = 'alki';
writeCookiesPerHour(alki.output(hours),listName);
createList('li',listName,'Total',alki.totalCookiesSoldInADay);


function createList(elementName,appendID,time,cookies){
  document.getElementById(appendID);
  //Create an element
  var liEL = document.createElement(elementName);
  //Add some value to element
  liEL.textContent = `${time} : ${cookies}`;
  //Append new element to it's parent
  document.getElementById(appendID).appendChild(liEL);
  liEL = document.createElement(elementName);
}

function writeCookiesPerHour(cookiesPerHour, listName){
  //Create stats
  for(var i=0 ; i<cookiesPerHour.length;i++)
  {
    createList('li', listName,cookiesPerHour[i][0],cookiesPerHour[i][1]);
  }
}
