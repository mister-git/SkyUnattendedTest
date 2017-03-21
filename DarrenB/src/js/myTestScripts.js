var expect = chai.expect;

describe("testProductSelectionPage", function() {
  describe("testCustomerLocationService", function() {
    
    it("should throw RangeError if CustomerId is 0", function() {
      expect(function() { customerLocationService("0"); } ).to.throw(RangeError);
    });
    
    it("should throw RangeError if CustomerId is negative", function() {
      expect(function() { customerLocationService("-1"); } ).to.throw(RangeError);
    });
    
    it("should throw TypeError if CustomerId is not a number", function() {
      expect(function() { customerLocationService("ABC"); } ).to.throw(TypeError);
    });
    
    it("should return LIVERPOOL for CustomerId of 1", function() {
      var locationId = customerLocationService("1");
      expect(locationId).to.equal("LIVERPOOL");
    });
    
    it("should return LONDON for CustomerId of 2", function() {
      var locationId = customerLocationService("2");
      expect(locationId).to.equal("LONDON");
    });
    
    it("should return OTHER for CustomerId > 2", function() {
      var locationId = customerLocationService("3");
      expect(locationId).to.equal("OTHER");
    });
  });
  
  
  
  describe("testCatalogueServiceNews", function() {
    
    it("should always return Sky News and Sky Sports News", function() {
        var catalogueNews = catalogueServiceNews("0");
              
        expect(catalogueNews).to.include("Sky News");
        expect(catalogueNews).to.include("Sky Sports News");
    });
    
  });
  
  
  
  describe("testCatalogueServiceSports", function() {
    
    it("should throw TypeError if locationId argument is not a string", function() {
      expect(function() { catalogueServiceSports(1); } ).to.throw(TypeError);
    });
    
    it("should return Arsenal TV and Chelsea TV for locationId of LONDON", function() {
      var catalogueSports = catalogueServiceSports("LONDON");
      expect(catalogueSports).to.include("Arsenal TV");
      expect(catalogueSports).to.include("Chelsea TV");
    });
    
    it("should return Liverpool TV for locationId of LIVERPOOL", function() {
      var catalogueSports = catalogueServiceSports("LIVERPOOL");
      expect(catalogueSports).to.include("Liverpool TV");
    });
    
    it("should not return anything if locationId is not LIVERPOOL or LONDON", function() {
      var catalogueSports = catalogueServiceSports("LEEDS");
      expect(catalogueSports).to.be.empty;
    });
    
  });
  
});