# IimmpactApi.CarInsuranceApi

All URIs are relative to *https://api.iimmpact.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**v1CarInsuranceGet**](CarInsuranceApi.md#v1CarInsuranceGet) | **GET** /v1/car-insurance | 


<a name="v1CarInsuranceGet"></a>
# **v1CarInsuranceGet**
> CarInsuranceRespone v1CarInsuranceGet(vehicleNo, opts)



### Example
```javascript
var IimmpactApi = require('iimmpact_api');
var defaultClient = IimmpactApi.ApiClient.instance;

// Configure API key authorization: SSO
var SSO = defaultClient.authentications['SSO'];
SSO.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//SSO.apiKeyPrefix = 'Token';

var apiInstance = new IimmpactApi.CarInsuranceApi();

var vehicleNo = "vehicleNo_example"; // String | 

var opts = { 
  'idNo': "idNo_example" // String | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.v1CarInsuranceGet(vehicleNo, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **vehicleNo** | **String**|  | 
 **idNo** | **String**|  | [optional] 

### Return type

[**CarInsuranceRespone**](CarInsuranceRespone.md)

### Authorization

[SSO](../README.md#SSO)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

