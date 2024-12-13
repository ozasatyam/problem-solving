package learning_tree;

public class Tree {
	private Node rootNode;

	class Node {
		Node leftNode;
		Node righNode;
		int value;

		Node(int value) {
			this.value = value;
		}

		Node() {

		}
	}

	public void insert(int value) {
		var node = new Node(value);
		if (rootNode == null) {
			rootNode = node;
			return;
		}
		Node temp = rootNode;
		while (temp != null) {
			if (temp.value > value) {
				if(temp.leftNode == null) {
					temp.leftNode = node;
					break;
				}
				temp = temp.leftNode;
			} else {
				if(temp.righNode == null) {
					temp.righNode = node;
					break;
				}
				temp = temp.righNode;
			}
		}
	}

	public boolean getValue(int value) {
		// TODO Auto-generated method stub
		Node temp = rootNode;
		while (temp != null) {
			if (temp.value == value)
				return true;
			else if (temp.value > value) {
				temp = temp.leftNode;
			} else {
				temp = temp.righNode;
			}
		}
		return false;
	}

}
