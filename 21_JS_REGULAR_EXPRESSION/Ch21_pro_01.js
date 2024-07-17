function is_valid_variable(variableName) {
    const validVariablePattern = /^[a-zA-Z_$][a-zA-Z0-9_$]*$/;

    // Test if the variableName matches the pattern
    return validVariablePattern.test(variableName);
}



console.log(is_valid_variable('first_name')); // true
console.log(is_valid_variable('first-name')); // false
console.log(is_valid_variable('1first_name')); // false
console.log(is_valid_variable('firstname')); // true