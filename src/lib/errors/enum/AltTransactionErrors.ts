enum AltTransactionErrors {
    INVALID_API_VERSION = 'INVALID_API_VERSION',
    VALIDATION_GENERAL_FAILURE = 'VALIDATION_GENERAL_FAILURE',
    XSS_EXCEPTION = 'XSS_EXCEPTION',
    GENERAL_PAYMENT_PROCESSING_ERROR = 'GENERAL_PAYMENT_PROCESSING_ERROR',
    FAILED_CREATING_PAYPAL_TOKEN = 'FAILED_CREATING_PAYPAL_TOKEN',
    NO_AVAILABLE_PROCESSORS = 'NO_AVAILABLE_PROCESSORS',
    INVALID_PAYMENT_DETAILS = 'INVALID_PAYMENT_DETAILS',
    SHOPPER_NOT_FOUND = 'SHOPPER_NOT_FOUND',
    SHOPPER_COUNTRY_OFAC_SANCTIONED = 'SHOPPER_COUNTRY_OFAC_SANCTIONED',
    MULTIPLE_PAYMENT_METHODS_NON_SELECTED = 'MULTIPLE_PAYMENT_METHODS_NON_SELECTED',
    INVALID_STEP_FIELD = 'INVALID_STEP_FIELD',
    MULTIPLE_TRANSACTIONS_FOUND = 'MULTIPLE_TRANSACTIONS_FOUND',
    TRANSACTION_LOCKED = 'TRANSACTION_LOCKED',
    INVALID_ALT_TRANSACTION_TYPE = 'INVALID_ALT_TRANSACTION_TYPE',
    MULTI_SHOPPER_INFORMATION = 'MULTI_SHOPPER_INFORMATION',
    MISSING_SHOPPER_INFORMATION = 'MISSING_SHOPPER_INFORMATION',
    MISSING_PAYER_INFO_FIELDS = 'MISSING_PAYER_INFO_FIELDS',
    EXPECT_NO_ECP_DETAILS = 'EXPECT_NO_ECP_DETAILS',
    INVALID_ECP_ACCOUNT_TYPE = 'INVALID_ECP_ACCOUNT_TYPE',
    MISMATCH_SUBSCRIPTION_CURRENCY = 'MISMATCH_SUBSCRIPTION_CURRENCY',
    PAYPAL_UNSUPPORTED_CURRENCY = 'PAYPAL_UNSUPPORTED_CURRENCY',
    SUBSCRIPTION_NOT_FOUND = 'SUBSCRIPTION_NOT_FOUND',
    MISSING_ARGUMENTS = 'MISSING_ARGUMENTS'
}

export default AltTransactionErrors;
