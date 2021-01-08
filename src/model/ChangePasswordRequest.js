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
    root.IimmpactApi.ChangePasswordRequest = factory(root.IimmpactApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The ChangePasswordRequest model module.
   * @module model/ChangePasswordRequest
   * @version 2020-09-14T13:01:14Z
   */

  /**
   * Constructs a new <code>ChangePasswordRequest</code>.
   * @alias module:model/ChangePasswordRequest
   * @class
   */
  var exports = function(old_password, new_password) {
    this.old_password = old_password;
    this.new_password = new_password;
  };

  /**
   * Constructs a <code>ChangePasswordRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ChangePasswordRequest} obj Optional instance to populate.
   * @return {module:model/ChangePasswordRequest} The populated <code>ChangePasswordRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('old_password'))
        obj.oldPassword = ApiClient.convertToType(data['old_password'], 'String');
      if (data.hasOwnProperty('new_password'))
        obj.newPassword = ApiClient.convertToType(data['new_password'], 'String');
    }
    return obj;
  }

  /**
   * @member {String} oldPassword
   */
  exports.prototype.oldPassword = undefined;

  /**
   * @member {String} newPassword
   */
  exports.prototype.newPassword = undefined;

  return exports;

}));
