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

  describe('(package)', function() {
    describe('LowBalanceWarningResponseMetadata', function() {
      beforeEach(function() {
        instance = new IimmpactApi.LowBalanceWarningResponseMetadata();
      });

      it('should create an instance of LowBalanceWarningResponseMetadata', function() {
        // TODO: update the code to test LowBalanceWarningResponseMetadata
        expect(instance).to.be.a(IimmpactApi.LowBalanceWarningResponseMetadata);
      });

      it('should have the property statusCode (base name: "status_code")', function() {
        // TODO: update the code to test the property statusCode
        expect(instance).to.have.property('statusCode');
        // expect(instance.statusCode).to.be(expectedValueLiteral);
      });

      it('should have the property lastUpdated (base name: "last_updated")', function() {
        // TODO: update the code to test the property lastUpdated
        expect(instance).to.have.property('lastUpdated');
        // expect(instance.lastUpdated).to.be(expectedValueLiteral);
      });

    });
  });

}));