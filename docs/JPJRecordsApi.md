# IimmpactApi.JPJRecordsApi

All URIs are relative to *https://api.iimmpact.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**v1JpjDrivingLicenseGet**](JPJRecordsApi.md#v1JpjDrivingLicenseGet) | **GET** /v1/jpj/driving-license | 
[**v1JpjDrivingTestResultsGet**](JPJRecordsApi.md#v1JpjDrivingTestResultsGet) | **GET** /v1/jpj/driving-test-results | 
[**v1JpjMotorVehicleExpiryGet**](JPJRecordsApi.md#v1JpjMotorVehicleExpiryGet) | **GET** /v1/jpj/motor-vehicle-expiry | 
[**v1JpjSummonsGet**](JPJRecordsApi.md#v1JpjSummonsGet) | **GET** /v1/jpj/summons | 


<a name="v1JpjDrivingLicenseGet"></a>
# **v1JpjDrivingLicenseGet**
> DrivingLicenseRespone v1JpjDrivingLicenseGet(idNo, idType, opts)



### Example
```javascript
var IimmpactApi = require('iimmpact_api');
var defaultClient = IimmpactApi.ApiClient.instance;

// Configure API key authorization: SSO
var SSO = defaultClient.authentications['SSO'];
SSO.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//SSO.apiKeyPrefix = 'Token';

var apiInstance = new IimmpactApi.JPJRecordsApi();

var idNo = "idNo_example"; // String | 

var idType = "idType_example"; // String | 

var opts = { 
  'captcha': "captcha_example" // String | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.v1JpjDrivingLicenseGet(idNo, idType, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **idNo** | **String**|  | 
 **idType** | **String**|  | 
 **captcha** | **String**|  | [optional] 

### Return type

[**DrivingLicenseRespone**](DrivingLicenseRespone.md)

### Authorization

[SSO](../README.md#SSO)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="v1JpjDrivingTestResultsGet"></a>
# **v1JpjDrivingTestResultsGet**
> DrivingTestRespone v1JpjDrivingTestResultsGet(idNo, idType, opts)



### Example
```javascript
var IimmpactApi = require('iimmpact_api');
var defaultClient = IimmpactApi.ApiClient.instance;

// Configure API key authorization: SSO
var SSO = defaultClient.authentications['SSO'];
SSO.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//SSO.apiKeyPrefix = 'Token';

var apiInstance = new IimmpactApi.JPJRecordsApi();

var idNo = "idNo_example"; // String | 

var idType = "idType_example"; // String | 

var opts = { 
  'captcha': "captcha_example" // String | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.v1JpjDrivingTestResultsGet(idNo, idType, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **idNo** | **String**|  | 
 **idType** | **String**|  | 
 **captcha** | **String**|  | [optional] 

### Return type

[**DrivingTestRespone**](DrivingTestRespone.md)

### Authorization

[SSO](../README.md#SSO)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="v1JpjMotorVehicleExpiryGet"></a>
# **v1JpjMotorVehicleExpiryGet**
> VehicleExpiryResponse v1JpjMotorVehicleExpiryGet(idNo, idType, vehicleNo, opts)



### Example
```javascript
var IimmpactApi = require('iimmpact_api');
var defaultClient = IimmpactApi.ApiClient.instance;

// Configure API key authorization: SSO
var SSO = defaultClient.authentications['SSO'];
SSO.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//SSO.apiKeyPrefix = 'Token';

var apiInstance = new IimmpactApi.JPJRecordsApi();

var idNo = "idNo_example"; // String | 

var idType = "idType_example"; // String | 

var vehicleNo = "vehicleNo_example"; // String | 

var opts = { 
  'captcha': "captcha_example" // String | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.v1JpjMotorVehicleExpiryGet(idNo, idType, vehicleNo, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **idNo** | **String**|  | 
 **idType** | **String**|  | 
 **vehicleNo** | **String**|  | 
 **captcha** | **String**|  | [optional] 

### Return type

[**VehicleExpiryResponse**](VehicleExpiryResponse.md)

### Authorization

[SSO](../README.md#SSO)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="v1JpjSummonsGet"></a>
# **v1JpjSummonsGet**
> JPJSummonsResponse v1JpjSummonsGet(idNo, idType, opts)



### Example
```javascript
var IimmpactApi = require('iimmpact_api');
var defaultClient = IimmpactApi.ApiClient.instance;

// Configure API key authorization: SSO
var SSO = defaultClient.authentications['SSO'];
SSO.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//SSO.apiKeyPrefix = 'Token';

var apiInstance = new IimmpactApi.JPJRecordsApi();

var idNo = "idNo_example"; // String | 

var idType = "idType_example"; // String | 

var opts = { 
  'captcha': "captcha_example" // String | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.v1JpjSummonsGet(idNo, idType, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **idNo** | **String**|  | 
 **idType** | **String**|  | 
 **captcha** | **String**|  | [optional] 

### Return type

[**JPJSummonsResponse**](JPJSummonsResponse.md)

### Authorization

[SSO](../README.md#SSO)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

