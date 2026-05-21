class Solution {
    public int[] asteroidCollision(int[] asteroids) {

        Deque<Integer> stack = new ArrayDeque<>();

        for (int i = 0; i < asteroids.length; i++) {
            int curr = asteroids[i];

            if (!stack.isEmpty() && stack.peek() > 0 && curr < 0) {
                if (Math.abs(stack.peek()) < Math.abs(curr)) {
                    stack.pop();
                    i--; // Re-evaluate current asteroid against the new top of the stack
                } else if (Math.abs(stack.peek()) == Math.abs(curr)) {
                    stack.pop(); // Both destroy each other, move to next asteroid
                }
            } else {
                // No collision possible (moving same direction, moving apart, or stack empty)
                stack.push(curr);
            }

        }

        int[] result = new int[stack.size()];
        for (int i = result.length - 1; i >= 0; i--) {
            result[i] = stack.pop();
        }
        return result;
    }
}

