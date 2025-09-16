// Last updated: 9/16/2025, 3:11:08 PM
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
    public List<List<Integer>> levelOrder(TreeNode root) {
        List<List<Integer>>  levels = new ArrayList<List<Integer>>();
        if(root==null){
            return levels;
        }
        Queue<TreeNode> q = new LinkedList<>();
        q.offer(root);
        int level = 0;
        while(!q.isEmpty()){
           int n = q.size();
            levels.add(new ArrayList<Integer>());
            for(int i=0;i<n;i++){
               TreeNode node = q.poll();
               levels.get(level).add(node.val);
               if(node.left != null){
                q.offer(node.left);
               }
               if(node.right!=null){
                q.offer(node.right);
               }
            }
            level++;
        }
        
        return levels;
    }
}