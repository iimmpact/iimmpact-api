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
    instance = new IimmpactApi.LowBalanceWarningApi();
  });

  describe('(package)', function() {
    describe('LowBalanceWarningApi', function() {
      describe('v1LowBalanceThresholdGet', function() {
        it('should call v1LowBalanceThresholdGet successfully', function(done) {
          // TODO: uncomment v1LowBalanceThresholdGet call and complete the assertions
          /*

          instance.v1LowBalanceThresholdGet(function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(IimmpactApi.LowBalanceWarningResponse);
            expect(data.data).to.be.a(IimmpactApi.LowBalanceWarningResponseData);
                  expect(data.data.status).to.be.a('string');
              expect(data.data.status).to.be("");
              expect(data.data.email).to.be.a('string');
              expect(data.data.email).to.be("");
              expect(data.data.balanceThreshold).to.be.a('string');
              expect(data.data.balanceThreshold).to.be("");
              expect(data.data.note).to.be.a('string');
              expect(data.data.note).to.be("");
            expect(data.metadata).to.be.a(IimmpactApi.LowBalanceWarningResponseMetadata);
                  expect(data.metadata.statusCode).to.be.a('string');
              expect(data.metadata.statusCode).to.be("");
              expect(data.metadata.lastUpdated).to.be.a('string');
              expect(data.metadata.lastUpdated).to.be("");

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('v1LowBalanceThresholdPost', function() {
        it('should call v1LowBalanceThresholdPost successfully', function(done) {
          // TODO: uncomment, update parameter values for v1LowBalanceThresholdPost call and complete the assertions
          /*
          var amount = "amount_example";

          instance.v1LowBalanceThresholdPost(amount, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(IimmpactApi.LowBalanceWarningResponse);
            expect(data.data).to.be.a(IimmpactApi.LowBalanceWarningResponseData);
                  expect(data.data.status).to.be.a('string');
              expect(data.data.status).to.be("");
              expect(data.data.email).to.be.a('string');
              expect(data.data.email).to.be("");
              expect(data.data.balanceThreshold).to.be.a('string');
              expect(data.data.balanceThreshold).to.be("");
              expect(data.data.note).to.be.a('string');
              expect(data.data.note).to.be("");
            expect(data.metadata).to.be.a(IimmpactApi.LowBalanceWarningResponseMetadata);
                  expect(data.metadata.statusCode).to.be.a('string');
              expect(data.metadata.statusCode).to.be("");
              expect(data.metadata.lastUpdated).to.be.a('string');
              expect(data.metadata.lastUpdated).to.be("");

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
