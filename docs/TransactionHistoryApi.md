# IimmpactApi.TransactionHistoryApi

All URIs are relative to *https://api.iimmpact.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**v1BalanceStatementGet**](TransactionHistoryApi.md#v1BalanceStatementGet) | **GET** /v1/balance-statement | 
[**v1TransactionsGet**](TransactionHistoryApi.md#v1TransactionsGet) | **GET** /v1/transactions | 


<a name="v1BalanceStatementGet"></a>
# **v1BalanceStatementGet**
> BalanceStatementResponse v1BalanceStatementGet(_date, opts)



### Example
```javascript
var IimmpactApi = require('iimmpact_api');
var defaultClient = IimmpactApi.ApiClient.instance;

// Configure API key authorization: SSO
var SSO = defaultClient.authentications['SSO'];
SSO.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//SSO.apiKeyPrefix = 'Token';

var apiInstance = new IimmpactApi.TransactionHistoryApi();

var _date = "_date_example"; // String | 

var opts = { 
  'limit': "limit_example", // String | 
  'remarks': "remarks_example", // String | 
  'sort': "sort_example", // String | 
  'type': "type_example", // String | 
  'direction': "direction_example", // String | 
  'page': "page_example", // String | 
  'amount': "amount_example" // String | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.v1BalanceStatementGet(_date, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **_date** | **String**|  | 
 **limit** | **String**|  | [optional] 
 **remarks** | **String**|  | [optional] 
 **sort** | **String**|  | [optional] 
 **type** | **String**|  | [optional] 
 **direction** | **String**|  | [optional] 
 **page** | **String**|  | [optional] 
 **amount** | **String**|  | [optional] 

### Return type

[**BalanceStatementResponse**](BalanceStatementResponse.md)

### Authorization

[SSO](../README.md#SSO)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="v1TransactionsGet"></a>
# **v1TransactionsGet**
> TransactionsResponse v1TransactionsGet(_date, opts)



### Example
```javascript
var IimmpactApi = require('iimmpact_api');
var defaultClient = IimmpactApi.ApiClient.instance;

// Configure API key authorization: SSO
var SSO = defaultClient.authentications['SSO'];
SSO.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//SSO.apiKeyPrefix = 'Token';

var apiInstance = new IimmpactApi.TransactionHistoryApi();

var _date = "_date_example"; // String | 

var opts = { 
  'refid': "refid_example", // String | 
  'limit': "limit_example", // String | 
  'sort': "sort_example", // String | 
  'offset': "offset_example", // String | 
  'direction': "direction_example", // String | 
  'status': "status_example", // String | 
  'account': "account_example", // String | 
  'acceptEncoding': "acceptEncoding_example", // String | 
  'sn': "sn_example", // String | 
  'product': "product_example" // String | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.v1TransactionsGet(_date, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **_date** | **String**|  | 
 **refid** | **String**|  | [optional] 
 **limit** | **String**|  | [optional] 
 **sort** | **String**|  | [optional] 
 **offset** | **String**|  | [optional] 
 **direction** | **String**|  | [optional] 
 **status** | **String**|  | [optional] 
 **account** | **String**|  | [optional] 
 **acceptEncoding** | **String**|  | [optional] 
 **sn** | **String**|  | [optional] 
 **product** | **String**|  | [optional] 

### Return type

[**TransactionsResponse**](TransactionsResponse.md)

### Authorization

[SSO](../README.md#SSO)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

