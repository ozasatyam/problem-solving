package learning;

class heaps {
	int arra[] = new int[100];
	int size = 0;

	heaps() {
		arra[0] = -1;
	}

	void swap(int parent, int index) {
		int temp = arra[parent];
		arra[parent] = arra[index];
		arra[index] = arra[parent];
		arra[parent] = temp;
	}

	void insert(int val) {
		size++;
		int index = size;
		arra[index] = val;
		while (index > 1) {
			int parent = index / 2;
			if (arra[parent] > index) {
				swap(parent, index);
				index = parent;
			} else {
				return;
			}
		}
	}

	void deleteNode() {
		arra[1] = arra[size];
		size--;
		int i = 1;
		while (i < size) {
			int leftIndex = i * 2;
			int rightIndex = (i * 2) + 1;

			if ((leftIndex > size) && (arra[leftIndex] > arra[i])) {
				swap(leftIndex, i);
				i = leftIndex;
			} else if ((rightIndex > size) && (arra[rightIndex] > arra[i])) {
				swap(rightIndex, i);
				i = rightIndex;
			} else {
				return;
			}

		}

	}

	int[] heapSquence(int i, int n, int arra[]) {
		int left = i * 2;
		int right = (i * 2) + 1;
		int highest = i;
		if (left < n && arra[highest] < arra[left]) {
			highest = left;
		}
		if(right < n && arra[i] < arra[right]) {
			highest = right;
		}
		if(highest != i) {
			int temp = arra[i];
			arra[i] = arra[highest];
			arra[highest] = temp;
			heapSquence(highest, n, arra);
		}
		return arra;

	}

	void print() {
		for (int i = 0; i <= size; i++) {
			System.out.println(arra[i]);
		}
	}

}

public class Heap {

	public static void main(String[] args) {
		heaps h = new heaps();
		h.insert(22);
		h.insert(224);
		h.insert(212);
		int arr[] = {10,3,5,6,63,5,6};
		for(int i=args.length/2;i>0;i--) {
			h.heapSquence(i, arr.length, arr);
		}
		h.insert(221);
		h.deleteNode();
		h.print();
	}
}
