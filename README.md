# IIMMPACT API - The Node Js library for IIMMPACT API

## Installation

#### npm

```shell
npm install @iimmpact/iimmpact-api --save
```

### Webpack Configuration

Using Webpack you may encounter the following error: "Module not found: Error:
Cannot resolve module", most certainly you should disable AMD loader. Add/merge
the following section to your webpack config:

```javascript
module: {
  rules: [
    {
      parser: {
        amd: false
      }
    }
  ]
}
```

## Getting Started

Please follow the [installation](#installation) instruction and execute the following JS code:

```javascript
var IimmpactApi = require('@iimmpact/iimmpact-api');

var api = new IimmpactApi.AuthorizationTokenApi()

var tokenRequest = new IimmpactApi.TokenRequest(); // {TokenRequest} 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.v1TokenPost(tokenRequest, callback);

```

## Documentation for API Endpoints

All URIs are relative to *https://api.iimmpact.com*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*IimmpactApi.AuthorizationTokenApi* | [**v1TokenPost**](docs/AuthorizationTokenApi.md#v1TokenPost) | **POST** /v1/token | 
*IimmpactApi.AuthorizationTokenApi* | [**v1TokenRefreshPost**](docs/AuthorizationTokenApi.md#v1TokenRefreshPost) | **POST** /v1/token/refresh | 
*IimmpactApi.CallbackUrlApi* | [**v1CallbackUrlGet**](docs/CallbackUrlApi.md#v1CallbackUrlGet) | **GET** /v1/callback-url | 
*IimmpactApi.CallbackUrlApi* | [**v1CallbackUrlPost**](docs/CallbackUrlApi.md#v1CallbackUrlPost) | **POST** /v1/callback-url | 
*IimmpactApi.CarInsuranceApi* | [**v1CarInsuranceGet**](docs/CarInsuranceApi.md#v1CarInsuranceGet) | **GET** /v1/car-insurance | 
*IimmpactApi.JPJRecordsApi* | [**v1JpjDrivingLicenseGet**](docs/JPJRecordsApi.md#v1JpjDrivingLicenseGet) | **GET** /v1/jpj/driving-license | 
*IimmpactApi.JPJRecordsApi* | [**v1JpjDrivingTestResultsGet**](docs/JPJRecordsApi.md#v1JpjDrivingTestResultsGet) | **GET** /v1/jpj/driving-test-results | 
*IimmpactApi.JPJRecordsApi* | [**v1JpjMotorVehicleExpiryGet**](docs/JPJRecordsApi.md#v1JpjMotorVehicleExpiryGet) | **GET** /v1/jpj/motor-vehicle-expiry | 
*IimmpactApi.JPJRecordsApi* | [**v1JpjSummonsGet**](docs/JPJRecordsApi.md#v1JpjSummonsGet) | **GET** /v1/jpj/summons | 
*IimmpactApi.LowBalanceWarningApi* | [**v1LowBalanceThresholdGet**](docs/LowBalanceWarningApi.md#v1LowBalanceThresholdGet) | **GET** /v1/low-balance-threshold | 
*IimmpactApi.LowBalanceWarningApi* | [**v1LowBalanceThresholdPost**](docs/LowBalanceWarningApi.md#v1LowBalanceThresholdPost) | **POST** /v1/low-balance-threshold | 
*IimmpactApi.MyAccountApi* | [**v1AuthChangePasswordPost**](docs/MyAccountApi.md#v1AuthChangePasswordPost) | **POST** /v1/auth/change-password | 
*IimmpactApi.MyAccountApi* | [**v1AuthNewPasswordChallengePost**](docs/MyAccountApi.md#v1AuthNewPasswordChallengePost) | **POST** /v1/auth/new-password-challenge | 
*IimmpactApi.MyAccountApi* | [**v1BalanceGet**](docs/MyAccountApi.md#v1BalanceGet) | **GET** /v1/balance | 
*IimmpactApi.ProductEnquiryApi* | [**v1ProductsGet**](docs/ProductEnquiryApi.md#v1ProductsGet) | **GET** /v1/products | 
*IimmpactApi.ServicesApi* | [**v1BillPresentmentGet**](docs/ServicesApi.md#v1BillPresentmentGet) | **GET** /v1/bill-presentment | 
*IimmpactApi.ServicesApi* | [**v1NetworkstatusGet**](docs/ServicesApi.md#v1NetworkstatusGet) | **GET** /v1/networkstatus | 
*IimmpactApi.ServicesApi* | [**v1TopupPost**](docs/ServicesApi.md#v1TopupPost) | **POST** /v1/topup | 
*IimmpactApi.TransactionHistoryApi* | [**v1BalanceStatementGet**](docs/TransactionHistoryApi.md#v1BalanceStatementGet) | **GET** /v1/balance-statement | 
*IimmpactApi.TransactionHistoryApi* | [**v1TransactionsGet**](docs/TransactionHistoryApi.md#v1TransactionsGet) | **GET** /v1/transactions | 


## Documentation for Models

 - [IimmpactApi.BalanceResponse](docs/BalanceResponse.md)
 - [IimmpactApi.BalanceResponseData](docs/BalanceResponseData.md)
 - [IimmpactApi.BalanceStatementResponse](docs/BalanceStatementResponse.md)
 - [IimmpactApi.BalanceStatementResponseData](docs/BalanceStatementResponseData.md)
 - [IimmpactApi.BalanceStatementResponseLinks](docs/BalanceStatementResponseLinks.md)
 - [IimmpactApi.BalanceStatementResponseMeta](docs/BalanceStatementResponseMeta.md)
 - [IimmpactApi.BillPresentmentResponse](docs/BillPresentmentResponse.md)
 - [IimmpactApi.BillPresentmentResponseData](docs/BillPresentmentResponseData.md)
 - [IimmpactApi.BillPresentmentResponseMetadata](docs/BillPresentmentResponseMetadata.md)
 - [IimmpactApi.CallbackUrlResponse](docs/CallbackUrlResponse.md)
 - [IimmpactApi.CallbackUrlResponseData](docs/CallbackUrlResponseData.md)
 - [IimmpactApi.CallbackUrlResponseMetadata](docs/CallbackUrlResponseMetadata.md)
 - [IimmpactApi.CarInsuranceRespone](docs/CarInsuranceRespone.md)
 - [IimmpactApi.CarInsuranceResponeVariant](docs/CarInsuranceResponeVariant.md)
 - [IimmpactApi.ChangePasswordRequest](docs/ChangePasswordRequest.md)
 - [IimmpactApi.DepositRequest](docs/DepositRequest.md)
 - [IimmpactApi.DrivingLicenseRespone](docs/DrivingLicenseRespone.md)
 - [IimmpactApi.DrivingLicenseResponeInner](docs/DrivingLicenseResponeInner.md)
 - [IimmpactApi.DrivingTestRespone](docs/DrivingTestRespone.md)
 - [IimmpactApi.DrivingTestResponeEnquiryTestPart1](docs/DrivingTestResponeEnquiryTestPart1.md)
 - [IimmpactApi.Empty](docs/Empty.md)
 - [IimmpactApi.Error](docs/Error.md)
 - [IimmpactApi.InlineResponse200](docs/InlineResponse200.md)
 - [IimmpactApi.InlineResponse2001](docs/InlineResponse2001.md)
 - [IimmpactApi.InlineResponse2002](docs/InlineResponse2002.md)
 - [IimmpactApi.InlineResponse2002Data](docs/InlineResponse2002Data.md)
 - [IimmpactApi.InlineResponse200Data](docs/InlineResponse200Data.md)
 - [IimmpactApi.JPJRecordsResponse](docs/JPJRecordsResponse.md)
 - [IimmpactApi.JPJSummonsResponse](docs/JPJSummonsResponse.md)
 - [IimmpactApi.LowBalanceWarningResponse](docs/LowBalanceWarningResponse.md)
 - [IimmpactApi.LowBalanceWarningResponseData](docs/LowBalanceWarningResponseData.md)
 - [IimmpactApi.LowBalanceWarningResponseMetadata](docs/LowBalanceWarningResponseMetadata.md)
 - [IimmpactApi.NetworkStatusResponse](docs/NetworkStatusResponse.md)
 - [IimmpactApi.NetworkStatusResponseData](docs/NetworkStatusResponseData.md)
 - [IimmpactApi.NetworkStatusResponseMetadata](docs/NetworkStatusResponseMetadata.md)
 - [IimmpactApi.NewPasswordRequest](docs/NewPasswordRequest.md)
 - [IimmpactApi.NewPasswordResponses](docs/NewPasswordResponses.md)
 - [IimmpactApi.OnlyMessageRespone](docs/OnlyMessageRespone.md)
 - [IimmpactApi.RefreshTokenRequest](docs/RefreshTokenRequest.md)
 - [IimmpactApi.TokenRequest](docs/TokenRequest.md)
 - [IimmpactApi.TokenResponse](docs/TokenResponse.md)
 - [IimmpactApi.TokenResponseAuthenticationResult](docs/TokenResponseAuthenticationResult.md)
 - [IimmpactApi.TopupRequest](docs/TopupRequest.md)
 - [IimmpactApi.TopupResponse](docs/TopupResponse.md)
 - [IimmpactApi.TopupResponseData](docs/TopupResponseData.md)
 - [IimmpactApi.TransactionsResponse](docs/TransactionsResponse.md)
 - [IimmpactApi.TransactionsResponseBalance](docs/TransactionsResponseBalance.md)
 - [IimmpactApi.TransactionsResponseData](docs/TransactionsResponseData.md)
 - [IimmpactApi.TransactionsResponseMeta](docs/TransactionsResponseMeta.md)
 - [IimmpactApi.TransactionsResponseProduct](docs/TransactionsResponseProduct.md)
 - [IimmpactApi.TransactionsResponseStatus](docs/TransactionsResponseStatus.md)
 - [IimmpactApi.VehicleExpiryResponse](docs/VehicleExpiryResponse.md)


## Documentation for Authorization


### IIMMPACT-COGNITO

- **Type**: API key
- **API key parameter name**: Authorization
- **Location**: HTTP header

### SSO

- **Type**: API key
- **API key parameter name**: Authorization
- **Location**: HTTP header

### api_key

- **Type**: API key
- **API key parameter name**: x-api-key
- **Location**: HTTP header
