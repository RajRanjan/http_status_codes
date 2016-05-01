var chai =require('chai');
var expect=chai.expect;
//hsc stands for httpStatusCode
var hsc=require('../dist');
describe("HTTP-STATUS-CODE FOR Number status codes",function(done){
        describe("200 series status code",function(done){
            it("200 is equal to OK",function(done){
	       expect(hsc[200]).to.equal("OK");
         	done();	
            });
	    it("201 is equal to CREATED",function(done){
	    	expect(hsc[201]).to.equal("CREATED");
		done();	
	    });
	    it("202 is equal to ACCEPTED",function(done){
		 expect(hsc[202]).to.equal("ACCEPTED");
		done();	
	    });
	    it("203 is equal to NON_AUTHORATIVE",function(done){
		 expect(hsc[203]).to.equal("NON_AUTHORATIVE");
		done();	
	    });
	    it("204 is equal to NO_CONTENT",function(done){
		 expect(hsc[204]).to.equal("NO_CONTENT");
		done();	
	    });
	    it("205 is equal to RESET_CONTENT",function(done){
		 expect(hsc[205]).to.equal("RESET_CONTENT");
		done();	
	    });
	    it("206 is equal to PARTIAL_CONTENT",function(done){
		 expect(hsc[206]).to.equal("PARTIAL_CONTENT");
		done();	
	    });




        });
});

