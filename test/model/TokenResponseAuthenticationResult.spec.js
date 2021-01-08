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
    describe('TokenResponseAuthenticationResult', function() {
      beforeEach(function() {
        instance = new IimmpactApi.TokenResponseAuthenticationResult();
      });

      it('should create an instance of TokenResponseAuthenticationResult', function() {
        // TODO: update the code to test TokenResponseAuthenticationResult
        expect(instance).to.be.a(IimmpactApi.TokenResponseAuthenticationResult);
      });

      it('should have the property accessToken (base name: "AccessToken")', function() {
        // TODO: update the code to test the property accessToken
        expect(instance).to.have.property('accessToken');
        // expect(instance.accessToken).to.be(expectedValueLiteral);
      });

      it('should have the property expiresIn (base name: "ExpiresIn")', function() {
        // TODO: update the code to test the property expiresIn
        expect(instance).to.have.property('expiresIn');
        // expect(instance.expiresIn).to.be(expectedValueLiteral);
      });

      it('should have the property tokenType (base name: "TokenType")', function() {
        // TODO: update the code to test the property tokenType
        expect(instance).to.have.property('tokenType');
        // expect(instance.tokenType).to.be(expectedValueLiteral);
      });

      it('should have the property refreshToken (base name: "RefreshToken")', function() {
        // TODO: update the code to test the property refreshToken
        expect(instance).to.have.property('refreshToken');
        // expect(instance.refreshToken).to.be(expectedValueLiteral);
      });

      it('should have the property idToken (base name: "IdToken")', function() {
        // TODO: update the code to test the property idToken
        expect(instance).to.have.property('idToken');
        // expect(instance.idToken).to.be(expectedValueLiteral);
      });

    });
  });

}));
