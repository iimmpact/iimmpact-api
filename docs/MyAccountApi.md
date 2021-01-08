# IimmpactApi.MyAccountApi

All URIs are relative to *https://api.iimmpact.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**v1AuthChangePasswordPost**](MyAccountApi.md#v1AuthChangePasswordPost) | **POST** /v1/auth/change-password | 
[**v1AuthNewPasswordChallengePost**](MyAccountApi.md#v1AuthNewPasswordChallengePost) | **POST** /v1/auth/new-password-challenge | 
[**v1BalanceGet**](MyAccountApi.md#v1BalanceGet) | **GET** /v1/balance | 


<a name="v1AuthChangePasswordPost"></a>
# **v1AuthChangePasswordPost**
> InlineResponse2001 v1AuthChangePasswordPost(newPasswordRequest)



### Example
```javascript
var IimmpactApi = require('iimmpact_api');
var defaultClient = IimmpactApi.ApiClient.instance;

// Configure API key authorization: SSO
var SSO = defaultClient.authentications['SSO'];
SSO.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//SSO.apiKeyPrefix = 'Token';

var apiInstance = new IimmpactApi.MyAccountApi();

var newPasswordRequest = new IimmpactApi.ChangePasswordRequest(); // ChangePasswordRequest | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.v1AuthChangePasswordPost(newPasswordRequest, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **newPasswordRequest** | [**ChangePasswordRequest**](ChangePasswordRequest.md)|  | 

### Return type

[**InlineResponse2001**](InlineResponse2001.md)

### Authorization

[SSO](../README.md#SSO)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="v1AuthNewPasswordChallengePost"></a>
# **v1AuthNewPasswordChallengePost**
> NewPasswordResponses v1AuthNewPasswordChallengePost(newPasswordRequest)



### Example
```javascript
var IimmpactApi = require('iimmpact_api');

var apiInstance = new IimmpactApi.MyAccountApi();

var newPasswordRequest = new IimmpactApi.NewPasswordRequest(); // NewPasswordRequest | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.v1AuthNewPasswordChallengePost(newPasswordRequest, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **newPasswordRequest** | [**NewPasswordRequest**](NewPasswordRequest.md)|  | 

### Return type

[**NewPasswordResponses**](NewPasswordResponses.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="v1BalanceGet"></a>
# **v1BalanceGet**
> InlineResponse200 v1BalanceGet()



### Example
```javascript
var IimmpactApi = require('iimmpact_api');
var defaultClient = IimmpactApi.ApiClient.instance;

// Configure API key authorization: SSO
var SSO = defaultClient.authentications['SSO'];
SSO.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//SSO.apiKeyPrefix = 'Token';

var apiInstance = new IimmpactApi.MyAccountApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.v1BalanceGet(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**InlineResponse200**](InlineResponse200.md)

### Authorization

[SSO](../README.md#SSO)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

