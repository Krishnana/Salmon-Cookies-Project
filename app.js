
var hours =  ['6am','7am','8am','9am','10am','11am','12am','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'];

var firstAndPike = {
    minCustomersPerHour: 23,
    maxCustomersPerHour: 65,
    avgCookieSalesPerCustomer: 6.3,
    
    customersPerHour: function(){
        var min = Math.ceil(this.minCustomersPerHour);
        var max = Math.floor(this.maxCustomersPerHour);
        return Math.floor(Math.random() * (max - min + 1)) + min; 
    },

    cookiesSoldPerHour:function(){
        return Math.round(this.customersPerHour() * this.avgCookieSalesPerCustomer,0);
    },

    totalCookiesSoldInADay:0,

    output: function(hours){
        var locationDetails = ['',0];
        var totalCookiesPerDay = 0;

        for (var i=0; i < hours.length; i++){
            cookies = this.cookiesSoldPerHour();
            locationDetails[i] = [hours[i], `${cookies} cookies`];
            totalCookiesPerDay = totalCookiesPerDay + cookies;
        }
    this.totalCookiesSoldInADay = `${totalCookiesPerDay} cookies`;
    return locationDetails;
    }
}

var seaTacAirport = {
    minCustomersPerHour: 3,
    maxCustomersPerHour: 24,
    avgCookieSalesPerCustomer: 1.2,
    
    customersPerHour: function(){
        var min = Math.ceil(this.minCustomersPerHour);
        var max = Math.floor(this.maxCustomersPerHour);
        return Math.floor(Math.random() * (max - min + 1)) + min; 
    },

    cookiesSoldPerHour:function(){
        return Math.round(this.customersPerHour() * this.avgCookieSalesPerCustomer,0);
    },

    totalCookiesSoldInADay:0,

    output: function(hours){
        var locationDetails = ['',0];
        var totalCookiesPerDay = 0;

        for (var i=0; i < hours.length; i++){
            cookies = this.cookiesSoldPerHour();
            locationDetails[i] = [hours[i], `${cookies} cookies`];
            totalCookiesPerDay = totalCookiesPerDay + cookies;
        }
    this.totalCookiesSoldInADay = `${totalCookiesPerDay} cookies`;
    return locationDetails;
    }
}

var seattleCenter = {
    minCustomersPerHour: 11,
    maxCustomersPerHour: 38,
    avgCookieSalesPerCustomer: 3.7,
    
    customersPerHour: function(){
        var min = Math.ceil(this.minCustomersPerHour);
        var max = Math.floor(this.maxCustomersPerHour);
        return Math.floor(Math.random() * (max - min + 1)) + min; 
    },

    cookiesSoldPerHour:function(){
        return Math.round(this.customersPerHour() * this.avgCookieSalesPerCustomer,0);
    },

    totalCookiesSoldInADay:0,

    output: function(hours){
        var locationDetails = ['',0];
        var totalCookiesPerDay = 0;

        for (var i=0; i < hours.length; i++){
            cookies = this.cookiesSoldPerHour();
            locationDetails[i] = [hours[i], `${cookies} cookies`];
            totalCookiesPerDay = totalCookiesPerDay + cookies;
        }
        this.totalCookiesSoldInADay = `${totalCookiesPerDay} cookies`;
    return locationDetails;
    }
}

var capitolHill = {
    minCustomersPerHour: 20,
    maxCustomersPerHour: 38,
    avgCookieSalesPerCustomer: 2.3,
    
    customersPerHour: function(){
        var min = Math.ceil(this.minCustomersPerHour);
        var max = Math.floor(this.maxCustomersPerHour);
        return Math.floor(Math.random() * (max - min + 1)) + min; 
    },

    cookiesSoldPerHour:function(){
        return Math.round(this.customersPerHour() * this.avgCookieSalesPerCustomer,0);
    },

    totalCookiesSoldInADay:0,

    output: function(hours){
        var locationDetails = ['',0];
        var totalCookiesPerDay = 0;

        for (var i=0; i < hours.length; i++){
            cookies = this.cookiesSoldPerHour();
            locationDetails[i] = [hours[i], `${cookies} cookies`];
            totalCookiesPerDay = totalCookiesPerDay + cookies;
        }
    this.totalCookiesSoldInADay = `${totalCookiesPerDay} cookies`;
    return locationDetails;
    }
}

var alki = {
    minCustomersPerHour: 2,
    maxCustomersPerHour: 16,
    avgCookieSalesPerCustomer: 4.6,
    
    customersPerHour: function(){
        var min = Math.ceil(this.minCustomersPerHour);
        var max = Math.floor(this.maxCustomersPerHour);
        return Math.floor(Math.random() * (max - min + 1)) + min; 
    },

    cookiesSoldPerHour:function(){
        return Math.round(this.customersPerHour() * this.avgCookieSalesPerCustomer,0);
    },

    totalCookiesSoldInADay:0,

    output: function(hours){
        var locationDetails = ['',0];
        var totalCookiesPerDay = 0;

        for (var i=0; i < hours.length; i++){
            cookies = this.cookiesSoldPerHour();
            locationDetails[i] = [hours[i], `${cookies} cookies`];
            totalCookiesPerDay = totalCookiesPerDay + cookies;
        }
    this.totalCookiesSoldInADay = `${totalCookiesPerDay} cookies`;
    return locationDetails;
    }
}

//Create Pike Place Market stats
var listName = "firstAndPike";
writeCookiesPerHour(firstAndPike.output(hours),listName);
createList("li",listName,'Total', firstAndPike.totalCookiesSoldInADay);

//Create seaTacAirport stats
listName = "seaTacAirport";
writeCookiesPerHour(seaTacAirport.output(hours),listName);
createList("li",listName,'Total',seaTacAirport.totalCookiesSoldInADay);


//Create seattleCenter stats
listName = "seattleCenter";
writeCookiesPerHour(seattleCenter.output(hours),listName);
createList("li",listName,'Total',seattleCenter.totalCookiesSoldInADay);

//Create capitolHill stats
listName = "capitolHill";
writeCookiesPerHour(capitolHill.output(hours),listName);
createList("li",listName,'Total',capitolHill.totalCookiesSoldInADay);

//Create capitolHill stats
listName = "alki";
writeCookiesPerHour(alki.output(hours),listName);
createList("li",listName,'Total',alki.totalCookiesSoldInADay);


function createList(elementName,appendID,time,cookies){
    var ul = document.getElementById(appendID);
    //Create an element
    var liEL = document.createElement(elementName);
    //Add some value to element
    liEL.textContent = `${time} : ${cookies}`;
    //Append new element to it's parent
    document.getElementById(appendID).appendChild(liEL);
    var liEL = document.createElement(elementName);
}

function writeCookiesPerHour(cookiesPerHour, listName){
    //Create stats
    for(var i=0 ; i<cookiesPerHour.length;i++)
    {
        createList("li", listName,cookiesPerHour[i][0],cookiesPerHour[i][1]);
    }
}