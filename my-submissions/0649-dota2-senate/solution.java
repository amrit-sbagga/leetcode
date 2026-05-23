class Solution {
    public String predictPartyVictory(String senate) {
        Deque<Integer> radiant = new ArrayDeque<>();
        Deque<Integer> dire = new ArrayDeque<>();

        int n = senate.length();

        for (int i = 0; i < n; i++) { // RDD
            if (senate.charAt(i) == 'R') {
                radiant.addLast(i); // [0]
            } else {
                dire.addLast(i); // [1, 2]
            }
        }

        while (radiant.size() > 0 && dire.size() > 0) {
            if (radiant.peekFirst() < dire.peekFirst()) {
                radiant.addLast(radiant.pollFirst() + n); 
                dire.pollFirst(); 
            } else {
                dire.addLast(dire.pollFirst() + n);
                radiant.pollFirst();
            }
        }

        return (!radiant.isEmpty()) ? "Radiant" : "Dire";
    }
}

