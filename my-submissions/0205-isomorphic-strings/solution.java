class Solution {
    public boolean isIsomorphic(String s, String t) {
        
        if (s.length() != t.length()) return false;

        HashMap<Character, Character> mapS = new HashMap<>();
        HashMap<Character, Character> mapT = new HashMap<>();

        for (int i = 0; i < s.length(); i++) {
           char charS = s.charAt(i); // e, g, g
           char charT = t.charAt(i); // a, d, d

            if (mapS.containsKey(charS)) {
                if (mapS.get(charS) != charT) return false;
            } else {
                mapS.put(charS, charT); // ['e': 'a', 'g' : 'd' ]
            }

            if (mapT.containsKey(charT)) {
                if (mapT.get(charT) != charS) return false;
            } else {
                mapT.put(charT, charS);
            }
        }

       return true;
    }
}
