# IimmpactApi.CallbackUrlApi

All URIs are relative to *https://api.iimmpact.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**v1CallbackUrlGet**](CallbackUrlApi.md#v1CallbackUrlGet) | **GET** /v1/callback-url | 
[**v1CallbackUrlPost**](CallbackUrlApi.md#v1CallbackUrlPost) | **POST** /v1/callback-url | 


<a name="v1CallbackUrlGet"></a>
# **v1CallbackUrlGet**
> CallbackUrlResponse v1CallbackUrlGet()



### Example
```javascript
var IimmpactApi = require('iimmpact_api');
var defaultClient = IimmpactApi.ApiClient.instance;

// Configure API key authorization: SSO
var SSO = defaultClient.authentications['SSO'];
SSO.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//SSO.apiKeyPrefix = 'Token';

var apiInstance = new IimmpactApi.CallbackUrlApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.v1CallbackUrlGet(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**CallbackUrlResponse**](CallbackUrlResponse.md)

### Authorization

[SSO](../README.md#SSO)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="v1CallbackUrlPost"></a>
# **v1CallbackUrlPost**
> CallbackUrlResponse v1CallbackUrlPost(url)



### Example
```javascript
var IimmpactApi = require('iimmpact_api');
var defaultClient = IimmpactApi.ApiClient.instance;

// Configure API key authorization: SSO
var SSO = defaultClient.authentications['SSO'];
SSO.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//SSO.apiKeyPrefix = 'Token';

var apiInstance = new IimmpactApi.CallbackUrlApi();

var url = "url_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.v1CallbackUrlPost(url, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **url** | **String**|  | 

### Return type

[**CallbackUrlResponse**](CallbackUrlResponse.md)

### Authorization

[SSO](../README.md#SSO)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

