export const API_CALL_REQUEST = "API_CALL_REQUEST";
export const API_CALL_SUCCESS = "API_CALL_SUCCESS";
export const API_CALL_FAILURE = "API_CALL_FAILURE";

const BASE_URL = 'https://swapi.co/api/'

//GET PEOPLE 
export const PEOPLE_LIST_METHOD  = BASE_URL + 'people';
export const PEOPLE_LIST_SUCCESS = "people_list_success";
export const PEOPLE_LIST_FAILURE = "people_list_failure";

//LOGIN API KEY
export const LOGIN_METHOD = BASE_URL + 'article/login';
export const API_LOGIN_SUCCESS = "api_login_success";
export const API_LOGIN_FAILURE = "api_login_failure";

//OTP VERIFY API KEY
export const OTP_VERIFY_METHOD = BASE_URL + 'article/otp-verify';
export const API_OTP_VERIFY_SUCCESS = "api_otp_verify_success";
export const API_OTP_VERIFY_FAILURE = "api_otp_verify_failure";