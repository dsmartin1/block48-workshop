/*
Question 1

Determine the validity of an input string s, which consists solely of the characters (, ), {, }, [, and ]. You need to check the following conditions: 

  The opening brackets: 

- Must match with the corresponding closing brackets of the same type 

- Must be closed in the correct order 

- Should have a corresponding opening bracket of the same type 

Example: 

Input: s = "()" Output: true 
*/

const stringValidation = (s)  => {
    const validPairs = {
        "(": ")",
        "[": "]",
        "{": "}"
    };

    const stack = [];

    for (let char of s) {
        if (validPairs[char]) {
            stack.push(char);
        } else if ( char === ")" || char === "]" || char === "}") {
            if (validPairs[stack.pop()] !== char) {
                return false;
            }
        }
    }
    return stack.length === 0;
}

console.log(stringValidation("{asd}a[s]s(d)f")); // expect true
console.log(stringValidation("{asd[f](asdf)}")); // expect true
console.log(stringValidation("asdf{}asdf[asd(f]asdf)")); // expect false