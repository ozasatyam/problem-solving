package learning;

public class LinkedList {

	static LinkedList head = null;
	LinkedList next;
	int data;

	void insert(int data) {
		LinkedList node = new LinkedList();
		if (head == null) {
			node.data = data;
			node.next = null;
			head = node;
		} else {
			System.out.println(head.data);
			System.out.println("hielo");
			LinkedList temp = head;
			while (temp.next != null) {
				temp = temp.next;
			}
			node.data = data;
			node.next = null;
			temp.next = node;

		}
	}

	int print() {
		LinkedList temp = head;
		while (temp.next != null) {
			temp = temp.next;
		}
		return temp.data;

	}
}
