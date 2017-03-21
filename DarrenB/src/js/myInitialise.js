"use strict";

function initProductSelectionPage() {
    var customerID;
    var myAvailable;
    var locationId;
    var x;
    var myListItem;
    var myList;

    try {
        /* Set fake initial CustomerID value here. This would normally be read from a cookie 
           1 for a Liverpool based customer
           2 for a London based customer
           x any o ther region based customer 
         */  
        customerID = "2";
        
        locationId = customerLocationService(customerID);
            
        document.getElementById("btnCheckout").style.visibility = "hidden";;
            
        /* Get the list of available sports channels dependent on location,
           then add to the sportsList list box */    
        myList = document.getElementById("sportsList");
        myAvailable = catalogueServiceSports(locationId);

        for (x=0; x<myAvailable.length; x++) {
            myListItem = createListItem( "liSports"+myAvailable[x], myAvailable[x]);
            myList.appendChild(myListItem);
        }
          
        /* Get the list of available sports channels dependant on location,
           then add to the newssList list box */   
        myList = document.getElementById("newsList");
        myAvailable = catalogueServiceNews(locationId);  
        
        for (x=0; x<myAvailable.length; x++) {
            myListItem = createListItem( "liNews"+myAvailable[x], myAvailable[x]);
            myList.appendChild(myListItem);
        }  
    }
    catch (Err) {
        alert(Err);   
    } 
}



function initConfirmationPage() {
    var productList = [];
    var x;
    var entry;
    var storedItems;
    var storedItemsArray = [];
    
    try {
        storedItems = sessionStorage.getItem('basketItems');
        storedItemsArray = JSON.parse(storedItems);
        
        productList=document.getElementById("productListBox");
        
        for(x=0; x<storedItemsArray.length; x++) {
            entry = document.createElement('li');
            entry.appendChild(document.createTextNode(storedItemsArray[x]));
            entry.setAttribute("id", "liProduct" + storedItemsArray[x]);
            productList.appendChild(entry);
        }
    }
    catch (Err) {
        alert(Err);
    }

    
}