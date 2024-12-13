package learning_tree;

import learning.MergeSort;

public class Treetesting {
	public static void main(String[] args) {
//		Tree test = new Tree();
//		test.insert(10);
//		test.insert(20);
//		System.out.println(test.getValue(20));
//		int a[] = {10,2,3,51,54,55,5};
//		MergeSort sort =new  MergeSort(a);
//		sort.sort();
//		Tree1 test = new Tree1();
//		test.insert();
//		test.display();
//		BSTTree b = new BSTTree();
//		int a[] = {1,2,3,4,5,6};
//		for(int i=0; i<a.length; i++) {
//			b.insert(a[i]);
//		}
//		b.display();
		TreeDemo t = new TreeDemo();
		t.insert(10);
		t.insert(30);
		t.insert(5);
		t.insert(40);
		t.insert(6);
		t.insert(50);
		t.insert(60);
		t.display();
	}

}
