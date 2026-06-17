class Solution {
    public String processStr(String s) {

        StringBuilder output = new StringBuilder();

        for (char c : s.toCharArray()) {
            System.out.println("c =>" + c);
            if (c == '#') {
                output.append(output);
            } else if (c == '%') {
                output.reverse();
            } else if (c == '*') {
                if (output.length() != 0) {
                   output.deleteCharAt(output.length() - 1);
                }
            } else if (c >= 'a' && c <= 'z') {
                output.append(c);
            }
        }

        return output.toString();
    }
}
