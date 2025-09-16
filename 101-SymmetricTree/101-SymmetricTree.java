// Last updated: 9/16/2025, 3:11:09 PM
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
    
    boolean traverse(TreeNode leftRoot,TreeNode rightRoot) {
        if(leftRoot == null && rightRoot == null){
            return true;
        }
        else if(leftRoot == null ||  rightRoot == null){
            return false;
        }
        if(leftRoot.val != rightRoot.val){
            return false;
        }
        boolean ans = traverse(leftRoot.left,rightRoot.right);
        if(!ans) return false;
        return traverse(leftRoot.right,rightRoot.left);
    }
    
    public boolean isSymmetric(TreeNode root) {
    return traverse(root.left,root.right);
       
    }
}