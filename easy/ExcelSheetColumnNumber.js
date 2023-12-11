/*
Given a string columnTitle that represents the column title as appears in an Excel sheet, return its corresponding column number.
* */
/**
 * @param {string} columnTitle
 * @return {number}
 */
var titleToNumber = function(columnTitle) {
    let result = 0

    for (let i = 0; i < columnTitle.length; i++){
        const char = columnTitle.charAt(i)
        const charCode = char.charCodeAt(0) - 'A'.charCodeAt(0) + 1

        result = result * 26 + charCode
    }

    return result
};

console.log(titleToNumber("BB"))