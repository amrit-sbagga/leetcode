class Solution {
    public String decodeString(String s) {
        Stack<Integer> numStack = new Stack<>();
        Stack<StringBuilder> strStack = new Stack<>();
        StringBuilder currStr = new StringBuilder();
        int currNum = 0;

        for (int i = 0; i < s.length(); i++) {
            char ch = s.charAt(i);

            if (ch == '[') {
                strStack.push(currStr);
                numStack.push(currNum);
                currStr = new StringBuilder(); // Reset
                currNum = 0; // Reset
            } else if (ch == ']') {
                int prevNum = numStack.pop();
                StringBuilder prevStr = strStack.pop();

                // Repeat currStr prevNum times and append to prevStr
                for (int j = 0; j < prevNum; j++) {
                    prevStr.append(currStr);
                }
                currStr = prevStr;
            } else if (ch >= '0' && ch <= '9') {
                // digit tracking logic
                currNum = currNum * 10 + (ch - '0');
            } else {
                currStr.append(ch);
            }
        }

        return currStr.toString();
    }
}
