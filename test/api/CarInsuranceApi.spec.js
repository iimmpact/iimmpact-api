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
    instance = new IimmpactApi.CarInsuranceApi();
  });

  describe('(package)', function() {
    describe('CarInsuranceApi', function() {
      describe('v1CarInsuranceGet', function() {
        it('should call v1CarInsuranceGet successfully', function(done) {
          // TODO: uncomment, update parameter values for v1CarInsuranceGet call and complete the assertions
          /*
          var vehicleNo = "vehicleNo_example";
          var opts = {};
          opts.idNo = "idNo_example";

          instance.v1CarInsuranceGet(vehicleNo, opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(IimmpactApi.CarInsuranceRespone);
            expect(data.message).to.be.a('string');
            expect(data.message).to.be("");
            expect(data.make).to.be.a('string');
            expect(data.make).to.be("");
            expect(data.model).to.be.a('string');
            expect(data.model).to.be("");
            expect(data.yearMake).to.be.a('string');
            expect(data.yearMake).to.be("");
            expect(data.chassisNo).to.be.a('string');
            expect(data.chassisNo).to.be("");
            expect(data.engineNo).to.be.a('string');
            expect(data.engineNo).to.be("");
            expect(data.seatingCapacity).to.be.a('string');
            expect(data.seatingCapacity).to.be("");
            {
              let dataCtr = data.variant;
              expect(dataCtr).to.be.an(Array);
              expect(dataCtr).to.not.be.empty();
              for (let p in dataCtr) {
                let data = dataCtr[p];
                expect(data).to.be.a(IimmpactApi.CarInsuranceResponeVariant);
                expect(data.nvic).to.be.a('string');
                expect(data.nvic).to.be("");
                expect(data.desc).to.be.a('string');
                expect(data.desc).to.be("");
                expect(data.marketValue).to.be.a('string');
                expect(data.marketValue).to.be("");
                expect(data.cc).to.be.a('string');
                expect(data.cc).to.be("");
                expect(data.fullmodelDesc).to.be.a('string');
                expect(data.fullmodelDesc).to.be("");

                      }
            }
            expect(data.vehImage).to.be.a('string');
            expect(data.vehImage).to.be("");
            expect(data.nextNCDPerCentage).to.be.a('string');
            expect(data.nextNCDPerCentage).to.be("");
            expect(data.nextNcdExpDate).to.be.a('string');
            expect(data.nextNcdExpDate).to.be("");
            expect(data.currentPolicy).to.be.a('string');
            expect(data.currentPolicy).to.be("");

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
