// {
//     "error": [
//     {
//         "field": "password",
//         "defaultMessage": "비밀번호를 입력해주세요"
//     },
//     {
//         "field": "email",
//         "defaultMessage": "이메일을 입력해주세요."
//     }
// ],
//     "status": 400,
// }


import {isArray, isObject, isString} from "./type.js";

export const getValidationResult = (error) => {

    if (isString(error)) {
        return error;
    }
    const messages = {};

    const errorList = isArray(error) ? error : [error];

    for (const eachError of errorList) {
        if (isObject(eachError)) {
            if (eachError.field && eachError.defaultMessage) {
                messages[eachError.field] = eachError.defaultMessage;
            } else {
                return undefined;
            }
        }
    }
    return messages;
}