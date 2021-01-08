# IimmpactApi.AuthorizationTokenApi

All URIs are relative to *https://api.iimmpact.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**v1TokenPost**](AuthorizationTokenApi.md#v1TokenPost) | **POST** /v1/token | 
[**v1TokenRefreshPost**](AuthorizationTokenApi.md#v1TokenRefreshPost) | **POST** /v1/token/refresh | 


<a name="v1TokenPost"></a>
# **v1TokenPost**
> TokenResponse v1TokenPost(tokenRequest)



### Example
```javascript
var IimmpactApi = require('iimmpact_api');

var apiInstance = new IimmpactApi.AuthorizationTokenApi();

var tokenRequest = new IimmpactApi.TokenRequest(); // TokenRequest | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.v1TokenPost(tokenRequest, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tokenRequest** | [**TokenRequest**](TokenRequest.md)|  | 

### Return type

[**TokenResponse**](TokenResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="v1TokenRefreshPost"></a>
# **v1TokenRefreshPost**
> TokenResponse v1TokenRefreshPost(refreshTokenRequest)



### Example
```javascript
var IimmpactApi = require('iimmpact_api');

var apiInstance = new IimmpactApi.AuthorizationTokenApi();

var refreshTokenRequest = new IimmpactApi.RefreshTokenRequest(); // RefreshTokenRequest | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.v1TokenRefreshPost(refreshTokenRequest, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **refreshTokenRequest** | [**RefreshTokenRequest**](RefreshTokenRequest.md)|  | 

### Return type

[**TokenResponse**](TokenResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

