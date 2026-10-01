var isValid = function(s) {
    const map = { ')': '(', '}': '{', ']': '[' };
    const stack = [];

    for (const char of s) {
        if (Object.values(map).includes(char)) {
            stack.push(char);
        } else if (map[char]) {
            if (stack.length === 0 || stack.pop() !== map[char]) {
                return false;
            }
        }
    }
    return stack.length === 0;
};
