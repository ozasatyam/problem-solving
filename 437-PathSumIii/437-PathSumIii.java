// Last updated: 9/16/2025, 3:10:30 PM
/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode() {}
 *     TreeNode(int val) { this.val = val; }
 *     TreeNode(int val, TreeNode left, TreeNode right) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */
class Solution {
    public int pathSum(TreeNode root, int targetSum) {
        HashMap<Long, Integer> sumCount = new HashMap<Long, Integer>();
        sumCount.put(0L, 1);
        
        return this.findPathSum(root, targetSum, sumCount, 0L);
    }

    int findPathSum(TreeNode root, long targetSum, HashMap<Long, Integer> sumCount,  long sum) {
        if(root == null){
            return 0;
        }
        sum += root.val;
        int count = sumCount.getOrDefault(sum - targetSum,0);
        sumCount.put(sum,sumCount.getOrDefault(sum,0)+1);
        count +=  findPathSum(root.left, targetSum, sumCount, sum);
        count +=  findPathSum(root.right, targetSum, sumCount, sum);
        sumCount.put(sum,sumCount.get(sum)-1);
         if (sumCount.get(sum) == 0) {
            sumCount.remove(sum);
        }
        return count;
    }
}