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
    // AMD. Register as an anonymous module.
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.IimmpactApi) {
      root.IimmpactApi = {};
    }
    root.IimmpactApi.DepositRequest = factory(root.IimmpactApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The DepositRequest model module.
   * @module model/DepositRequest
   * @version 2020-09-14T13:01:14Z
   */

  /**
   * Constructs a new <code>DepositRequest</code>.
   * @alias module:model/DepositRequest
   * @class
   * @param amount {Number} 
   * @param datetime {String} 
   */
  var exports = function(amount, datetime) {
    this.amount = amount;
    this.datetime = datetime;
  };

  /**
   * Constructs a <code>DepositRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DepositRequest} obj Optional instance to populate.
   * @return {module:model/DepositRequest} The populated <code>DepositRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('amount'))
        obj.amount = ApiClient.convertToType(data['amount'], 'Number');
      if (data.hasOwnProperty('datetime'))
        obj.datetime = ApiClient.convertToType(data['datetime'], 'String');
    }
    return obj;
  }

  /**
   * @member {Number} amount
   */
  exports.prototype.amount = undefined;

  /**
   * @member {String} datetime
   */
  exports.prototype.datetime = undefined;

  return exports;

}));
