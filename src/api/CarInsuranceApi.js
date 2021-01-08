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
    define(['ApiClient', 'model/CarInsuranceRespone'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/CarInsuranceRespone'));
  } else {
    // Browser globals (root is window)
    if (!root.IimmpactApi) {
      root.IimmpactApi = {};
    }
    root.IimmpactApi.CarInsuranceApi = factory(root.IimmpactApi.ApiClient, root.IimmpactApi.CarInsuranceRespone);
  }
}(this, function(ApiClient, CarInsuranceRespone) {
  'use strict';

  /**
   * CarInsurance service.
   * @module api/CarInsuranceApi
   * @version 2020-09-14T13:01:14Z
   */

  /**
   * Constructs a new CarInsuranceApi. 
   * @alias module:api/CarInsuranceApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the v1CarInsuranceGet operation.
     * @callback module:api/CarInsuranceApi~v1CarInsuranceGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CarInsuranceRespone} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} vehicleNo 
     * @param {Object} opts Optional parameters
     * @param {String} opts.idNo 
     * @param {module:api/CarInsuranceApi~v1CarInsuranceGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/CarInsuranceRespone}
     */
    this.v1CarInsuranceGet = function(vehicleNo, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'vehicleNo' is set
      if (vehicleNo === undefined || vehicleNo === null) {
        throw new Error("Missing the required parameter 'vehicleNo' when calling v1CarInsuranceGet");
      }


      var pathParams = {
      };
      var queryParams = {
        'id_no': opts['idNo'],
        'vehicle_no': vehicleNo,
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['SSO'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = CarInsuranceRespone;

      return this.apiClient.callApi(
        '/v1/car-insurance', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
