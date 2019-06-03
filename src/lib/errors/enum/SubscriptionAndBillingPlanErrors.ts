enum SubscriptionAndBillingPlanErrors {
    MISMATCH_SUBSCRIPTION_CURRENCY = 'MISMATCH_SUBSCRIPTION_CURRENCY',
    INVALID_CHARGE_FREQUENCY = 'INVALID_CHARGE_FREQUENCY',
    MISSING_REQUIRED_FIELD = 'MISSING_REQUIRED_FIELD',
    INVALID_BILLING_PLAN_CONFIGURATION = 'INVALID_BILLING_PLAN_CONFIGURATION',
    API_CONFIGURATION_ISSUE = 'API_CONFIGURATION_ISSUE',
    RECURRING_PRICE_MINIMUM_LIMIT_NOT_REACHED = 'RECURRING_PRICE_MINIMUM_LIMIT_NOT_REACHED',
    PRICE_MUST_BE_POSITIVE = 'PRICE_MUST_BE_POSITIVE',
    INVALID_GRACE_PERIOD = 'INVALID_GRACE_PERIOD',
    INVALID_TRIAL_DAYS = 'INVALID_TRIAL_DAYS',
    INVALID_MAX_NUMBER_OF_CHARGES = 'INVALID_MAX_NUMBER_OF_CHARGES',
    INVALID_BILLING_PLAN_NAME_LENGTH = 'INVALID_BILLING_PLAN_NAME_LENGTH',
    CURRENCY_NOT_FOUND = 'CURRENCY_NOT_FOUND',
    ERROR_IN_REQUEST = 'ERROR_IN_REQUEST',
    NON_UPDATABLE_FIELD = 'NON_UPDATABLE_FIELD',
    CANNOT_ADD_ELEMENT = 'CANNOT_ADD_ELEMENT',
    INVALID_STATUS = 'INVALID_STATUS',
    CANNOT_CREATE_INACTIVE_PLAN = 'CANNOT_CREATE_INACTIVE_PLAN',
    CANNOT_DELETE_ELEMENT = 'CANNOT_DELETE_ELEMENT',
    NEGATIVE_PAGE_SIZE = 'NEGATIVE_PAGE_SIZE',
    MAX_PAGE_SIZE_EXCEEDED = 'MAX_PAGE_SIZE_EXCEEDED',
    INVALID_PAGINATION_PARAMETERS = 'INVALID_PAGINATION_PARAMETERS',
    NON_OVERRIDABLE_PLAN_TYPE = 'NON_OVERRIDABLE_PLAN_TYPE',
    NON_OVERRIDABLE_TRIAL_DAYS = 'NON_OVERRIDABLE_TRIAL_DAYS',
    NON_OVERRIDABLE_INITIAL_CHARGE = 'NON_OVERRIDABLE_INITIAL_CHARGE',
    NO_VAULTED_SHOPPER_FOUND = 'NO_VAULTED_SHOPPER_FOUND',
    NEGATIVE_QUANTITY = 'NEGATIVE_QUANTITY',
    INVALID_CURRENCY = 'INVALID_CURRENCY',
    INVALID_OVERRIDE_TRIAL_DAYS = 'INVALID_OVERRIDE_TRIAL_DAYS',
    INVALID_RECURRING_CHARGE_AMOUNT = 'INVALID_RECURRING_CHARGE_AMOUNT',
    INVALID_INITIAL_CHARGE_AMOUNT = 'INVALID_INITIAL_CHARGE_AMOUNT',
    INCORRECT_PAYMENT_DETAILS = 'INCORRECT_PAYMENT_DETAILS',
    MULTIPLE_CARDS_FOUND_NONE_SELECTED = 'MULTIPLE_CARDS_FOUND_NONE_SELECTED',
    SWITCH_PLAN_ERROR = 'SWITCH_PLAN_ERROR',
    INVALID_DATE_FORMAT = 'INVALID_DATE_FORMAT',
    CANNOT_UPDATE_CANCELED_SUBSCRIPTION = 'CANNOT_UPDATE_CANCELED_SUBSCRIPTION',
    EXISTING_CHARGE_PENDING_APPROVAL = 'EXISTING_CHARGE_PENDING_APPROVAL',
}

export default SubscriptionAndBillingPlanErrors;
