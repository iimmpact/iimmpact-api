# IimmpactApi.ServicesApi

All URIs are relative to *https://api.iimmpact.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**v1BillPresentmentGet**](ServicesApi.md#v1BillPresentmentGet) | **GET** /v1/bill-presentment | 
[**v1NetworkstatusGet**](ServicesApi.md#v1NetworkstatusGet) | **GET** /v1/networkstatus | 
[**v1TopupPost**](ServicesApi.md#v1TopupPost) | **POST** /v1/topup | 


<a name="v1BillPresentmentGet"></a>
# **v1BillPresentmentGet**
> BillPresentmentResponse v1BillPresentmentGet(account, opts)



### Example
```javascript
var IimmpactApi = require('iimmpact_api');
var defaultClient = IimmpactApi.ApiClient.instance;

// Configure API key authorization: SSO
var SSO = defaultClient.authentications['SSO'];
SSO.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//SSO.apiKeyPrefix = 'Token';

var apiInstance = new IimmpactApi.ServicesApi();

var account = "account_example"; // String | 

var opts = { 
  'accountName': "accountName_example", // String | 
  'product': "product_example" // String | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.v1BillPresentmentGet(account, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **account** | **String**|  | 
 **accountName** | **String**|  | [optional] 
 **product** | **String**|  | [optional] 

### Return type

[**BillPresentmentResponse**](BillPresentmentResponse.md)

### Authorization

[SSO](../README.md#SSO)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="v1NetworkstatusGet"></a>
# **v1NetworkstatusGet**
> NetworkStatusResponse v1NetworkstatusGet(product)



### Example
```javascript
var IimmpactApi = require('iimmpact_api');
var defaultClient = IimmpactApi.ApiClient.instance;

// Configure API key authorization: SSO
var SSO = defaultClient.authentications['SSO'];
SSO.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//SSO.apiKeyPrefix = 'Token';

var apiInstance = new IimmpactApi.ServicesApi();

var product = "product_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.v1NetworkstatusGet(product, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **product** | **String**|  | 

### Return type

[**NetworkStatusResponse**](NetworkStatusResponse.md)

### Authorization

[SSO](../README.md#SSO)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="v1TopupPost"></a>
# **v1TopupPost**
> TopupResponse v1TopupPost(topupRequest)



### Example
```javascript
var IimmpactApi = require('iimmpact_api');
var defaultClient = IimmpactApi.ApiClient.instance;

// Configure API key authorization: SSO
var SSO = defaultClient.authentications['SSO'];
SSO.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//SSO.apiKeyPrefix = 'Token';

var apiInstance = new IimmpactApi.ServicesApi();

var topupRequest = new IimmpactApi.TopupRequest(); // TopupRequest | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.v1TopupPost(topupRequest, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **topupRequest** | [**TopupRequest**](TopupRequest.md)|  | 

### Return type

[**TopupResponse**](TopupResponse.md)

### Authorization

[SSO](../README.md#SSO)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

