class Solution {
    public boolean canVisitAllRooms(List<List<Integer>> rooms) {
        int n = rooms.size();
        boolean[] visited = new boolean[n]; // Defaults to false

        // Start the exploration from Room 0
        dfs(0, rooms, visited);

        // Check if every room was visited
        for(boolean hasVisited: visited){
            if(!hasVisited){
               return false;
            }
        }
        return true; // All rooms successfully opened
    }

    private void dfs(int room, List<List<Integer>> rooms, boolean[] visited) {
        // Base case: if already visited, turn back
        if (visited[room]) {
            return;
        }

        // Mark the current room as visited
        visited[room] = true;

        // Loop through all keys available in this room
        for (int key : rooms.get(room)) {
            dfs(key, rooms, visited); // Recursively visit the next room
        }
    }
}

        
