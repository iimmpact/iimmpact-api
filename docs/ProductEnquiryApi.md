# IimmpactApi.ProductEnquiryApi

All URIs are relative to *https://api.iimmpact.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**v1ProductsGet**](ProductEnquiryApi.md#v1ProductsGet) | **GET** /v1/products | 


<a name="v1ProductsGet"></a>
# **v1ProductsGet**
> InlineResponse2002 v1ProductsGet(opts)



### Example
```javascript
var IimmpactApi = require('iimmpact_api');
var defaultClient = IimmpactApi.ApiClient.instance;

// Configure API key authorization: SSO
var SSO = defaultClient.authentications['SSO'];
SSO.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//SSO.apiKeyPrefix = 'Token';

var apiInstance = new IimmpactApi.ProductEnquiryApi();

var opts = { 
  'category': "category_example" // String | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.v1ProductsGet(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **category** | **String**|  | [optional] 

### Return type

[**InlineResponse2002**](InlineResponse2002.md)

### Authorization

[SSO](../README.md#SSO)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

