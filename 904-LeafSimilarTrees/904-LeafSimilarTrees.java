// Last updated: 9/16/2025, 3:10:22 PM
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
    ArrayList<Integer> leftNodeValues = new ArrayList<Integer>();
    ArrayList<Integer> rightNodeValues = new ArrayList<Integer>();

    public void travers(TreeNode root, ArrayList<Integer> nodeValues) {
        if (root == null) {

        } else {
            travers(root.left, nodeValues);
            travers(root.right, nodeValues);
            if (root.left == null && root.right == null) {
                nodeValues.add(root.val);
            }
        }
        return;
    }

    public boolean leafSimilar(TreeNode root1, TreeNode root2) {
        this.travers(root1, leftNodeValues);
        this.travers(root2,rightNodeValues);
      return leftNodeValues.equals(rightNodeValues);
    }
}