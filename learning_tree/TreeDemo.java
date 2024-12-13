package learning_tree;

import learning_tree.Tree1.node;

public class TreeDemo {
	Node root;

	class Node {
		int height;
		int value;
		Node right;
		Node left;

		Node(int value) {
			this.value = value;
		}
	}

	void insert(int n) {
		if (root == null) {
			root = new Node(n);
			root.height = 1;
		} else {
			insert(n, root);
		}
	}

	Node rightRotate(Node n) {
		Node p = n.left;
		Node c = p.right;
		p.right = n;
		p.right.left = c;
		n.height = (Math.max(calculateHeight(n.left), calculateHeight(n.right))) + 1;
		p.height = (Math.max(calculateHeight(p.left), calculateHeight(p.right))) + 1;
		return p;
	}

	Node leftRotate(Node n) {
		Node p = n.right;
		Node c = p.left;
		p.left = n;
		n.right = c;
		n.height = (Math.max(calculateHeight(n.left), calculateHeight(n.right))) + 1;
		p.height = (Math.max(calculateHeight(p.left), calculateHeight(p.right))) + 1;
		return p;

	}

	int calculateHeight(Node n) {
		if (n == null)
			return 0;
		return n.height;
	}

	Node insert(int n, Node node) {
		if (node == null) {
			node = new Node(n);

			return node;
		} else if (n > node.value) {
			node.right = insert(n, node.right);
		} else if (n < node.value) {
			node.left = insert(n, node.left);
		}
		node.height = Math.max(calculateHeight(node.left), calculateHeight(node.right))+1;
		int maxHeight = calculateHeight(node.right)- calculateHeight(node.left);

		if (maxHeight > 1 && n > node.value) {
			return leftRotate(node);
			// right rotate
		} else if (maxHeight < -1 && n < node.value) {
			return rightRotate(node);
			// left rotate
		} else if (maxHeight > 1 && n < node.value) {
			node.right = leftRotate(node);
			return rightRotate(node);

			// left right
		} else if (maxHeight < -1 && n > node.value) {
			node.left = rightRotate(node);
			return leftRotate(node);
			// right left
		}
		return node;
	}

	void display() {
		display(this.root);
	}

	void display(Node n) {
		if (n == null) {
			return;
		}
		System.out.println(n.value + " " + n.height + " Node");
		System.out.println();
		display(n.left);
		display(n.right);
	}

}
