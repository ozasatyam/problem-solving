// Last updated: 9/16/2025, 3:10:19 PM
class Solution {
    public int orangesRotting(int[][] grid) {
        Queue<int[]> q = new LinkedList<>();
        int n = grid.length;
        int m = grid[0].length;
        int count_fresh = 0;
        for (int i = 0; i < n; i++) {
            for (int j = 0; j < m; j++) {
                if (grid[i][j] == 2) {
                    q.offer(new int[] { i, j });
                }
                if (grid[i][j] == 1) {
                    count_fresh++;
                }
            }
        }
        if(count_fresh == 0) return 0;
        int[][] dirs = { { 1, 0 }, { -1, 0 }, { 0, -1 }, { 0, 1 } };
        int minuts = -1;
        while (!q.isEmpty()) {
            int size = q.size();
            while (size-- > 0) {
                int poll[] = q.poll();
                int x = poll[0];
                int y = poll[1];

                for (int[] dir : dirs) {
                    int i = x + dir[0];
                    int j = y + dir[1];
                    if (i >= 0 && j >= 0 && i < n && j < m && grid[i][j] == 1) {
                        grid[i][j] = 2;
                        count_fresh--;
                        q.offer(new int[] { i, j });
                    }
                }

            }
            minuts++;
        }
        if (count_fresh == 0)
            return minuts;
        return -1;
    }
}