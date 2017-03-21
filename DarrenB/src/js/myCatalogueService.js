"use strict";

function catalogueServiceSports ( locationId ) {
    var sportsChannels = [];
    var myListItem;
    
    try {
        
        if ( typeof locationId != 'string' ) {
            throw new TypeError;
        }    
        
        switch (locationId) {
            case "LONDON"  : 
                sportsChannels.push("Arsenal TV");
                sportsChannels.push("Chelsea TV");
                break;
                      
            case "LIVERPOOL" :
                sportsChannels.push("Liverpool TV");
                break;
                      
            default :
                /* DB - For all other locationId's, don't add anything to the array. 
                 *      This may change in the future 
                 */       
                break;
        }
    }
    catch (Err) {
        /* We've caught any errors to avoid further problems above,
           but throw error again for unit tests */
        throw (Err);
    }    
    
    return(sportsChannels);   
}


function catalogueServiceNews ( locationId ) {
    var newsChannels = ["Sky News","Sky Sports News"];
 
    /* DB - locationId can be ignored for now as always return same set 
     *      of news channels, but may be required in the future ? 
     */
    
    return(newsChannels);
}


