# IimmpactApi.LowBalanceWarningApi

All URIs are relative to *https://api.iimmpact.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**v1LowBalanceThresholdGet**](LowBalanceWarningApi.md#v1LowBalanceThresholdGet) | **GET** /v1/low-balance-threshold | 
[**v1LowBalanceThresholdPost**](LowBalanceWarningApi.md#v1LowBalanceThresholdPost) | **POST** /v1/low-balance-threshold | 


<a name="v1LowBalanceThresholdGet"></a>
# **v1LowBalanceThresholdGet**
> LowBalanceWarningResponse v1LowBalanceThresholdGet()



### Example
```javascript
var IimmpactApi = require('iimmpact_api');
var defaultClient = IimmpactApi.ApiClient.instance;

// Configure API key authorization: SSO
var SSO = defaultClient.authentications['SSO'];
SSO.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//SSO.apiKeyPrefix = 'Token';

var apiInstance = new IimmpactApi.LowBalanceWarningApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.v1LowBalanceThresholdGet(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**LowBalanceWarningResponse**](LowBalanceWarningResponse.md)

### Authorization

[SSO](../README.md#SSO)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="v1LowBalanceThresholdPost"></a>
# **v1LowBalanceThresholdPost**
> LowBalanceWarningResponse v1LowBalanceThresholdPost(amount)



### Example
```javascript
var IimmpactApi = require('iimmpact_api');
var defaultClient = IimmpactApi.ApiClient.instance;

// Configure API key authorization: SSO
var SSO = defaultClient.authentications['SSO'];
SSO.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//SSO.apiKeyPrefix = 'Token';

var apiInstance = new IimmpactApi.LowBalanceWarningApi();

var amount = "amount_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.v1LowBalanceThresholdPost(amount, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **amount** | **String**|  | 

### Return type

[**LowBalanceWarningResponse**](LowBalanceWarningResponse.md)

### Authorization

[SSO](../README.md#SSO)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

