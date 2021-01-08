/*
 * IIMMPACT API
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 2020-09-14T13:01:14Z
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.17
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.IimmpactApi);
  }
}(this, function(expect, IimmpactApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new IimmpactApi.ProductEnquiryApi();
  });

  describe('(package)', function() {
    describe('ProductEnquiryApi', function() {
      describe('v1ProductsGet', function() {
        it('should call v1ProductsGet successfully', function(done) {
          // TODO: uncomment, update parameter values for v1ProductsGet call and complete the assertions
          /*
          var opts = {};
          opts.category = "category_example";

          instance.v1ProductsGet(opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(IimmpactApi.InlineResponse2002);
            {
              let dataCtr = data.data;
              expect(dataCtr).to.be.an(Array);
              expect(dataCtr).to.not.be.empty();
              for (let p in dataCtr) {
                let data = dataCtr[p];
                expect(data).to.be.a(IimmpactApi.InlineResponse2002Data);
                expect(data.status).to.be.a('string');
                expect(data.status).to.be("");
                expect(data.category).to.be.a('string');
                expect(data.category).to.be("");
                expect(data.productCode).to.be.a('string');
                expect(data.productCode).to.be("");
                expect(data.productName).to.be.a('string');
                expect(data.productName).to.be("");
                expect(data.denomination).to.be.a('string');
                expect(data.denomination).to.be("");
                expect(data.unitPrice).to.be.a('string');
                expect(data.unitPrice).to.be("");
                expect(data.discount).to.be.a('string');
                expect(data.discount).to.be("");
                expect(data.apiParameter).to.be.a('string');
                expect(data.apiParameter).to.be("");
                expect(data.updateTime).to.be.a('string');
                expect(data.updateTime).to.be("");
                expect(data.note).to.be.a('string');
                expect(data.note).to.be("");
                expect(data.productImg).to.be.a('string');
                expect(data.productImg).to.be("");

                      }
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
    });
  });

}));
