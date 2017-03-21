"use strict";

function customerLocationService ( customerId ) {
    var locationId = "NONE";
    
    /* DB - This is a stub function only for now */

    try {
        
        if ( isNaN(customerId) ) {
            throw new TypeError;
        }    
            
        if (customerId <= 0) {
            throw new RangeError;
        }
        
        switch (customerId) {
            case "1"  : locationId = "LIVERPOOL";
                        break;
                      
            case "2"  : locationId = "LONDON";
                        break;
                      
            default   : locationId = "OTHER";
                        break;
        }
    }
    catch (Err) {
        /* We've caught any errors to avoid further problems above,
           but throw error again for unit tests */
        throw (Err);    
    }    

    return(locationId); 
    
}