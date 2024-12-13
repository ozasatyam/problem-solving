package learning;

class Vehicle {
	protected String brand = "Ford"; // Vehicle attribute

	public void honk() { // Vehicle method
		System.out.println("Tuut, tuut!");
	}
}

class LinkedLists {
	private static LinkedLists head;
	LinkedLists next;
	int data;

	LinkedLists() {
		// TODO Auto-generated constructor stub
	}

	void insert(int data) {
		LinkedLists temp = new LinkedLists();

		if (head == null) {
			head = temp;
			head.next = null;
			head.data = data;
			return;
		}
		LinkedLists temp2 = head;
		while (temp2.next != null) {
			temp2 = temp2.next;
		}
		temp.data = data;
		temp.next = null;
		temp2.next = temp;

	}

	void print() {
		LinkedLists temp = head;
		while (temp != null) {
			System.out.println(temp.data);
			temp = temp.next;
		}
	}

	void reverseList() {
		LinkedLists current = head;
		LinkedLists pre = null;
		LinkedLists next = null;
		while (current != null) {
			next = current.next;
			current.next = pre;
			pre = current;
			current = next;
		}
		head = pre;
	}

	int findKth(int k) {
		LinkedLists node = head;
		LinkedLists kthNode = head;

		while (node != null) {
			
			if (k == 0) {
				kthNode = kthNode.next;
			}else {
				k--;
			}
			node = node.next;	
		}
		if (k == 0) {
			return kthNode.data;
		}
		return -1;
	}
}

class linkedListReverse extends Vehicle {
	private String modelName = "Mustang"; // Car attribute

	public static void main(String[] args) {

		// Create a myCar object
		LinkedLists myCar = new LinkedLists();

		// Call the honk() method (from the Vehicle class) on the myCar object
		myCar.insert(10);
		myCar.insert(20);
		myCar.insert(230);
		myCar.insert(204);
		System.out.print(myCar.findKth(24));
		myCar.reverseList();
		// Display the value of the brand attribute (from the Vehicle class) and the
		// value of the modelName from the Car class
	}
}
