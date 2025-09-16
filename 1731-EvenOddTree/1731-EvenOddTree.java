// Last updated: 9/16/2025, 3:10:04 PM

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
    public boolean isEvenOddTree(TreeNode root) {
        int level = 1;
        Queue<TreeNode> nodes = new LinkedList<>();
        nodes.offer(root);
        while (!nodes.isEmpty()) {
            int n = nodes.size();
            int evenNumber = 0;
            boolean isEven = (level%2 == 0);
            int oddNumber = Integer.MAX_VALUE;

            for(int i=0;i<n;i++) {
                TreeNode node =  nodes.remove();
                  if(isEven){
                        if(node.val >= oddNumber || ((node.val%2)!=0)) {
                            return false;
                        }
                        oddNumber = node.val;
                    }else{
                        if(node.val <= evenNumber || ((node.val%2)==0)){
                            return false;
                        }
                        evenNumber=node.val;
                    }
                if(node.left != null){
                    nodes.offer(node.left);
                }
                if(node.right != null){
                    nodes.offer(node.right);
                }
            }
            level++;
        }
        return true;
    }
}