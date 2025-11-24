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
class BSTIterator {
    TreeNode root;
        Stack<TreeNode> stack ;

    public BSTIterator(TreeNode root) {
        this.root=root;
        stack = new Stack<>();

        while (this.root != null) {
            stack.push(this.root);
            this.root = this.root.left;
        }
    }

    public int next() {
        TreeNode curr = stack.pop();
        int ans = curr.val;
        curr = curr.right;
        while (curr != null) {
            stack.push(curr);
            curr = curr.left;
        }
        return ans;
    }

    public boolean hasNext() {
        return !(stack.isEmpty());
    }
}

/**
 * Your BSTIterator object will be instantiated and called as such:
 * BSTIterator obj = new BSTIterator(root);
 * int param_1 = obj.next();
 * boolean param_2 = obj.hasNext();
 */