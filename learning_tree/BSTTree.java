package learning_tree;

public class BSTTree {
	node root;

	class node {

		int value;
		node leftNode;
		node rightNode;
		int height;

		node(int value) {
			this.value = value;
		}
	}

	public void insert(int value) {
		if(root != null) {
			System.out.println("root"+root.value);	
		}
		
		if (root == null) {
			root = new node(value);
		} else {
			insert(root, value);
		}
	}

//	private int max(int a, int b) {
//		return (a > b) ? a : b;
//	}

	public int height(node n) {
		if (n == null) {
			return -1;
		}
		return n.height;
	}

	private node rightRotate(node p) {
		node c = p.leftNode;
		node t = c.rightNode;

		c.rightNode = p;
		p.leftNode = t;

		p.height = Math.max(height(p.leftNode), height(p.rightNode) + 1);
		c.height = Math.max(height(c.leftNode), height(c.rightNode) + 1);

		return c;
	}

	private node leftRotate(node c) {
		node p = c.rightNode;
		node t = p.leftNode;

		p.leftNode = c;
		c.rightNode = t;

		p.height = Math.max(height(p.leftNode), height(p.rightNode) + 1);
		c.height = Math.max(height(c.leftNode), height(c.rightNode) + 1);

		return p;
	}

	private node rotate(node n) {
//		System.out.println(" n value" + n.value);
		if (height(n.leftNode) - height(n.rightNode) > 1) {
			// left heavy
			if (height(n.leftNode.leftNode) - height(n.leftNode.rightNode) > 0) {
				// left left case
				return rightRotate(n);
			}
			if (height(n.leftNode.leftNode) - height(n.leftNode.rightNode) < 0) {
				// left right case
				n.leftNode = leftRotate(n.leftNode);
				return rightRotate(n);
			}
		}

		if (height(n.leftNode) - height(n.rightNode) < -1) {
			// right heavy
			if (height(n.rightNode.leftNode) - height(n.rightNode.rightNode) < 0) {
				// right right case
				return leftRotate(n);
			}
			if (height(n.rightNode.leftNode) - height(n.rightNode.rightNode) > 0) {
				// left right case
				n.rightNode = rightRotate(n.rightNode);
				return leftRotate(n);
			}
		}

		return n;
	}

	private node insert(node n, int value) {

		if (n == null) {
			n = new node(value);
			return n;
		}
		System.out.println(n.value);
		if (value < n.value) {
			n.leftNode = insert(n.leftNode, value);
		}

		if (value > n.value) {
			n.rightNode = insert(n.rightNode, value);
		}
		n.height = Math.max(height(n.leftNode), height(n.rightNode)) + 1;
		return rotate(n); // Call rotate after insertion
	}

//	public void insert(node n, int value) {
//		if (n == null) {
//			return;
//		}
//		if (n.value < value) {
//			if (n.rightNode == null) {
//				n.rightNode = new node(value);
//			
//			} else {
//				insert(n.rightNode, value);
//			}
//
//		} else {
//			if (n.leftNode == null) {
//				n.leftNode = new node(value);
//			
//			} else {
//				insert(n.leftNode, value);
//			}
//		}
//		n.height = max(height(n.leftNode), height(n.rightNode)) + 1;
//
//	}

	public void display() {
		display(root);
	}

	public void display(node n) {
		if (n == null) {
			return;
		}
		System.out.println(n.value + " hight " + n.height);
		display(n.leftNode);
		display(n.rightNode);
	}
}
