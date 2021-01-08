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
    root.IimmpactApi.BalanceStatementResponseData = factory(root.IimmpactApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The BalanceStatementResponseData model module.
   * @module model/BalanceStatementResponseData
   * @version 2020-09-14T13:01:14Z
   */

  /**
   * Constructs a new <code>BalanceStatementResponseData</code>.
   * @alias module:model/BalanceStatementResponseData
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>BalanceStatementResponseData</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/BalanceStatementResponseData} obj Optional instance to populate.
   * @return {module:model/BalanceStatementResponseData} The populated <code>BalanceStatementResponseData</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('time'))
        obj.time = ApiClient.convertToType(data['time'], 'String');
      if (data.hasOwnProperty('amount'))
        obj.amount = ApiClient.convertToType(data['amount'], 'Number');
      if (data.hasOwnProperty('balance'))
        obj.balance = ApiClient.convertToType(data['balance'], 'Number');
      if (data.hasOwnProperty('remarks'))
        obj.remarks = ApiClient.convertToType(data['remarks'], 'String');
    }
    return obj;
  }

  /**
   * @member {String} time
   */
  exports.prototype.time = undefined;

  /**
   * @member {Number} amount
   */
  exports.prototype.amount = undefined;

  /**
   * @member {Number} balance
   */
  exports.prototype.balance = undefined;

  /**
   * @member {String} remarks
   */
  exports.prototype.remarks = undefined;

  return exports;

}));