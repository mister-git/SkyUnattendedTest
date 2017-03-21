"use strict";

function checkBasket(liName) {
    var myItem;
    var entry;
    var remove;
    var basketList;
    var btnCheckout;
    
    try {
        
        myItem=document.getElementById(liName);
        
        basketList=document.getElementById("basketListbox");
        
        if (myItem.checked) {
            entry = document.createElement('li');
            entry.appendChild(document.createTextNode(myItem.value));
            entry.setAttribute("id", "liBasket" + liName);
            basketList.appendChild(entry);
        }   
        else {
            remove = document.getElementById("liBasket" + liName);
            basketList.removeChild(remove);
        }
        
        
        btnCheckout = document.getElementById("btnCheckout");
        if (basketList.childElementCount > 0) {
            btnCheckout.style.visibility = "visible";  
        }
        else {
            btnCheckout.style.visibility = "hidden";
        }
    }
    catch (Err) {
        alert(Err);
    }
}


function btnCheckoutClick(liName) {
    var basketList;
    var productList = [];
    var x;
    
    try {
        
        basketList=document.getElementById("basketListbox");
        
        for(x=0; x<basketList.children.length; x++) {
            productList.push(basketList.children[x].innerText);  
        }

        sessionStorage.setItem("basketItems", JSON.stringify(productList) );
        
        window.open("confirmation.html", "_self");
    }
    catch (Err) {
        alert(Err);   
    }    
}




/****************************************************************************************
 * DB - createListItem( liName , liText ) 
 * 
 * Creates a list item with label and input as children, ready for adding to a list 
 * 
 * Parameters :-
 *  liName - The id to be given to the list item
 *  liText - The text to show for the label/input
 *
 ****************************************************************************************/
function createListItem( liName, liText ) {
    var listItem, label, input;
    
    try {
        
        listItem = document.createElement('li');
        listItem.setAttribute("id", liName);
        listItem.setAttribute("class", "list-group-item");
        
        label = document.createElement('label');
        label.setAttribute("innerHTML", liText);
        
        input = document.createElement('input');
        input.setAttribute("id", liName+"Checkbox");
        input.setAttribute("type", "checkbox");
        input.setAttribute("value", liText);
        input.setAttribute("onclick", "checkBasket(this.id)");
        
        label.appendChild(input);
        
        /* Leading space is intentional in the textNode text, as it looks better next to checkbox */
        label.appendChild(document.createTextNode(" " + liText));
        listItem.appendChild(label);
        
        return ( listItem );
    }
    catch (Err) {
        alert(Err);   
    } 
}




