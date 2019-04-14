
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

  // Frame footer by adding all sales details
  for(var i=1; i<hours.length+1; i++) {
    for(var j=0; j<locationArray.length;j++){
      cookies = cookies + locationArray[j][i];
    }
    tempData = tempData + '<td>' + cookies + '</td>';
  }

  //Insert new total row element only if does not exist already
  var footerElement = document.getElementsByTagName('tfoot');
  if(footerElement.length===0){
    var newRow = document.createElement('tfoot');
    newRow.innerHTML = '<td>' + 'Totals' + tempData + '</td>';
    table.appendChild(newRow);
  } else {
    var tableID = document.getElementById('cookieStats');
    var rowElement = document.getElementsByTagName('tr');
    tableID.rows[rowElement.length - 1].innerHTML = '<td>' + 'Totals' + tempData + '</td>';
  }
}

function formData(event){
  event.preventDefault();

  var location = event.target.location.value;
  var minNumberCookies = event.target.minimum.value;
  var maxNumberCookies = event.target.maximum.value;
  var avgNumberCookies = event.target.average.value;

  //Input data validations
  doLocationDuplicateCheck(location);
  doNumberValidations(minNumberCookies,maxNumberCookies,avgNumberCookies);

  //Add  new location details
  var newLocation = new CookiesLocation(minNumberCookies,maxNumberCookies,avgNumberCookies);
  var newLocationDetails = newLocation.output();
  newLocationDetails[0] = location;
  data = [];
  createRow(newLocationDetails);
  render(data);
  form.reset();

  //Store New location values in an array so that total can be computed
  locationArray.push(newLocationDetails);

  //Write new Total as Footer
  createFooter();

}

function doNumberValidations(minNumberCookies, maxNumberCookies, avgNumberCookies){
  // Maximum Number of cookies cannot be lesser than minimum or average number of cookies
  // Average Number of cookies cannot be lesser than minimum number of cookies
  if(maxNumberCookies < minNumberCookies || maxNumberCookies < avgNumberCookies ) {
    alert('Maximum number of cookies cannot be lesser than minimum number or average number of cookies');
    throw new Error('Maximum number of cookies cannot be lesser than minimum number or average number of cookies');
  } else if(avgNumberCookies < minNumberCookies){
    alert('Average number of cookies cannot be lesser than minimum number of cookies');
    throw new Error('Average number of cookies cannot be lesser than minimum number of cookies');
  }
}

function doLocationDuplicateCheck(location){

  for(var i= 0; i<locationArray.length;i++) {
    if(locationArray[i][0] === location){
      alert('Location already exist. Please enter different location name');
      throw new Error('Location already exist. Please enter different location name');
    }
  }

}

// Create Header Row
createHeader();

// Location array to store all location details
var locationArray = [] ;

//Create Pike Place Market stats
var firstAndPike = new CookiesLocation(23,65,6.3);
var firstAndPikeCookieDetails = firstAndPike.output();
firstAndPikeCookieDetails[0]='1st and Pike';
data = [];
createRow(firstAndPikeCookieDetails);
render(data);
locationArray.push(firstAndPikeCookieDetails);

//Create SeaTac Airport stats
var seaTacAirport = new CookiesLocation(3,24,1.2);
var seaTacCookieDetails = seaTacAirport.output();
seaTacCookieDetails[0]='SeaTac Airport';
data = [];
createRow(seaTacCookieDetails);
render(data);
locationArray.push(seaTacCookieDetails);

//Create Seattle Center stats
var seattleCenter = new CookiesLocation(11,38,3.7);
var seattleCenterCookieDetails = seattleCenter.output();
seattleCenterCookieDetails[0]='Seattle Center';
data = [];
createRow(seattleCenterCookieDetails);
render(data);
locationArray.push(seattleCenterCookieDetails);

//Create Capitol Hill stats
var capitolHill = new CookiesLocation(20,38,2.3);
var capitolHillCookieDetails = capitolHill.output();
capitolHillCookieDetails[0]='Capitol Hill';
data = [];
createRow(capitolHillCookieDetails);
render(data);
locationArray.push(capitolHillCookieDetails);

//Create Alki stats
var alki = new CookiesLocation(20,38,2.3);
var alkiCookieDetails = alki.output();
alkiCookieDetails[0]='Alki';
data = [];
createRow(alkiCookieDetails);
render(data);
locationArray.push(alkiCookieDetails);

// Add new locations
var form = document.getElementById('SalesForm');

//Write Total as Footer
createFooter();

// Form data - Call back function
addEventListener('submit',formData);

locationArray.reset();
